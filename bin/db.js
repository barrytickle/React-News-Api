// const {Model} from "sequelize";
// const { Sequelize, DataTypes, Model } = require('sequelize');


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
        const Users = new Schema({
            username:String,
            password:String,
            fullname:String,
            image: String,
        });

        const Posts = new Schema({
            title:String,
            body: String,
            slug:String,
            category: [{type: Schema.Types.ObjectId, ref: 'Cat'}],
            author: [{type: Schema.Types.ObjectId, ref:'User'}]
        });

        const Categories = new Schema({
            name:String,
            slug:String
        });


        Users.plugin(AI.plugin, 'User');
        Posts.plugin(AI.plugin, 'Post');
        Categories.plugin(AI.plugin, 'Cat');

        const User = mongoose.model('User', Users);
        const Post = mongoose.model('Post', Posts);
        const Cat = mongoose.model('Cat', Categories);

        // User.find({}).exec().then((data) => console.log(data));


        this._user = User;
        this._post = Post;
        this._cat = Cat;

        this.createPost = this.createPost.bind(this);
    }

    show(){
        const post = this._post;
        return post.find({}).exec();
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

    async createPost(){
        const user = this._user;
        const post = this._post;


    }



}

module.exports = db;