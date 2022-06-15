import bcrypt from 'bcrypt'
import model from "../models";
import "dotenv/config" 

const User = model.User

// Reset password controller function
const resetPassword = async (req, res) => {
  const { password, comfirmPassword } = req.body
  if (password !== comfirmPassword) {
    return res.status(401).json({
      message: req.t('WrongPassword')
    })
  } else {
    const { email } = await req.body
    const user = await User.findOne({
      where: {
        email
      }
    })
    if (!user) {
      return res.status(404).json({
        message: req.t('UserNotFound')
      })
    } else if (user) {
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(req.body.password, salt)
      // save user and the password
      user.save()
      res.status(200).json({
        message: req.t('resetComfirmation')
      })
    } else {
      res.status(404).json({
        message: "Oops your password wasn't reset, Try again"
      })
    }
  }
}

export default resetPassword