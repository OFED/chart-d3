// var D3controller = require('../controller/d3.d3.controller.js')
var QueryController = require('../controller/query.js')
var DataController = require('../controller/data.js')

module.exports = function (app) {
	//返回字符串
	app.get('/', function (req, res) {
		res.send('Hello world');
	});
	// 返回页面
	app.get('/customer', function(req, res){
		res.render("index", { "message": "Hello World" });
	});
	// 返回json
	app.post('/user/info', function(req, res){
		console.log(req.body);
		res.send({
			name: 'duan',
			mobile: 18513123810,
			adress: '北京市海淀区中关村'
		});
	});
	// 使用控制逻辑
	app.get('/admin', QueryController);
	app.get('/name', DataController);
};
