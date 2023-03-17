const express=require('express');
const signup=require('../controllers/signup')
const login=require('../controllers/login')

const mainRoute=express.Router();

mainRoute.route('/signup').post(signup.getSignupData);
mainRoute.route('/login').post(login.getLoginData);

module.exports=mainRoute;