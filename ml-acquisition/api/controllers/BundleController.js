/**
 * UserTemplateController
 *
 * @description :: Server-side logic for managing Usertemplates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getBundle : function (req,res) {
		var type = req.query.type
		if (type) {
			var queryData = {"type":type}
			Bundle.findOne(queryData).exec(function(err,data){
		 		if (data) {
					return res.json(200,data);				
		 		}
				return res.json(500,{message:"server issue"});				
		 	});
		}else
			return res.json(500,{message:"undefine type"});				

	}
};

