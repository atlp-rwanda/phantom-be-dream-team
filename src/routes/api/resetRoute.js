import express from 'express';
import forgotPassword from '../../controllers/resetController/forgotPassword';
import resetPassword from '../../controllers/resetController/resetPassword';
// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/forgotpassword', forgotPassword);
router.post('/reset/:token', resetPassword);

export default router;
