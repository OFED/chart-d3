var table = require('./mdb')
module.exports = function (req, res) {
	console.log(req.query);
	let name = req.query.name || null;
	if(name){
		table.find({name: name}).exec(function (error,data) {
			res.send({
				code: 0,
				data:data
			})
		})
	}else{
		res.send({
			code: 401,
			msg: 'params error'
		})
	}
}
