/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  },
	

	insertDummy: function (res){
		User.create({user:'Admin@email.com',password:"admin@123",type: "Admin"}).exec(function (err, finn){
		  if (err) {  }
		});

		User.create({user:'candidate@email.com',password:"candidate@123",type: "Candidate"}).exec(function (err, finn){
		  if (err) {  }
		});
	},

	

};

