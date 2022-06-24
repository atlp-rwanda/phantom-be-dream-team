import {decodeToken} from './jwt';

export const checkAdmin = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (bearerToken) {
    const token = bearerToken.split(' ')[1];
    const payload = decodeToken(token);
    if (payload) return next();
    // eslint-disable-next-line max-len
    return res.status(401).json({status: 'fail', message: 'you are not allowed to access this service'});
  }
  return res
      .status(401)
      .json({status: 'fail', message: 'Not Authorized , please login'});
};
