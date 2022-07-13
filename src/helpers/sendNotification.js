import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
function sendNotification(message, toEmail) {
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
    subject: 'Assignment of Drivers to Buses', // Subject line
    html: message, // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
}

function sendNotficationUnAssigned(message, toEmail) {
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
    subject: 'Un Assignment of Drivers to Buses', // Subject line
    html: message, // html body
  };
  console.log(message);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
}
export { sendNotification, sendNotficationUnAssigned };