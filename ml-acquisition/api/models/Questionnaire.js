/**
 * Questionnaire.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      
  },
  
  getQuestionnaire: function(data,callback) {
 	Questionnaire.findOne(data).exec(function(err,data){
 		if (err) {
 			return callback(err);
 		}
 		return callback(data);
 	});
  }
  

};

