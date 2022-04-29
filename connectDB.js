const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect('mongodb://mongo:27017/docker-node-mongo', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(res => console.log(`Succesfully Connected To the Database`))
        .catch(err => console.log(`Error Connecting to the Database: ${err}`));
};

module.exports = connectDB;