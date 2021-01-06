const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user12:user12@cluster0.ysc9s.mongodb.net/FSD?retryWrites=true&w=majority ');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});

var Bookdata = mongoose.model('bookdata',BookSchema);
module.exports = Bookdata;