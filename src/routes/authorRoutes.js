const express = require('express');

const authorRouter = express.Router();

const Authordata = require('../model/Authordata');

function router(nav)

{

// var authors = [
//     {
//         name: 'William Shakespeare',
//         book: 'Romeo and Juliet, Julius Cesear',
//         genre: 'Tragedy, History',
//         img: "william.jpg"
//     },
//     {
//         name: 'Chetan Bhagat',
//         book: '2 states, 5 point someone',
//         genre: 'romance',
//         img: "charles.jpg"
//     },
//     {
//         name: 'Dan Brown',
//         book: 'The deception point, The Da vinci code',
//         genre: 'Thriller, History',
//         img: "henry.jpg"
//     }
// ]

authorRouter.get('/',function(req,res) 

{
    Authordata.find()

    .then(function(authors){
        
        res.render("authors",{nav,
        
        title:'AUTHORS LIST',
        
        authors
    
    });


}); 

});

authorRouter.get('/:id',function(req,res)   

	{

        const id = req.params.id
        
        Authordata.findOne({_id:id})

        .then(function(author){

            res.render("author",{nav,
            
            title:'AUTHOR PAGE',
        
            author
        
            }); 
        

        })

        
    }); 


    return authorRouter;
}

module.exports = router; 