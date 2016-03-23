/**
 * Created by xmc1993 on 2016/3/23.
 */
var express = require('express');
var router = express.Router();

var doSearch = require('./doSearch');

module.exports = router.get('/', function(req, res, next){
    doSearch(req.query.q, function(err, infos){
        if(err) return next(err);
        res.render('index', {results : infos, search: req.query.q});
    });
});