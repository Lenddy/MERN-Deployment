// importing mongoose
// const { model } = require("mongoose") //allows you to use  module.export key word
const Pet = require("../models/pet.model") //importing  Books from the models/book.model folder  
// so we can use it here


// testing to see if the route will work 
module.exports.helloWorld = (req,res)=>{
    res.json({message:"hello"})
}


// getting all items
module.exports.showAllPets = (req,res)=>{
    // Pet.find() to get all items
    Pet.find()
    // all item represents all the data that the db got 
    .then((all_pets)=>{//? this will run if the data base is able to find all of the items 
    res.json({ results: all_pets})
    })
    // err  represents the error message if something went wrong
    .catch((err)=>{ //? this will run if something happens/error trying to find the items
        res.json({message:" something went wrong " ,error: err})
    })
}

// creating a new item
module.exports.createPet = (req,res)=>{
    // Pet.create() to create a new item
    Pet.create(req.body) //getting the info that comes from a form
    // newItem is the new data created 
        .then((newItem)=>{
            res.json({results:newItem})
        })
        .catch((err)=>{ //? this will run if something happens/error trying to create the books
            res.json({message:" something went wrong creating one book" ,error: err})
        })
}

// get one item by id 
module.exports.showOnePet = (req,res)=>{
    // Pet.findById()  only accepts _id
    // Pet.findOne accepts any type of data    to get one book by its id
    //*the key always has to be _id and the value req.params.id
    Pet.findOne({_id:req.params.id}) //getting the book by the id  that is going to mach the _id in the url  using the parameter in the url id 

    //* foundBook is the data tha was found by the id 
    .then((found_pet)=>{
        res.json({results: found_pet})
    })
    .catch((err)=>{ //? this will run if something happen/error trying to find one  the books
    res.json({message:" something went wrong finding one book " ,error: err})
    })
}


//updating one book
module.exports.updateOnePet = (req,res)=>{
    // Pet.findOneAndUpdate() to update one book
    Pet.findOneAndUpdate({
        //*the key always has to be _id and the value req.params.id
        _id:req.params.id}, //which book to update
        req.body,// the info from the form that will replace the current info
        {new:true, //if you want to return the new version of the data  
        runValidators:true //this runs the validations that were created in the model for this table
        })
    // updatedBook is the data that was updated
    .then((updated_pet)=>{
        res.json({results:updated_pet})
    })
    .catch((err)=>{ //? this will run if something happen/error trying to update the books
        res.json({message:" something went wrong on the update " ,error: err})
        })
}


// delete one Book

module.exports.deletePet = (req,res)=>{
    // Pet.deleteOne() to delete one 
    Pet.deleteOne({_id: req.params.id}) //deleting by the id in the route
    // deleteBook is the data the is being deleted
    .then((deleted_pet)=>{
        res.json({results:deleted_pet})
    })
    .catch((err)=>{ //? this will run if something happen/error trying to update the books
        res.json({message:" something went wrong on the update " ,error: err})
        })
}