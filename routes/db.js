var express = require('express');
var AsyncRouter = require("express-async-router").AsyncRouter;
var router = AsyncRouter();

const db = require ('../bin/db.js');
const database = new db('127.0.0.1', 'barry', 'webdev', 'news');

    /* GET home page. */
router.get('/', function(req, res, next) {
    const show = database.show();
    res.json(show);
});

router.get('/create', function(req, res, next){
    const create = database.createPost();
    console.log(create);
});

router.post('/auth', function(req, res){
    const query = req.query;
    return database.authValidate(query.username, query.password)
        .then(function(response){
           res.json(response);
        });
});


module.exports = router;
