const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AI = require('mongoose-auto-increment');
const conn = mongoose.connection;
AI.initialize(conn);


const Roles = new Schema({
    name: String
});
Roles.plugin(AI.plugin, 'Roles')

let Role

try {
    Role = mongoose.model('Role', Roles);
}catch{
    Role = mongoose.model('Role');

}

const  object =  {
    schema: Roles,
    model: Role
};

module.exports = object;

