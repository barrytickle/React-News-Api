var express = require('express');
var AsyncRouter = require("express-async-router").AsyncRouter;
var router = AsyncRouter();

const roles = require('../models/role');
const categories = require('../models/category');
const users = require('../models/user');
const posts = require('../models/post');


const category = categories.model;
const user = users.model;
const post = posts.model;
const role = roles.model;

const db = require ('../bin/db.js');
const database = require('../config/database');

/* GET model data with query. */
router.get('/:model', function(req, res, next) {
    // res.send(req.params);
    const params = req.params;

    const model = params.model;
    let body;
    if(req.body.length > 0){
        body = req.body.query;
    }else{
        body = {};
    }
    switch(model){
        case 'roles':
            return role.find(body).then(result => {
                return result;
            });
        case 'user':
            return user.find(body).then(result => {
                return result;
            })
        case 'category':
            return category.find(body).then(result => {return result})
        case 'post':
            return post.find(body).then(result => {return result});
    }

});

module.exports = router;
