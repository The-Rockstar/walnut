/**
 * UserAnswers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	 userId: {
	    type: 'string',
	   	required: true
	  },
	  bundle:{
	    type: 'string',
	   	required: true 	
	  },
	  answers:{
	  	type:'array',	
	  	required: true 	

	  }
  },

  pushEntry: function (data,callback) {
  	UserAnswers.create(data).exec(function(err,data){
 		if (err) {
 			return callback(err);
 		}
 		return callback(data);
 	});
  }

};

