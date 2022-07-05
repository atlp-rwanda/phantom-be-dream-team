import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
function sendEmail(message, toEmail) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_EMAIL_P,
    },
  });
  let mailOptions = {
    from: process.env.USER_EMAIL, // sender address
    to: toEmail, // list of receivers
    subject: 'Registration Successfull', // Subject line
    html: message, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error.message);
    }

    res.render('contact', { msg: 'Email has been sent' });
  });
}

function sendReset(email) {
  var token = jwt.sign({ email_id: email }, process.env.EMAIL_CRYPT, {
    expiresIn: '1h',
  });

  const url = `https://localhost:3000/api/v1/users/reset/${token}`;
  const msg = `<h2>DOMINATORS</h2>
<h4>Password Reset Link</h4>
<div>
  <a href='${url}' target='__blank'>
  <button style='width:160;height:24; background-color:#97cfc3'>Reset Password
  </button></a><br>
  </div>
`;
  return msg;
}

function resetLink(user) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.APP_MAIL,
      pass: process.env.APP_MAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.APP_MAIL, // sender address
    to: user, // list of receivers
    subject: 'Reset Password', // Subject line
    html: sendReset(user), // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return 0;
    else return 1;
  });
}

export { sendEmail, resetLink };