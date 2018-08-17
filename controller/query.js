module.exports = function (req, res) {
	console.log(req.query);
	let name = req.query.name || null;
	if(name){
		res.send({
			code: 0,
			data:{
				name: name,
				number: 20018
			}
		})
	}else{
		res.send({
			code: 401,
			msg: 'params error'
		})
	}
}
