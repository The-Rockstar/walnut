/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var expressJwt = require('express-jwt');

 var jwt = require('jsonwebtoken');
var secret = sails.config.globals.JwtSecret;


var jwt_secret = sails.config.globals.chatSecret;

module.exports = {
	

	login: function(req,res){

		  sails.log(req.body)

		var data = req.body
					User.findOne(req.body).exec( function (err, data) {
            			sails.log(data + err)

            	if(data){
            		sails.log(data)
	            	var token = jwt.sign(data, secret, {});
					data.token = token	
            		res.json(200,data) 		
            	}else{
            		res.json(401,{message: "Unauthorized"})
            	}
	    	});		
		

	}	


};

