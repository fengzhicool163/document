var game = { 
        "_id" : 31, 
    "name" : "龙虎斗", 
    "alias" : "lhd", 
    "icon" : "/assets/ui/game/icon_game_dt_00.png", 
    "url" : "../lhd/", 
    "jumpUrl" : true, 
    "gameStyle" : "CARD_GAME", 
    "gameType" : "STAKE", 
    "state" : "EXPECTATION", 
    "sort" : NumberInt(849), 
    "retryConnection" : false, 
     "robotService":false,
    "betAnalysis":true,
    "createTime" : new Date(), 
    "updateTime" : new Date(), 
    "rooms" : [
    	 {
            "roomId" : 1.0, 
            "name" : "新手房", 
            "state" : "NORMAL", 
            "sort" : NumberInt(1), 
            "roomType" : "NOVICE", 
            "icon" : "/assets/ui/game/icon_game_dt_00.png", 
            "createTime" : new Date(), 
            "updateTime" : new Date(), 
            "config" : { 
                "minEntry" : NumberInt(20),        
                "maxMembers":NumberInt(200),
                "minBet" : NumberInt(2),
                "new_minBet":NumberInt(2),
                "maxBet" : NumberInt(500), 
                "chip01":NumberInt(2),
                "chip02":NumberInt(10),
                "chip03":NumberInt(30),
                "chip04":NumberInt(50),
                "minJackpot":NumberInt(0),
                "maxJackpot":NumberInt(0),
               "commissionRate" : NumberInt(0),
               "cardMembers":"300-350",
               "colorLimit":NumberInt(30),
               "callsGames": NumberInt(7),
               "outsGames":NumberInt(10),
               "readyTime":NumberInt(3),
               "dealTime":NumberInt(3),
               "betsTime":NumberInt(15),
               "compareTime":NumberInt(4),
               "prizeTime":NumberInt(4),
                    "checkPeriod":NumberInt(1),
               "rtpRate":"0.95"
            },
              "tables" : [
                {
                    
                    "tableName" : "新手房A桌", 
                    "state" : "NORMAL"
                }, 
                {
                    
                    "tableName" : "新手房B桌", 
                    "state" : "NORMAL"
                }, 
                {
                
                    "tableName" : "新手房C桌", 
                    "state" : "NORMAL"
                }
            ]
        },
        {
            "roomId" : 1.0, 
            "name" : "进阶房", 
            "state" : "NORMAL", 
            "sort" : NumberInt(2), 
            "roomType" : "ADVANCED", 
              "icon" : "/assets/ui/game/icon_game_dt_00.png", 
            "createTime" : new Date(), 
            "updateTime" :new Date(), 
             "tables" : [
                {
                   
                    "tableName" : "进阶房A桌", 
                    "state" : "NORMAL"
                }, 
                {
                   
                    "tableName" : "进阶房B桌", 
                    "state" : "NORMAL"
                }, 
                {
                    
                    "tableName" : "进阶房C桌", 
                    "state" : "NORMAL"
                }
            ], 
            "config" : {
                 "minEntry" : NumberInt(100),        
                "maxMembers":NumberInt(200),
                "minBet" : NumberInt(10),
                "new_minBet":NumberInt(10),
                "maxBet" : NumberInt(2500), 
                "chip01":NumberInt(10),
                "chip02":NumberInt(30),
                "chip03":NumberInt(50),
                "chip04":NumberInt(100),
                "minJackpot":NumberInt(0),
                "maxJackpot":NumberInt(0),
               "commissionRate" : NumberInt(0),
               "cardMembers":"300-350",
               "colorLimit":NumberInt(30),
               "callsGames": NumberInt(7),
               "outsGames":NumberInt(10),
               "readyTime":NumberInt(3),
               "dealTime":NumberInt(3),
               "betsTime":NumberInt(15),
               "compareTime":NumberInt(4),
               "prizeTime":NumberInt(4),
              "checkPeriod":NumberInt(1),
               "rtpRate":"0.95"
            }
        },
         {
            "roomId" : 1.0, 
            "name" : "高手房", 
            "state" : "PAUSE", 
            "sort" : NumberInt(3), 
            "roomType" : "SUPERIOR", 
              "icon" : "/assets/ui/game/icon_game_dt_00.png", 
            "createTime" : new Date(), 
            "updateTime" :new Date(), 
             "tables" : [
                {
                    
                    "tableName" : "高手房A桌", 
                    "state" : "NORMAL"
                }, 
                {
                   
                    "tableName" : "高手房B桌", 
                    "state" : "NORMAL"
                }, 
                {
                   
                    "tableName" : "高手房C桌", 
                    "state" : "NORMAL"
                }
            ], 
            "config" : {
                "minEntry" : NumberInt(400),        
                "maxMembers":NumberInt(200),
                "minBet" : NumberInt(50),
                "new_minBet":NumberInt(50),
                "maxBet" : NumberInt(5000), 
                "chip01":NumberInt(30),
                "chip02":NumberInt(50),
                "chip03":NumberInt(100),
                "chip04":NumberInt(200),
                "minJackpot":NumberInt(0),
                "maxJackpot":NumberInt(0),
               "commissionRate" : NumberInt(0),
               "cardMembers":"300-350",
               "colorLimit":NumberInt(30),
               "callsGames": NumberInt(7),
               "outsGames":NumberInt(10),
               "readyTime":NumberInt(3),
               "dealTime":NumberInt(3),
               "betsTime":NumberInt(15),
               "compareTime":NumberInt(4),
               "prizeTime":NumberInt(4),
                    "checkPeriod":NumberInt(1),
               "rtpRate":"0.95"
            }
        },
         {
            "roomId" : 1.0, 
            "name" : "土豪房", 
            "state" : "PAUSE", 
            "sort" : NumberInt(4), 
            "roomType" : "TUHAO", 
              "icon" : "/assets/ui/game/icon_game_dt_00.png", 
            "createTime" : new Date(), 
            "updateTime" :new Date(), 
             "tables" : [
                {
                    
                    "tableName" : "土豪房A桌", 
                    "state" : "NORMAL"
                }, 
                {
                  
                    "tableName" : "土豪房B桌", 
                    "state" : "NORMAL"
                }, 
                {
                    
                    "tableName" : "土豪房C桌", 
                    "state" : "NORMAL"
                }
            ], 
            "config" : {
                "minEntry" : NumberInt(1000),        
                "maxMembers":NumberInt(200),
                "minBet" : NumberInt(100),
                "new_minBet":NumberInt(100),
                "maxBet" : NumberInt(12000), 
                "chip01":NumberInt(50),
                "chip02":NumberInt(100),
                "chip03":NumberInt(200),
                "chip04":NumberInt(400),
                "minJackpot":NumberInt(0),
                "maxJackpot":NumberInt(0),
               "commissionRate" : NumberInt(0),
               "cardMembers":"300-350",
               "colorLimit":NumberInt(30),
               "callsGames": NumberInt(7),
               "outsGames":NumberInt(10),
               "readyTime":NumberInt(3),
               "dealTime":NumberInt(3),
               "betsTime":NumberInt(15),
               "compareTime":NumberInt(4),
               "prizeTime":NumberInt(4),
                    "checkPeriod":NumberInt(1),
               "rtpRate":"0.95"
            }
        }
    ]
}


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
	var brandList = db.brand.distinct("brand");
	print("现有游戏业主: "+brandList);
	print("开始初始化业主游戏信息");

	for (var i = 0; i < brandList.length; i++) {
		var brand = brandList[i];

		var gameInfo = db.base_game_config.findOne({_id:gameId});
		var brandGameInfo = {};
	    brandGameInfo.gameId=NumberInt(gameInfo._id); 
	    brandGameInfo.gameName=gameInfo.name;
        brandGameInfo.state=gameInfo.state;
        brandGameInfo.sort=NumberInt(gameInfo.sort); 
		brandGameInfo.createTime=new Date();
		brandGameInfo.updateTime=new Date();
        var brandRoomList = [];
         //  插入对应的房间数据
        for (var j = 0; j <  gameInfo.rooms.length; j++) {
        	printjson(gameInfo.rooms[j]);
           	var roomInfo = gameInfo.rooms[j];
           	var brandRoomInfo={};
          
           	brandRoomInfo.parentId=NumberInt(roomInfo.roomId);
           	brandRoomInfo.state=roomInfo.state;
           	brandRoomInfo.sort=NumberInt(roomInfo.sort);
            brandRoomInfo.createTime=new Date();
		    brandRoomInfo.updateTime=new Date();
            brandRoomInfo.tables=roomInfo.tables;
           var maxValue =getBaseRoomId("roomId");
		   printjson("新增房间id== "+maxValue);
		   brandRoomInfo.roomId=NumberInt(maxValue);       
           brandRoomList.push(brandRoomInfo);
        } 
        brandGameInfo.rooms=brandRoomList;
        print("插入对应的游戏数据");
        printjson(brandGameInfo);
      	db.brand.update({"brand":brand},{$addToSet:{"games":brandGameInfo}});
	}
}



//如果游戏中存在此游戏,则删除此游戏数据
db.brand.update({},{$pull: {games: {gameName:"龙虎斗"} }},{multi:true});
db.base_game_config.remove({"name":"龙虎斗"},false);

for (var i = 0; i < game.rooms.length; i++) {
	//获取房间自增id
	game.rooms[i].roomId=NumberInt(getBaseRoomId("baseRoomId"));
}

try{
	printjson(game);
  for (var i = 0; i < game.rooms.length; i++) {
   var roomInfo =  game.rooms[i];
   for (var j = 0; j < roomInfo.tables.length; j++) {
        var tableId = getBaseRoomId("tableId");
        roomInfo.tables[j].tableId = NumberInt(tableId);
   }
  }
	db.base_game_config.insert(game);
}catch(err){
	print("初始化游戏错误");
}

initBrandGameInfo(game._id);




// 新增游戏参数

var gameParams =  { 
    "_id" : NumberInt(31), 
    "gameName" : "龙虎斗", 
    "gameAlias" : "lhd", 
    "adapt" : "defaultAdapt", 
    "handler" : "stakeHandler", 
    "listener" : "defaultListener", 
    "params" : [
        {
            "key" : "minEntry", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxMembers", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "new_minBet", 
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
        }, 
        {
            "key" : "maxBet", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minJackpot", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxJackpot", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip01", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "cardMembers", 
            "required" : false, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "colorLimit", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "callsGames", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "outsGames", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "readyTime", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "dealTime", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "betsTime", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "compareTime", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "prizeTime", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "checkPeriod", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "rtpRate", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }
    ]
}

// 插入配置参数
db.base_game_setting.insert(gameParams);


var gameSettingInfo = {
    gameId:31,
    success:false,
    type:"ADD",
    createTime:new Date(),
    updateTime:new Date(),
    robotService:false
}

db.game_setting_info.insert(gameSettingInfo);
