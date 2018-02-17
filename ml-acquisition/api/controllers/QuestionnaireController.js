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
			Questionnaire.getQuestionnaire(data, function(callback){
				if (callback) {
					return res.json(200,callback);				
				}
				return res.json(500,{message:"server issue"});				
			});
		}else
			return res.json(500,{message:"undefine type"});				

	}

};

