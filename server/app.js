const express = require('express');
const mongoose = require('mongoose');
const upload = require('./multer');
const { getItems, addItem, downloadFile } = require('./itemController');
const app = express();
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/updo').then(() => {
    console.log('database connected');
});

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/get', getItems);

app.post('/upload', addItem);

app.get('/download:id', downloadFile);

app.listen(8000, () => {
    console.log('server is running at 8000');
});
