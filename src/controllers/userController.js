import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import generatePassword from '../helpers/generatePassword';
import model from '../models';

const User = model.User;

dotenv.config();
const addUser = async (req, res) => {
  // static create(req, res) {
  const {firstName, lastName, email, role} = req.body;
  const userpassword = generatePassword();
  const password = await bcrypt.hash(userpassword, 10);

  if (firstName === '' || lastName === '' || email === '' || role === '') {
    return res.status(500).json({
      message: req.t('required_field'),
    });
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    return res.status(400).json({
      message: req.t('email_invalid'),
    });
  }
  User.findOne({
    where: {
      email,
    },
  }).then((emailExists) => {
    if (emailExists) {
      return res.status(400).json({
        message: 'email_exists',
      });
    }
    return User.create({
      firstName,
      lastName,
      email,
      role,
      password,
    })
        .catch((err) =>
          res.status(400).json({
            error: err.message,
          }),
        );
  });
};
export {addUser};

