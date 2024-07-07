const item = require('./itemModel');
const path = require('path');

const getItems = async (req, res, next) => {
    const items = await Item.find();
    return res.status(200).json({ success: true, message: 'get items', items });
};

const addItem = async (req, res, next) => {
    console.log(req.body);
    // const { name } = req.body;
    // const file = req.file.path;
    // const item = await Item.create({ name, file });
    return res.status(201).json({ success: true, message: 'add items', item });
};

const downloadFile = async (req, res, next) => {
    const { id } = req.params;
    const item = await Item.findById(id);
    if (!item) {
        return next(new Error('No item found'));
    }
    const file = item.file;
    const filePath = path.join(__dirname, `../${file}`);
    res.download(filePath);
};

module.exports = {
    getItems,
    addItem,
    downloadFile,
};
