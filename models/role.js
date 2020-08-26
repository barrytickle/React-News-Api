const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const  object =  {
    schema: Categories,
    model: Cat
};

module.exports = object;