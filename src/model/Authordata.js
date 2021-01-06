const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user12:user12@cluster0.ysc9s.mongodb.net/FSD?retryWrites=true&w=majority ');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    name:String,
    book:String,
    genre:String,
    image:String
});

var Authordata = mongoose.model('authordata',AuthorSchema);
module.exports = Authordata;