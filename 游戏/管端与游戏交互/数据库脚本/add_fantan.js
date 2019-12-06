var game = { 
    "_id" : NumberInt(41), 
   "name" : "番摊", 
   "alias" : "fantan", 
   "icon" : "/assets/ui/game/icon_dt_brnn.png", 
   "url" : "../g_fantan/", 
   "jumpUrl" : true, 
   "state" : "NORMAL", 
   "sort" : NumberInt(719), 
   "gameStyle" : "SH", 
   "gameType" : "STAKE", 
   "robotService":false,
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
               "commissionRate" : "0", 
               "serviceCharge":NumberInt(0),
               "minEntry" : NumberInt(1), 
               "maxBet" : NumberInt(500), 
               "minBet" : NumberInt(1),
               "chip01":NumberInt(1),
               "chip02":NumberInt(5),
               "chip03":NumberInt(10),
               "chip04":NumberInt(50),
               "robotMinAmount":NumberInt(20),
               "checkPeriod":NumberInt(1),
               "rtpRate":"0.95"
           }
       },
       {
           "roomId" : 1.0, 
           "name" : "进阶房", 
           "state" : "NORMAL", 
           "sort" : 0, 
            "icon" : "/assets/ui/room/img_fangjian_fang_02.png",
           "roomType" : "ADVANCED", 
           "createTime" : new Date(), 
           "updateTime" :new Date(), 
           "config" : {
               "commissionRate" : "0", 
               "serviceCharge":NumberInt(0),
               "minEntry" : NumberInt(100), 
               "maxBet" : NumberInt(2500), 
               "minBet" : NumberInt(5),
               "chip01":NumberInt(5),
               "chip02":NumberInt(25),
               "chip03":NumberInt(50),
               "chip04":NumberInt(250),
               "robotMinAmount":NumberInt(100),
               "checkPeriod":NumberInt(1),
               "rtpRate":"0.95"
           }
       },
        {
           "roomId" : 1.0, 
           "name" : "高手房", 
           "state" : "NORMAL", 
           "sort" : 0, 
           "roomType" : "SUPERIOR", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png",
           "createTime" : new Date(), 
           "updateTime" :new Date(), 
           "config" : {
               "commissionRate" : "0", 
               "serviceCharge":NumberInt(0),
               "minEntry" : NumberInt(400), 
               "maxBet" : NumberInt(10000), 
               "minBet" : NumberInt(20),
               "chip01":NumberInt(20),
               "chip02":NumberInt(100),
               "chip03":NumberInt(200),
               "chip04":NumberInt(1000),
               "robotMinAmount" : NumberInt(400),
               "checkPeriod":NumberInt(1),
               "rtpRate":"0.95"
           }
       },
        {
           "roomId" : 1.0, 
           "name" : "土豪房", 
           "state" : "NORMAL", 
           "sort" : 0, 
           "roomType" : "TUHAO", 
            "icon" : "/assets/ui/room/img_fangjian_fang_04.png",
           "createTime" : new Date(), 
           "updateTime" :new Date(), 
           "config" : {
                "commissionRate" : "0.05", 
               "serviceCharge":NumberInt(0),
               "minEntry" : NumberInt(2000), 
               "maxBet" : NumberInt(50000), 
               "minBet" : NumberInt(100),
               "chip01":NumberInt(100),
               "chip02":NumberInt(500),
               "chip03":NumberInt(1000),
               "chip04":NumberInt(5000),
               "robotMinAmount" : NumberInt(2000),
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


// 删除基本表中的游戏数据
db.brand.update({},{$pull: {games: {gameName:"番摊"} }},{multi:true});
db.base_game_config.remove({"name":"番摊"},false);


/*初始化业主游戏信息*/
function initBrandGameInfo(gameId){
   var brandList = db.brand.distinct("brand");
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
              brandRoomInfo.state="NORMAL";
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
    "_id" : NumberInt(41), 
    "gameName" : "番摊", 
    "gameAlias" : "fantan", 
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
        }, 
        {
            "key" : "serviceCharge", 
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "robotMinAmount", 
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
    gameId:41,
    success:false,
    type:"ADD",
    createTime:new Date(),
    updateTime:new Date(),
    robotService:true
}

db.game_setting_info.insert(gameSettingInfo);