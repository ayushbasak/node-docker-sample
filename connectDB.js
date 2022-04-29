const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(res => console.log(`Succesfully Connected To the Database`))
        .catch(err => console.log(`Error Connecting to the Database: ${err}`));
};

module.exports = connectDB;