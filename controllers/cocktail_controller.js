var express = require('express');
var router = express.Router();
var Cocktails = require('../models/cocktails.js');
router.get('/', function(req, res){
    res.redirect('/cocktails')
});
router.get('/cocktails', function(req, res){
    Cocktails.selectAll(function(data){
        var hbsObject = { Cocktails: data};
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});
router.post('/cocktails/create', function(req, res){
    Cocktails.insertOne(['cocktail_name'], [req.body.cocktail_name], function(data){
        res.redirect('/cocktails')
    });
});
router.post('/cocktails/update/:id', function(req, res){
    var condition = 'id = ' + req.params.id;
    console.log('condition ', condition);
    Cocktails.updateOne({'enjoyed': req.body.enjoyed}, condition, function(data){
        res.redirect('/cocktails');
    });
});
module.exports = router;