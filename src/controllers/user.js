import dotenv from 'dotenv';
import model from '../models';

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
        message: `No user found with this  id ${id}`,
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
        message: `No user found with the id ${id}`,
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
  
      user.save();
      return res.send({
        message: `Profile updated`,
      });
    } catch (err) {
      return res.status(500).send({
        message: `Error: ${err.message}`,
      });
    }
  };
  export { getUser, updateUser };