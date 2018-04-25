
// var express = require("express")
// var router = express.Router();

// var Cocktails = require("../models/cocktails.js")
// router.get("/", function(req, res){
//     res.redirect("/cocktails")
// })

// router.get("/cocktails", function (req, res) {
//     Cocktails.selectAll(function (data) {
//         var hbsObject = {
//             Cocktails: data
//         };
//         console.log(hbsObject)

//     res.render("index", hbsObject);
        
//     });
// });

// router.post("/api/cocktails", function (req, res) {
//     Cocktails.insertOne(
//         ["cocktail_name"], [req.body.cocktail_name],
//         [req.body.cocktail_name, req.body.enjoyed],
//         function (result) {
//             res.redirect('/cocktails')
//         })
// })

// router.put("api/cocktails/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     Cocktails.updateOne({
//         enjoyed: req.body.enjoyed
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             return res.status(404).end();
//         }
//         else {
//             res.status(200).end();
//         }
//     })
// })


// module.exports = router;

// var express = require("express");

// var router = express.Router();

// // Import the model (cocktails.js) to use its database functions.
// var Cocktails = require("../models/cocktails.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   Cocktails.selectAll(function(data) {
//     var hbsObject = {
//       Cocktails: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/cocktails", function(req, res) {
//   cat.insertOne([
//     "cocktail_name", "enjoyed"
//   ], [
//     req.body.cocktail_name, req.body.enjoyed
//   ], function(result) {
//     // Send back the ID of the new cocktail
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cocktails/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   Cocktails.updateOne({
//     enjoyed: req.body.enjoyed
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


// // Export routes for server.js to use.
// module.exports = router;

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
router.put('/cocktails/update/:id', function(req, res){
    var condition = 'id = ' + req.params.id;
    console.log('condition ', condition);
    Cocktails.updateOne({'enjoyed': req.body.enjoyed}, condition, function(data){
        res.redirect('/cocktails');
    });
});
module.exports = router;