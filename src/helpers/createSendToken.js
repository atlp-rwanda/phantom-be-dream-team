import jwt from 'jsonwebtoken';
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
    message: 'Login Successful',
    userID:user.id
  });
};

export default createSendToken;

