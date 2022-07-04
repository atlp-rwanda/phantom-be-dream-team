import 'dotenv/config';
import jwt from 'jsonwebtoken';

// eslint-disable-next-line camelcase
const private_key = process.env.JWT_SECRET;

export const signToken = (payload) => {
  return jwt.sign(payload, private_key);
};

export const decodeToken = (token) => {
  return jwt.decode(token, private_key);
};