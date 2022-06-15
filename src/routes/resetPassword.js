import express from 'express'
import resetPassword from '../controllers/resetPassword'
import resetAuth from '../middleware/resetAuth'

const router = express.Router()


router.post('/api/v1/reset/:token', resetAuth, resetPassword)

export default router