const express = require('express');
// const Signupdata = require('../model/signupData');
// const app = new express();
const loginRouter = express.Router();
// var flag;

function router(nav1)

{

    // loginRouter.get('/',function(req,res){
    // if(flag=="Wrong Details")
    // {
    //     res.render('login',{
    //     nav1,
    //     alarm:flag
    // }); 
    // }
    // else{
    //     res.render('login',{
    //     nav1,
    //     alarm:"Enter Correct Details"
    // });
    // }
    // });
    // loginRouter.post('/value',function(req,res){ 
    // let email = req.body.email;
    // let password = req.body.password;
    // Signupdata.findOne({email:email,password:password})
    // .then(function(user){
    //     if(user===null)
    //     {
    //         flag="Wrong Details";
    //         res.redirect('/login');
    //     }
    //     else
    //     {
    //         flag="Credentials Matched";
    //         res.redirect('/books');
    //     }
    // });
    // });

    loginRouter.get('/',function(req,res){
    res.render("login",{
        nav1,
        title:'LOGIN PAGE',
        action:'/books',
        head:'Login Form',
        button:'LOGIN'
    });
    });

    return loginRouter;
}

module.exports = router; 