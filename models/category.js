const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Roles = new Schema({
    name: String
});

let Role

try {
    Role = mongoose.model('Role');
}catch{
    Role = mongoose.model('Role', Roles);
}

const  object =  {
    schema: Roles,
    model: Role
};

module.exports = object;