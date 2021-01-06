const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user12:user12@cluster0.ysc9s.mongodb.net/FSD?retryWrites=true&w=majority ');
const Schema = mongoose.Schema;
const signupSchema = new Schema({
    firstname:String,
    middlename:String,
    lastname:String,
    phonenumber:String,
    email:String,
    password:String,
    confirmpassword:String
});

var signupdata = mongoose.model('signupdata',signupSchema);
module.exports = signupdata;