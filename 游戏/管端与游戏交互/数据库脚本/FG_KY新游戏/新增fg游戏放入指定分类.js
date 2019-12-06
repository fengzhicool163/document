var _game_id = "301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440"; //需要增加的游戏 
var gameObj = [
	{"_id":NumberInt(195),
	 "name": "电子游艺",
	 "isAdd": false},//是否加入电子游艺 true则加入，false则不加入
	{"_id":NumberInt(197),
	 "name": "热门游戏",
	 "isAdd": false},//是否加入热门游戏 true则加入，false则不加入
	{"_id":NumberInt(200),
	 "name": "捕鱼游戏",
	 "isAdd": false},//是否加入捕鱼游戏 true则加入，false则不加入
	{"_id":NumberInt(198),
	 "name": "FG游戏",
	 "isAdd": true},//是否加入FG游戏 true则加入，false则不加入
	 {"_id":NumberInt(199),
	 "name": "开元棋牌",
	 "isAdd": false}//是否加入开元棋牌 true则加入，false则不加入
];
//获取baseGame的游戏ids
function getBaseGameConfIds(gameId){
	var cursor = db.base_game_config.find({"_id":gameId},{"classifyGameIds":1});
	var result = cursor.map(
		function(conf){
		  return conf.classifyGameIds;
		}
	);
	var ret = result;
	return ret;
}

//获取baseGame的游戏ids
function getBrandIds(brandName,gameId){
	var cursor = db.brand.aggregate([{$match:{"brand":brandName}},{$unwind:"$games"},{$match:{'games.gameId' : gameId}}]);
	//print(cursor);
	var result = cursor.map(
		function(conf){
		  return conf.games.classifyGameIds;
		}
	);
	var ret = result;
	return ret;
}
//对数据去重
function uniqu(arrs){
    var newArr = [];
    arrs.forEach(item => {
    	return newArr.includes(item)?"":newArr.push(item);
    });   
    return newArr;
}
//为base_game_config表增加新游戏
function changeBaseGameConf(){
	gameObj.forEach(gameobj =>{
		if(gameobj.isAdd){
			var gameIdStr =getBaseGameConfIds(gameobj._id);
			print(gameIdStr);
			var gamIdArr = gameIdStr.toString().split(",");
			gamIdArr.push(_game_id);//增加新游戏
			var ret = uniqu(Array.from(gamIdArr));
			var finalStr = ret.join(",");
			db.base_game_config.update({"_id":gameobj._id},{"$set":{"classifyGameIds":finalStr}});
		}
	});		
}


function changeBrandGame(){
	gameObj.forEach(gameobj =>{
		if(gameobj.isAdd){			
			db.brand.find({}).forEach(
				function(brandItem){
					var gameIdStr =getBrandIds(brandItem.brand,gameobj._id);			
					var gamIdArr = gameIdStr.toString().split(",");
					gamIdArr.push(_game_id);//增加新游戏
					var ret = uniqu(Array.from(gamIdArr));
					var finalStr = ret.join(",");
					db.brand.update({"_id":brandItem._id,"games.gameId":gameobj._id},{"$set":{"games.$.classifyGameIds":finalStr}},{muti: true});
				}
			);
			
		}
	});	
}
changeBaseGameConf(); //执行base_game_config的新增游戏
changeBrandGame(); //执行brand的新增游戏