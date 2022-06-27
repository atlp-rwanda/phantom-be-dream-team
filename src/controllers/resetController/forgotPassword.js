import  jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import model from "../../models";
import "dotenv/config" 

const User = model.User
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.TRANSPORTER_HOST,
    port: process.env.TRANSPORTER_PORT,
    secure: process.env.SECURE,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_EMAIL_PASSWORD,
    },

})

const forgotPassword = (req,res) => {
    const {email} = req.body

    User.findOne({
        where: {
            email         
        }
    })
    .then(user =>{
        if(user) {
            const resetToken = jwt.sign({user}, process.env.RESET_PASSWORD_SECRET, {
                expiresIn : process.env.RESET_EXPIRE_TIME
            })
            res.cookie("jwt", resetToken, {
                httpOnly : true,
                expiresIn : process.env.RESET_EXPIRE_TIME
            })
            const url = `${process.env.URL}`
            transporter.sendMail({
                from : process.env.USER_EMAIL,
                to : email,
                subject : "reset your password",
                html : `<h1>Please find below your token to reset your password</h1>
                <p>${resetToken}</p>
                `
            })
            res.status(200).json({
                message : req.t('verificationEmail')
            })
        }
        else {
            res.status(400).json({
                message : req.t('verificationEmailFailed'),
                error: `The email ${email} wasn't found`
            })
        }
    })
    .catch(error =>{
        console.log(error.message)
    })
}

export default forgotPassword