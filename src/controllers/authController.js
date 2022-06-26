// import createSendToken from '../helpers/createSendToken';
import jwt  from 'jsonwebtoken';
import models from '../models';
import bcrypt from 'bcryptjs';
import { promisify } from 'util';
import { deleteToken, setToken } from '../config/redix';


  const signToken = (id) =>{
  return jwt.sign({ id }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES_IN,
  });
  
}

const createSendToken = async(user, statusCode, res) => {
  const token =  signToken(user.dataValues.id);
 await setToken(token, token);

  //remove the password from the output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.login = async (req, res, next) => {
  const {email, password} = req.body;

  // 1)Check if email & password exist.
  if (!email || !password) {
    // eslint-disable-next-line max-len
    return res.status(400).json({status: 'fail', message: 'Please provide email and password!'});
  }

  // 2)Check if user exist and password is correct

  const user = await models.User.findOne({where: {email}});
  // eslint-disable-next-line max-len
  if (!user) return res.status(401).json({status: 'fail', message: 'Incorrect email or password'});
  const correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };

  if (!user || !(await correctPassword(password, user.password))) {
    // eslint-disable-next-line max-len
    return res.status(401).json({status: 'fail', message: 'Incorrect email or password'});
  }
  createSendToken(user, 200, res);
};

export const logout = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const delTok = await deleteToken(token);
    if (!delTok) {
      res.status(500).json({message:'error while clearing your data'});
    }
    res.status(200).json({message:"Logged out successfully"})
  } catch (error) {
    return res.status(500).json({message:'There was error loging out'});
  }
};

exports.protect = async (req, res, next) => {
  //1 Getting tocken and check its ther
  let token 
  if (!req.headers.authorization)
    return next(new AppError(req.t('not_logged_in'), 500));
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError(req.t('not_logged_in'), 401));
  }
  // 2. verificatoin token
  var decoded;
  try {
    decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  } catch (error) {
    return next(new AppError('You need to login again', 401));
  }

  // 3.check if user still exists
console.log(decoded)
  const currentUser = await models.User.findOne({
    where: {
      id: decoded.id,
    },
  });

  if (!currentUser) {
    return next(new AppError(req.t('user_nolonger_exist'), 401));
  }

  //Grant access to protected roe
  req.user = currentUser;
  next();
};

