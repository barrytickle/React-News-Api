var express = require('express');
var AsyncRouter = require("express-async-router").AsyncRouter;
var router = AsyncRouter();
const Request = require("../bin/fetch");

router.post('/', function(req, res){
    const body = req.body;
    const fetch = new Request();

    const method = body.method;

    const params = body.params;
    const url = method === 'GET' ? body.url + body.params : body.url;
    const bodyContent = method === 'GET' ? '' : body;

    const headers = {'Content-Type': 'application/json'};

    const bodyParams = method === "GET" ? {method:"GET", headers: headers} :  {
        method: "POST",
        headers:headers ,
        body: bodyContent
    };

    return fetch.send(url, '', bodyParams).then((data) => {return data});


});

module.exports = router;
