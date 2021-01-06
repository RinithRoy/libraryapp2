const express = require('express');

const adminRouter = express.Router();

const Bookdata = require('../model/Bookdata');

function router(nav)

{

    adminRouter.get('/',function(req,res) 

{

    res.render("addbook",{nav,

    title:'ADD BOOK PAGE',

    head:'Add Book',

    button:'ADD BOOK'

}); 

});

adminRouter.post('/add',function(req,res) 

{ 
    var item = 
    
    {
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image
    };
    
    var book = Bookdata(item);
    book.save();
    res.redirect('/books');

});

adminRouter.get('/editbook/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('editBook',{
            nav,
            title:"EDIT BOOK PAGE",
            book
        });
    });
});

adminRouter.post('/update/:id',function(req,res){
    const id = req.params.id;
    if(req.body.image=="") //this condition says that when new image is not loaded,place the old image itself//
    {
        Bookdata.updateOne({_id:id},{$set:{
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre
        }})
    .then(function(books){
        res.redirect('/books');
    });
    
    }
    else //or place the new image//
    {
        Bookdata.updateOne({_id:id},{$set:{
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image
        }})
    .then(function(books){
        res.redirect('/books');
    })
    }
    })

adminRouter.get('/deletebook/:id',function(req,res){
    const id = req.params.id;
    Bookdata.deleteOne({_id:id})
    .then(function(books){
        res.redirect('/books');
        });
    });


    return adminRouter;
}

module.exports = router; 