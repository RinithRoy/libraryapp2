const express = require('express');

const addauthorRouter = express.Router();

const Authordata = require('../model/Authordata');

function router(nav)

{

    addauthorRouter.get('/',function(req,res) 

{

    res.render("addauthor",{nav,

    title:'ADD AUTHOR PAGE',

    head:'Add Author',

    button:'ADD AUTHOR'

}); 

});

addauthorRouter.post('/add',function(req,res) 

{ 
    var item = 
    
    {
        name:req.body.name,
        book:req.body.book,
        genre:req.body.genre,
        image:req.body.image
    }
    
    var author = Authordata(item);
    author.save();
    res.redirect('/authors');

});

addauthorRouter.get('/editAuthor/:id',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author){
        res.render('editAuthor',{
            nav,
            title:"EDIT AUTHOR PAGE",
            author
        });
    });
});

addauthorRouter.post('/update/:id',function(req,res){
    const id = req.params.id;
    if(req.body.image=="")
    {
        Authordata.updateOne({_id:id},{$set:{
            name:req.body.name,
            book:req.body.book,
            genre:req.body.genre
        }})
    .then(function(authors){
        res.redirect('/authors');
    });
    }
    else
    {
        Authordata.updateOne({_id:id},{$set:{
            name:req.body.name,
            book:req.body.book,
            genre:req.body.genre,
            image:req.body.image
        }})
    .then(function(authors){
        res.redirect('/authors');
    })
    }
    })

addauthorRouter.get('/deleteAuthor/:id',function(req,res){
    const id = req.params.id;
    Authordata.deleteOne({_id:id})
    .then(function(authors){
        res.redirect('/authors');
        });
    });


    return addauthorRouter;
}

module.exports = router; 