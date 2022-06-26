import redisClient  from '../config/redix';
import Models from '../models';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import {config } from 'dotenv';
config()

const { User } = Models;
export default async (req, res, next) => {

  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({message: 'Please login first or check the token you are sending.'})
    }
    const foundToken = await redisClient.get(token)
    
    if(!foundToken) {
        return res.status(401).json({message: 'You are not allowed. Check Your token'})
    }

      // 2. verificatoin token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3.check if user still exists
    const user = await User.findOne({
      where: {
        id: decoded.id,
      },
    });

    if (!user) {
      return res.status(401).json({message: 'User not found in the database '})
    }
    req.user = user;
    return next();


  } catch (error) {
    console.log(error);
    return res.status(401).json({message: 'Not authorized. No token provided'})
  }
};