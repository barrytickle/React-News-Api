var express = require('express');
var AsyncRouter = require("express-async-router").AsyncRouter;
var router = AsyncRouter();

const Roles = require('../models/roles');
const Users = require('../models/user');
const Posts = require('../models/post');
const Categories = require('../models/category');

const nextCount = require('mongoose-auto-increment');

const db = require ('../bin/db.js');
const database = require('../config/database');


function createPostData(count, body){
    let postData = {_id: count}
    Object.keys(body).map(function(key, index){
        postData[key] = body[key];
    });
    return postData;
}

/* GET home page. */
router.post('/role', function(req, res, next) {
    const body = req.body;
    const RoleModel = Roles.model;

    return RoleModel.nextCount(function(err, count){
        if(err){
            throw err;
        }
        const postData = createPostData(count, body);
        RoleModel.create(postData);
    })
});

/* GET home page. */
router.post('/user', function(req, res, next) {
    const body = req.body;
    const UserModel = Users.model;

    return UserModel.nextCount(function(err, count){
        if(err){
            throw err;
        }
        const postData = createPostData(count, body);
        UserModel.create(postData);
    })


});

/* GET home page. */
router.post('/post', function(req, res, next) {
    const body = req.body;
    const PostModel = Posts.model;

    return PostModel.nextCount(function(err, count){
        if(err){
            throw err;
        }
        const postData = createPostData(count, body);
        PostModel.create(postData);
    })
});

/* GET home page. */
router.post('/category', function(req, res, next) {
    const body = req.body;
    const CatModel = Categories.model;

    return CatModel.nextCount(function(err, count){
        if(err){
            throw err;
        }
        const postData = createPostData(count, body);
        CatModel.create(postData);
    })
});

module.exports = router;
