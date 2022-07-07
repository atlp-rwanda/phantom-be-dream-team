// @ts-nocheck
const nodemailer = require("nodemailer")
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });


const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service:process.env.EMAIL_SERVICE,
    auth: {
      user:process.env.EMAIL_USERNAME,
      pass:process.env.EMAIL_PASSWORD
    },
  })

  const emailOptions = {
    from: "phantom <avengersphantom7@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  }
  await transporter.sendMail(emailOptions)
}

module.exports = sendEmail