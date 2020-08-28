// const {Model} from "sequelize";
// const { Sequelize, DataTypes, Model } = require('sequelize');
const userDetails = require('../models/user');
const postDetails = require('../models/post');
const catDetails = require('../models/roles');
const roleDetails = require('../models/category');

class db {
    constructor(){
        const mongoose = require('mongoose');
        const AI = require('mongoose-auto-increment');
        const Schema = mongoose.Schema;

        const uri = "mongodb+srv://barry:passport77key@news.n2yek.mongodb.net/news?retryWrites=true&w=majority";
        mongoose.connect(uri, {useNewUrlParser: true});
        const conn = mongoose.connection;
        AI.initialize(conn);

        conn.on('error', console.error.bind(console, 'Connection error'));

        const user = userDetails.model;
        const Users = userDetails.schema;

        const Posts = postDetails.schema;
        const Post = postDetails.model;

        const Categories = catDetails.schema;
        const Cat = catDetails.model;

        const Roles = roleDetails.schema;
        const Role = roleDetails.model;


        this._user = user;
        this._post = Post;
        this._cat = Cat;
        this.roles = Role;

        // this.createPost = this.createPost.bind(this);
    }



    show(){
        const post = this._post;
        return post.find({}).exec();
    }

    test(){
        return 'This is working';
    }


    async auth(username, password){
        const user = this._user;
        return user.find({username: username, password:password}).exec().then((data) => {return data});
    }

    async authValidate(username, password){
        const auth = await this.auth(username, password);
        // console.log(auth);

        if(auth.length > 0 ){
            return auth;
        }else{
            return 'Error, no fields found';
        }
    }


}

module.exports = db;