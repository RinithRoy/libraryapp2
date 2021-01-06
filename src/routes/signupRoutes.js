const express = require('express');

const signupRouter = express.Router();

const Signupdata = require('../model/signupData');

function router(nav1)

{

    signupRouter.get('/',function(req,res) 

{

    res.render("signup",{nav1,
    
    title:'SIGN UP PAGE',

    // action:'/login',

    head:'Sign Up Form',

    button:'SIGN UP'

}); 

});

signupRouter.post('/valid',function(req,res) 

{ 
    var item = 
    
    {
        firstname:req.body.firstname,
        middlename:req.body.middlename,
        lastname:req.body.lastname,
        phonenumber:req.body.phonenumber,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword
    }
    
    var value = Signupdata(item);
    value.save();
    res.redirect('/login');

});


    return signupRouter;
}

module.exports = router; 