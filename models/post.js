const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Posts = new Schema({
    title:String,
    body: String,
    slug:String,
    category: [{type: Schema.Types.ObjectId, ref: 'Cat'}],
    author: [{type: Schema.Types.ObjectId, ref:'User'}]
});
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