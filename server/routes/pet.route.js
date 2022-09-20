// importing all the functions on the controller.js
const PetController = require("../controllers/pet.controller");


//* http verbs
//todo|| get = retrieve see all data or one 
//todo|| post = create something new
//todo|| put = update something 
//todo|| delete = delete something 

module.exports = (app)=>{
    // we are exporting all the routes
    //? to test if its working 
    app.get("/api",PetController.helloWorld);
    //? to  show all
    app.get("/api/pet",PetController.showAllPets);
    //? to  create one
    app.post("/api/pet/new",PetController.createPet)
    //? to show one by id
    app.get("/api/pet/:id",PetController.showOnePet)//:id is the route parameter
    //? to update one by id
    app.put("/api/pet/update/:id",PetController.updateOnePet)//:id is the route parameter
    //? to delete one by id
    app.delete("/api/pet/delete/:id", PetController.deletePet)//:id is the route parameter
}