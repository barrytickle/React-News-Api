var express = require('express');
var AsyncRouter = require("express-async-router").AsyncRouter;
var router = AsyncRouter();



const db = require ('../bin/db.js');
const database = new db('127.0.0.1', 'barry', 'webdev', 'news');


/* GET home page. */
router.get('/roles', function(req, res, next) {
    const roleDetails = require('../models/role');
    const Roles = roleDetails.schema;
    const Role = roleDetails.model;

    console.log(Role.find());


});

/* GET home page. */
router.get('/user', function(req, res, next) {

});

/* GET home page. */
router.get('/post', function(req, res, next) {

});


/* GET home page. */
router.get('/category', function(req, res, next) {

});




module.exports = router;
