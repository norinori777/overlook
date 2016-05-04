'use strict';

var configRoutes, 
auth		= require('basic-auth'),
crud		= require('./crud'),
fs 			= require('fs'),
multer		= require('multer'),
makeMongoId	= crud.makeMongoId;

configRoutes = function(app, server){
	/*
	app.all('/:obj_type/*?', function(req,res,next){
		res.contentType('json');
		next();
	});
	*/

/*	app.get('/:obj_type',function(req,res){
		crud.read(
			req.params.obj_type,
			{},{},
			function(map_list){res.json(map_list);}
		);
	});*/

	app.get('/:obj_type/candidate/:keyword',function(req,res){
		var
		filter = {table: req.params.obj_type},
		choice = {'_id': 0, 'candidate': 1};
		crud.read(
			'tableConfig' ,filter, choice,
			function(map_list){
				var
				filter = {"$or":[]}, obj, param,
				i, filter, regexp = new RegExp("^" + req.params.keyword);
				for(i = 0; i < map_list[0].candidate.length; i++){
					param = map_list[0].candidate[i];
					obj = new Object();
					obj[param]  = {$regex: regexp};
					filter["$or"].push(obj);
					choice[map_list[0].candidate[i]] = 1;
				}
				choice['_id'] = 0;
				crud.read(
					req.params.obj_type,
					filter, choice,
					function(map_list, regexp){
						var items = [], i, regexp = new RegExp("^" + req.params.keyword);
						for(i=0; i < map_list.length; i++){
							for(var param in map_list[i]){
								if(regexp.test(map_list[i][param])){
									items.push(map_list[i][param]);
								}
							}
						}
						res.json({candidate:items});
					}
				);
			}
		);
	});

	app.get('/:obj_type/config/:table',function(req,res){
		var filter = {'table': req.params.table},
		choice = {_id: 0, table: 1, constructure: 1, candidate: 1, title: 1, placeholder: 1};
		crud.read(
			'tableConfig',
			filter, choice,
			function(map_list){
				res.json(map_list);
			}
		);		
	});

	app.get('/:obj_type/search/:keyword', function(req,res){
		var
		filter = {table: req.params.obj_type},
		choice = {'_id': 0, 'candidate': 1};
		crud.read(
			'tableConfig', filter, choice,
			function(map_list){
				var filter = {"$or":[]}, obj, param,
				i, filter, choice = {}, regexp = new RegExp("^" + req.params.keyword);
				for(i = 0; i < map_list[0].candidate.length; i++){
					param = map_list[0].candidate[i];
					obj = new Object()
					obj[param]  = {$regex: regexp};
					filter["$or"].push(obj);
				}
				crud.read(
					req.params.obj_type,
					filter, choice,
					function(map_list){
						res.json({data:map_list});
					}
				);
			}
		);
	});

	app.post('/:obj_type',function(req,res){
		var
		user = auth(req),
		data = {insertdt: new Date(),name:user.name};
		data.memo = req.body;
		crud.construct(
			req.params.obj_type,
			data,
			function(result_map){res.json(result_map);}
		);
	});

	app.put('/:obj_type/:id',function(req,res){
		var
		user = auth(req),
		data = {updatedt: new Date(), updator:user.name};
		data.article = req.body.article;

		crud.update(
			req.params.obj_type,
			{ _id: makeMongoId( req.params.id ) },
			{$set:data},
			function(result_map){res.send(result_map);}
		);
	});

	app.delete('/:obj_type/:id',function(req,res){
		crud.destroy(
			req.params.obj_type,
			{ _id: makeMongoId( req.params.id ) },
			function(result_map){res.send(result_map);}
		);		
	})

	/*
	app.post('/:obj_type/list',function(req,res){
		crud.read(
			req.params.obj_type,
			{},{},
			function(map_list){res.json(map_list);}
		);
	});

	app.get('/:obj_type/list',function(req,res){
		crud.read(
			req.params.obj_type,
			{},{},
			function(map_list){res.json(map_list);}
		);
	});

	app.post('/:obj_type/add', function(req,res){
		var
		user = auth(req),
		send_data = req.body,
		data = {$push:{sub:{name:user.name,article:send_data.data,insertdt: new Date()}}};

		crud.update(
			req.params.obj_type,
			{_id: makeMongoId(send_data.filter._id)},
			data,
			function(result_map){res.json(result_map);}
		);
	});
	
	app.post('/:obj_type/create',function(req,res){
		var
		user = auth(req),
		send_data = req.body,
		data = {name:user.name,article:send_data.data,insertdt: new Date()};

		crud.construct(
			req.params.obj_type,
			data,
			function(result_map){res.json(result_map);}
		);
	});

	app.get('/:obj_type/read/:id',function(req,res){
		crud.read(
			req.params.obj_type,
			{ _id: makeMongoId( req.params.id ) },
			request.body,
			function(result_map){res.send(result_map);}
		);
	});
		
	app.get('/:obj_type/update/:id',function(req,res){
		crud.update(
			req.params.obj_type,
			{ _id: makeMongoId( req.params.id ) },
			req.body,
			function(result_map){res.send(result_map);}
		);
	});

	app.get('/:obj_type/delete/:id([0-9]+)',function(req,res){
		crud.destroy(
			req.params.obj_type,
			{ _id: makeMongoId( req.params.id ) },
			function(result_map){res.send(result_map);}
		);
	});
		
	app.get('/', function (req, res) {
		res.send('Hello, World!');
	});
	app.get( '/test', function(req,res){
		res.send( {title: 'I want to sleep now' });
	});
	*/
};

module.exports = {configRoutes: configRoutes};
