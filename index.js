const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
const MessageModel = require('./MessageModel');

const connectDB = require('./connectDB');
connectDB();


app.get('/data', async (req, res) => {
    if(req.query.id !== undefined) {
        const id = req.query.id;
        await MessageModel.findById(mongoose.Types.ObjectId(id))
            .then(item => res.send(item))
            .catch(err => res.send(err));
    }
    else {
        await MessageModel.find()
            .then(item => res.send(item))
            .catch(err => res.send(err));
    }
});

app.post('/data', async (req, res) => {
    const resultant = {message: req.body.message};
    console.log(req.body);
    const db_save = new MessageModel(resultant);
    await db_save.save()
        .then(x => res.send(x))
        .catch(err => res.send(err));
});

app.delete('/data', async (req, res) => {
    if(req.query.id !== undefined) {
        const id = req.query.id;
        await MessageModel.findByIdAndRemove(mongoose.Types.ObjectId(id))
            .then(item => res.send(item))
            .catch(err => res.send(err));
    }
    else {
        await MessageModel.deleteMany({})
            .then(x => res.send(x))
            .catch(err => res.send(err));
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});