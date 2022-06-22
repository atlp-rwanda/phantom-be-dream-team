import dotenv from 'dotenv';

import bcrypt from 'bcrypt';
import generatePassword from '../helpers/generatePassword';
import sendEmail from '../helpers/sendEmail';
import model from '../models';

const User = model.User;

dotenv.config();

const addUser = async (req, res) => {
  // static create(req, res) {
  const { firstName, lastName, email, role } = req.body;
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
  })
    .then((emailExists) => {
      if (emailExists) {
        return res.status(400).json({
          message: req.t('email_exists'),
        });
      }
      console.log(password);
      return User.create({
        firstName,
        lastName,
        email,
        role,
        password,
      })

        .then((data) => {
          if (data) {
            const message = `
              <h2>Your account has been registered. you can now login in</h2>
              <a href="http://localhost:5000/login">here</a>
              <p>${req.body.email}. Note that your login password will be <em>${userpassword}</em></p>
              `;
            sendEmail(message, data.email);
            res.status(201).json({
              message: req.t('user_created'),
              data,
            });
          }
        })
        .catch((err) =>
          res.status(400).json({
            error: err.message,


          })
          
        );

    })
   
};

const allUsers = (req, res) => {
  return User.findAll({
    attributes: {
      exclude: ['password'],
    },
  })

    .then((data) => {
      console.log(data);
      if (data.length === 0) {
        return res.status(404).json({
          message: req.t('no_users'),
        });
      }
      return res.status(200).json({
        data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err.message,
      });
    });
};

const findOneUser = (req, res) => {
  const { id } = req.params;
  User.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ['password'],
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          message: req.t('no_user'),
        });
      }
      return res.status(200).json({
        user,
      });
    })
    .catch((err) =>
      res.status(400).json({
        error: 'invalid input id, it must be a number' || err.message,
      })
    );
};

const update = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, role } = req.body;
  User.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ['password'],
    },
  }).then((user) => {
    if (!user) {
      return res.status(400).json({
        message: req.t(`user_id`),
      });
    }
    return user
      .update({
        firstName: firstName || user.firstName,
        lastName: lastName || user.lastName,
        role: role || user.role,
      })
      .then((updatedUser) => {
        res.status(200).json({
          message: req.t(`user_update`),
          updatedUser: {
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            role: updatedUser.role,
            email: updatedUser.email,
          },
        });
      });
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  User.findOne({
    where: {
      id,
    },
  }).then((user) => {
    if (!user) {
      return res.status(404).json({
        message: req.t(`uesr_exists`),
      });
    }
    return user.destroy().then(() => {
      res.status(200).json({
        message: req.t(`user_deleted`),
      });
    });
  });
};

export { addUser, allUsers, findOneUser, update, deleteUser };
