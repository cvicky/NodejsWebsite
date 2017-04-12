//require express
var express = require('express');
var path = require('path');


//create our router object
var router = express.Router();

//export our router
module.exports = router;

//route for homepage
 router.get('/', function(req,res){
	res.sendFile(path.join(__dirname,'../index.html'))
})

//route for about page
router.get('/about', function(req,res){
	res.send('about page!');
})

//route for contact
router.get('/contact');
router.post('/contact'); 