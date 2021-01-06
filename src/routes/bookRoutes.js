const express = require('express');

const booksRouter = express.Router();

const Bookdata = require('../model/Bookdata');

function router(nav)

{

// var books = [
//     {
//         title: 'The Call of the Wild',
//         author: 'Jack London',
//         genre: 'Adventure',
//         img: "adventure.jpg"
//     },
//     {
//         title: 'The Game of thrones',
//         author: 'George R R Martin',
//         genre: 'Fiction',
//         img: "classics.png"
//     },
//     {
//         title: 'The Adventures of Sherlock Holmes',
//         author: 'Sir Arthur Conan Doyle',
//         genre: 'Detective',
//         img: "detective.jpg"
//     }
// ]

booksRouter.get('/',function(req,res) 

{
    Bookdata.find()

    .then(function(books){
        
        res.render("books",{nav,
        
        title:'BOOKS LIST',
        
        books
    
    });


}); 

});

booksRouter.get('/:id',function(req,res)   

	{

        const id = req.params.id
        
        Bookdata.findOne({_id:id})

        .then(function(book){

            res.render("book",{nav,
            
            title:'BOOK PAGE',
        
            book
        
            }); 
        

        })

        
    }); 

    return booksRouter;
}

module.exports = router; 