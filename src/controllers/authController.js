import jwt from 'jsonwebtoken';
import models from '../models';
import bcrypt from 'bcryptjs';
const signToken = (id) =>
  jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  // remove the password from the output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
    message: 'Login Successful',
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

