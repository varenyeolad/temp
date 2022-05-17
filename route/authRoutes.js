const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/authController');
const passport = require('passport');

const {
    checkAuthenticated,
    checkNotAuthenticated
} = require('../middlewares/auth')




router.post('/Register', checkNotAuthenticated,  AuthController.register)
router.delete('/profile',AuthController.logout);


module.exports = router;

