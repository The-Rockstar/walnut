/**
 * UserAnswersController
 *
 * @description :: Server-side logic for managing Useranswers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	pushEntry: function (req,res) {
		var body = req.body
		if (body.userId&&body.bundle&& body.answers) {
			UserAnswers.create(req.body).exec(function(err,data){
		 		if (err) {
					res.json(500,{message:"server issue"})
	 			}
	     	 		res.json(200,{message:"success"}) 					
		 	});
		}else{
			res.json(500,{message:"invalid data"})
		}
	}
};

