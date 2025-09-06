import express from "express";
import controller from '../controllers/auth-controllers.js';
import validate from '../middlewares/validate-middleware.js';
import authValidator from '../validators/auth-validator.js';
const { signupSchema, loginSchema } = authValidator;
const router = express.Router();



router.route('/').get(controller.home);

router.route('/register').post(validate(signupSchema),controller.register);
 
router.route('/login').post(validate(loginSchema),controller.login);
  


export default router;