// ! this file is used to connect the application to the database
const mongoose = require('mongoose'); // to import mongoose


const db_name = "pets_db";

mongoose.connect(`mongodb+srv://root:root@mern.soompjt.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
