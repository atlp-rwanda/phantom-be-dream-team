import jwt from 'jsonwebtoken';
import AppError from '../utils/appError';
import models from '../models';
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
  });
};

exports.login = async (req, res, next) => {
  const {email, password} = req.body;

  // 1)Check if email & password exist.
  if (!email || !password) {
    // eslint-disable-next-line max-len
    return next(new AppError(req.t('please enter your email and password'), 400));
  }

  // 2)Check if user exist and password is correct

  const user = await models.User.findOne({where: {email}});
  // eslint-disable-next-line max-len
  if (!user) return res.status(401).json({status: 'fail', message: 'Invalid email'});

  const isPasswordValid = await models.User.findOne({where: {password}});
  // eslint-disable-next-line max-len
  if (!isPasswordValid) return res.status(401).json({status: 'fail', message: 'Invalid password'});
  // 3)if everything is ok, then send token to user
  createSendToken(user, 200, res);
};

