import dotenv from 'dotenv';
import model from '../models';
import { Sequelize } from 'sequelize';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const User = model.User;
dotenv.config();

const  getUser =  async (req, res) => {
    const { id } = req.params;

    
    try{
    const user = await User.findAll({
      where: {
          id
      },
      attributes: ['id', 'names','phone','email','role'], 
    });
  
    if (user=='') {
      return res.status(400).send({
        message: req.t('noUserFound')+' '+id
      });
    }
  
    return res.send(user);
  }catch(err){
    return res.status(500).send({
      message: `Error:${err.message}`
    });
  }
  };
  
  const updateUser = async (req, res) => {
    var logged=false
    const token = req.header('auth-token');
    if(!token) return res.status(401).send({
      message: req.t('AccessDenied')
    });

    try{
      let tsec= process.env.JWT_SECRET|| "nmmskl77.;y6";
      const verified = jwt.verify(token, tsec);
      req.user = verified; 
      logged=true
    }catch(err){
        res.status(401).send({
          message: req.t('WrongToken')
        });
    }
    if(logged==true){

  
    const { names, phone, email, Newpassword,Oldpassword } = req.body;
    const { id } = req.params;
    try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
  
    if (!user) {
      return res.status(400).send({
        message: req.t('noUserFound')+' '+id
      });
    }
  
    
      if (names) {
        user.names = names;
      }
      if (phone) {
        user.phone = phone;
      }
      if (email) {
          user.email = email;
        }
      if(Newpassword){
       
        const correctPassword = async function( Oldpassword, Newpassword) {
          return await bcrypt.compare( Oldpassword,  Newpassword);
        };
        if(await correctPassword(Oldpassword, user.password)){
          const Npassword = await bcrypt.hash(Newpassword, 10);
          user.password = Npassword;  
        }
        else{
          return res.send({
            message: req.t('WOP')
          });
        }
      }
      user.updated = Sequelize.fn('NOW');
  
      user.save();
      return res.send({
        message: req.t('profileUpdate')
      });
    } catch (err) {
      return res.status(500).send({
        message: `Error: ${err.message}`,
      });
    }
  }};
  export { getUser, updateUser };
