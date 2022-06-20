import dotenv from 'dotenv';
import model from '../models';
import { Sequelize } from 'sequelize';

const User = model.User;
dotenv.config();

const  getUser = async (req, res) => {
    const { id } = req.params;
  
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
  
    return res.send(user);
  };
  
  const updateUser = async (req, res) => {
    const { name, email, phone, password } = req.body;
    const { id } = req.params;
  
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
  
    try {
      if (name) {
        user.name = name;
      }
      
      if (email) {
          user.email = email;
        }
      if (phone) {
        user.phone = phone;
      }
      if(password){
        user.password = password;  
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
  };
  export { getUser, updateUser };