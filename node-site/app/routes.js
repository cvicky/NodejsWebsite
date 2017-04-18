//require express
var express = require('express');
var path = require('path');


//create our router object
var router = express.Router();

//export our router
module.exports = router;

//route for homepage
 router.get('/', function(req,res){
	res.render('pages/index');
})

//route for about page
router.get('/about', function(req,res){
	var users =[
		{name: "Running Dog", email:'swingdog@dog.com', avatar: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'}
	]
	res.render('pages/about', {users: users});
})

//route for contact
router.get('/contact', function(req,res){
	res.render('pages/contact') 
})

router.post('/contact', function(req,res){
	res.send('Thanks for contacting us, ' + req.body.name + 'We will respond shortly!');
}); 


router.get("/:username", function( req, res) {
	console.log(req.params);
	res.send("You are the best " + req.params.username);
});