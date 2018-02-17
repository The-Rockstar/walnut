/**
 * QuestionnaireController
 *
 * @description :: Server-side logic for managing Questionnaires
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	bundle: function getQuestionnaires(req,res) {
		var type = req.query.type
		if (type) {
			var data = {bundle_id:type}
		 	Questionnaire.findOne(data).exec(function(err,data){
		 		if (err) {
		 			return callback(err);
		 		}
		 		return callback(data);
		 	});
		}else
			return res.json(500,{message:"undefine type"});				

	}

};

