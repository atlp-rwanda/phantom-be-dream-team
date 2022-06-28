// import createSendToken from '../helpers/createSendToken';
import models from '../models';
import bcrypt from 'bcryptjs';


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

