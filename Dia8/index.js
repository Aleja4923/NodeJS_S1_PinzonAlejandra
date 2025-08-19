const prompt = require('prompt-sync')({ sigint: true });
const { ItemModel } = require('./models/itemModel');
const { ItemView } = require('./views/itemView');
const { ItemController } = require('./controllers/itemController');

const model = new ItemModel();
const controller = new ItemController({ model, view: ItemView, prompt });

controller.iniciar();