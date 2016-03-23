/**
 * Created by xmc1993 on 2016/3/23.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('search', { title: 'Search' });
});

module.exports =  router;