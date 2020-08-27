const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AI = require('mongoose-auto-increment');
const conn = mongoose.connection;
AI.initialize(conn);


    const Users = new Schema({
        username:String,
        password:String,
        fullname:String,
        image: String,
    });
    let user

    try {
        user = mongoose.model('User')
    }catch{
        user = mongoose.model('User', Users);
    }
Users.plugin(AI.plugin, 'User');

    const  object =  {
        schema: Users,
        model: user
    };




module.exports = object;