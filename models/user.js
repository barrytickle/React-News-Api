const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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

    const  object =  {
        schema: Users,
        model: user
    };


module.exports = object;