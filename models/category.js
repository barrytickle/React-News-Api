const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AI = require('mongoose-auto-increment');
const conn = mongoose.connection;
AI.initialize(conn);

const Categories = new Schema({
    name:String,
    slug:String,
    icon:String
});

let Cat

try {
    Cat = mongoose.model('Category');
}catch{
    Cat = mongoose.model('Category', Categories);
}
Categories.plugin(AI.plugin, 'Category');


const  object =  {
    schema: Categories,
    model: Cat
};

module.exports = object;

