//? import mongoose  to create a table 
const mongoose = require("mongoose"); // it allow use to use js code to create ,insert, update , delete a table or something in it 

// database with validation 
// this are instructions
// this is what the table is going to hold

const PetShelter =  new mongoose.Schema({ //?this is how you create a table 
    // key:value pair  == colum on the table 
    pName:{ //the values is a dictionary/object 
        type: String, // this is what data type

        required:  [true,'this pet needs a name'], 

        minLength:[3,"pet name must be at least 3 characters long"],
    },
    // second key:value pair 
    pType:{
        type:String,//this represent any number decimal or whole numbers
        required: [true,"this pet needs a type "],
            // max and  min for number 
        minLength:[3,"pet type must be at least 3 characters long "],
    },
    // third key
    description:{
        type:String, 
        required: [true,"you must add a description"],
        minLength:[3,"must be at lest 5 characters long"]
    },
    skill1:{
        type: String,

    },
    skill2:{
        type: String,

    },
    skill3:{
        type: String,

    }
    } ,

    {timestamps: true} // this is for auto generated time stamps //?look carful where it is 

); 

//? this is how we tell the data base to create the table  and what table to use 
// variable name tha we us //("name of the table same as the variable", what instructions to use ) 
const Pet = mongoose.model("Pet",PetShelter); //*this line register the table under the name "Book" using the instructions from  the BookSchema variable 


//? exporting the table so other files con work with it 
module.exports = Pet;
