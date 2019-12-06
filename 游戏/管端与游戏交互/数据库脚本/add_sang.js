var game = { 
     "_id" : NumberInt(11), 
    "name" : "三公", 
    "alias" : "sang", 
    "icon" : "/assets/ui/game/icon_game_bj_00.png", 
    "url" : "../threemale/", 
    "jumpUrl" : true, 
    "gameStyle" : "CARD_GAME", 
    "gameType" : "ROUND", 
    "state" : "EXPECTATION", 
    "sort" : NumberInt(1), 
    "retryConnection" : false, 
    "createTime" : new Date(), 
    "updateTime" : new Date(), 
    "rooms" : [
    	 {
            "roomId" : 1.0, 
            "name" : "新手房", 
            "state" : "NORMAL", 
            "sort" : 0, 
            "roomType" : "NOVICE", 
            "icon" : "/assets/ui/room/img_fangjian_fang_01.png", 
            "createTime" : new Date(), 
            "updateTime" : new Date(), 
            "config" : {
                "commissionRate" : "0.05", 
                "minEntry" : NumberInt(20), 
                "maxBet" : NumberInt(300), 
                   "minBet" : NumberInt(2)
            }
        },
        {
            "roomId" : 1.0, 
            "name" : "进阶房", 
            "state" : "NORMAL", 
            "sort" : 0, 
            "roomType" : "ADVANCED", 
            "icon" : "/assets/ui/room/img_fangjian_fang_02.png", 
            "createTime" : new Date(), 
            "updateTime" :new Date(), 
            "config" : {
                "commissionRate" : "0.05", 
                "minEntry" : NumberInt(100), 
                "maxBet" : NumberInt(1500), 
                "minBet" : NumberInt(5)
            }
        },
         {
            "roomId" : 1.0, 
            "name" : "高手房", 
            "state" : "PAUSE", 
            "sort" : 0, 
            "roomType" : "SUPERIOR",
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png",  
            "createTime" : new Date(), 
            "updateTime" :new Date(), 
            "config" : {
                "commissionRate" : "0.05", 
                "minEntry" : NumberInt(400), 
                "maxBet" : NumberInt(3500), 
                "minBet" : NumberInt(20)
            }
        },
         {
            "roomId" : 1.0, 
            "name" : "土豪房", 
            "state" : "PAUSE", 
            "sort" : 0, 
            "roomType" : "TUHAO", 
            "icon" : "/assets/ui/room/img_fangjian_fang_04.png", 
            "createTime" : new Date(), 
            "updateTime" :new Date(), 
            "config" : {
                "commissionRate" : "0.05", 
                "minEntry" : NumberInt(1000), 
                "maxBet" : NumberInt(10000), 
                "minBet" : NumberInt(50),
            }
        }
    ]
}


// 删除基本表中的游戏数据
db.brand.update({},{$pull: {games: {gameName:"三公"} }},{multi:true});
db.base_game_config.remove({"name":"三公"},false);

// 删除基本表中的游戏数据
db.brand.update({},{$pull: {games: {gameId:11} }},{multi:true});
db.base_game_config.remove({_id:11},false);


/*获取房间自增id*/
function getBaseRoomId(roomIdType){
		var maxValue = db.global_auto_id.findAndModify({
								 query: { "colName": roomIdType},
						   		 update: { $inc: { seq: 1 } },
						   		 upsert: true,
						   		 new: true
						});
		return maxValue.seq;
}

/*初始化业主游戏信息*/
function initBrandGameInfo(gameId){
	var brandList = db.game_config.distinct("brand");
	print("现有游戏业主: "+brandList);
    print("开始初始化业主游戏信息");
    
	for (var i = 0; i < brandList.length; i++) {
		var brand = brandList[i];

		var gameInfo = db.base_game_config.findOne({_id:gameId});
		var brandGameInfo = {};
	    brandGameInfo.gameId=gameInfo._id; 
	    brandGameInfo.gameName=gameInfo.name;
        brandGameInfo.state="NORMAL" ;
        brandGameInfo.sort=gameInfo.sort; 
		brandGameInfo.createTime=new Date();
		brandGameInfo.updateTime=new Date();
        var brandRoomList = [];
         //  插入对应的房间数据
        for (var j = 0; j <  gameInfo.rooms.length; j++) {
        	printjson(gameInfo.rooms[j]);
           	var roomInfo = gameInfo.rooms[j];
           	var brandRoomInfo={};
          
           	brandRoomInfo.parentId=roomInfo.roomId;
           	brandRoomInfo.state=roomInfo.state;
           	brandRoomInfo.sort=roomInfo.sort;
            brandRoomInfo.createTime=new Date();
			brandRoomInfo.updateTime=new Date();
          
           var maxValue = db.global_auto_id.findAndModify({
   									 query: { "colName": "roomId"},
								    update: { $inc: { seq: 1 } },
								    upsert: true,
								    new: true
								});
				printjson("新增房间id== "+maxValue.seq);
			 brandRoomInfo.roomId=NumberInt(maxValue.seq);
           
           	brandRoomList.push(brandRoomInfo);
        } 
        brandGameInfo.rooms=brandRoomList;
        print("插入对应的游戏数据");
        printjson(brandGameInfo);
      	db.brand.update({"brand":brand},{$addToSet:{"games":brandGameInfo}});
	}
}



for (var i = 0; i < game.rooms.length; i++) {
	//获取房间自增id
	game.rooms[i].roomId=NumberInt(getBaseRoomId("baseRoomId"));
}

try{
	printjson(game);
	db.base_game_config.insert(game);
}catch(err){
	print("初始化游戏错误");
}

initBrandGameInfo(game._id);



// 新增游戏参数

var gameParams =  { 
    "_id" : NumberInt(11), 
    "gameName" : "三公", 
    "gameAlias" : "sang", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "params" : [
        {
            "key" : "commissionRate", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minEntry", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }
    ]
}

// 插入配置参数
db.base_game_setting.insert(gameParams);


var gameSettingInfo = {
    gameId:11,
    success:false,
    type:"ADD",
    createTime:new Date(),
    updateTime:new Date(),
    robotService:true
}

db.game_setting_info.insert(gameSettingInfo);

