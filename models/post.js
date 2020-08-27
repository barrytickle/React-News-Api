const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AI = require('mongoose-auto-increment');
const conn = mongoose.connection;
AI.initialize(conn);

const Posts = new Schema({
    title:String,
    body: String,
    slug:String,
    category: [{type: Schema.Types.ObjectId, ref: 'Cat'}],
    author: [{type: Schema.Types.ObjectId, ref:'User'}]
});
Posts.plugin(AI.plugin, 'Post');

let Post

try {
    Post = mongoose.model('Post');
}catch{
    Post = mongoose.model('Post', Posts);
}




const  object =  {
    schema: Posts,
    model: Post
};

module.exports = object;