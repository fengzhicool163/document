var game = { 
    "_id" : NumberInt(44), 
    "name" : "癞子牛牛", 
    "alias" : "lznn", 
    "icon" : "/assets/ui/game/icon_game_bj_00.png", 
    "url" : "../g_qznnlz/", 
    "jumpUrl" : true, 
    "gameStyle" : "SH", 
    "gameType" : "ROUND", 
    "state" : "NORMAL", 
    "sort" : NumberInt(1001), 
    "robotService" : true, 
    "betAnalysis" : false, 
    "retryConnection" : false, 
    "updateTime" : ISODate("2019-10-24T06:19:02.362+0000"), 
    "createTime" : ISODate("2019-09-10T06:17:14.754+0000"), 
    "rooms" : [
        {
            "roomId" : NumberInt(304), 
            "name" : "新手房", 
            "icon" : "/assets/ui/room/img_fangjian_fang_01.png", 
            "roomType" : "NOVICE", 
            "state" : "NORMAL", 
            "sort" : NumberInt(1), 
            "config" : {
                "serviceCharge" : 0.0,
                "commissionRate" : "0.03",
                "maxBet" : "-1",
                "minEntry" : "0.6",
                "robotMinAmount" : "0.6",
                "minBet" : "0.01",
                "needPay" : 0
            }
        }, 
        {
            "roomId" : NumberInt(305), 
            "name" : "进阶房", 
            "icon" : "/assets/ui/room/img_fangjian_fang_02.png", 
            "roomType" : "ADVANCED", 
            "state" : "NORMAL", 
            "sort" : NumberInt(2), 
            "config" : {
                "serviceCharge" : 0.0,
                "commissionRate" : "0.03",
                "maxBet" : -1.0,
                "minEntry" : 20.0,
                "robotMinAmount" : 20.0,
                "minBet" : 1.0,
                "needPay" : 0
            }
        }, 
        {
            "roomId" : NumberInt(306), 
            "name" : "高手房", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png", 
            "roomType" : "SUPERIOR", 
            "state" : "NORMAL", 
            "sort" : NumberInt(3), 
            "config" : {
                "serviceCharge" : 0.0,
                "commissionRate" : "0.03",
                "maxBet" : -1.0,
                "minEntry" : 100.0,
                "robotMinAmount" : 100.0,
                "minBet" : 5.0,
                "needPay" : 0
            }
        }, 
        {
            "roomId" : NumberInt(307), 
            "name" : "土豪房", 
            "icon" : "/assets/ui/room/img_fangjian_fang_04.png", 
            "roomType" : "TUHAO", 
            "state" : "NORMAL", 
            "sort" : NumberInt(0), 
            "config" : {
                "serviceCharge" : 0.0,
                "commissionRate" : "0.03",
                "maxBet" : -1.0,
                "minEntry" : 400.0,
                "robotMinAmount" : 400.0,
                "minBet" : 20.0,
                "needPay" : 0
            }
        }
    ], 
    "gamePlatform": "",
	"classify" : NumberInt(2), 
    "classifyAlias" : "lznn", 
	"enterLimit" : NumberInt(0), 	
    "classifyStatus" : "NORMAL", 
    "classifySort" : NumberInt(2), 
    "classifyIcon" : "https://cdn.pixabay.com/photo/2019/07/29/16/13/bald-eagle-4370916_960_720.jpg", 
	"classifyGameIds" : "", 
    "classifyGames" : [
            ], 
    "classifyOnlineFlag" : true
}

db.brand.update({},{$pull: {games: {gameName:"癞子牛牛"} }},{multi:true});
db.base_game_config.remove({"name":"癞子牛牛"},false);
db.base_game_setting.remove({"name":"癞子牛牛"},false);

/*获取房间自增id*/
function getBaseRoomId(roomIdType) {
    var maxValue = db.global_auto_id.findAndModify({
        query: { "colName": roomIdType },
        update: { $inc: { seq: 1 } },
        upsert: true,
        new: true
    });
    return maxValue.seq;
}


/*初始化业主游戏信息*/
function initBrandGameInfo(gameId) {
    // 获取现有的业主列表
    var brandList = db.brand.distinct("brand");
    print("现有游戏业主: " + brandList);
    print("开始初始化业主游戏信息");

    for (var i = 0; i < brandList.length; i++) {
        var brand = brandList[i];

        var gameInfo = db.base_game_config.findOne({ _id: gameId });
        var brandGameInfo = {};
        brandGameInfo.gameId = NumberInt(gameInfo._id);
        brandGameInfo.gameName = gameInfo.name;
        brandGameInfo.state = gameInfo.state;
        brandGameInfo.sort = NumberInt(gameInfo.sort);
		brandGameInfo.classify = NumberInt(gameInfo.classify);
		brandGameInfo.enterLimit = NumberInt(gameInfo.enterLimit);
		brandGameInfo.classifyStatus = gameInfo.classifyStatus;
		brandGameInfo.classifyGameIds = gameInfo.classifyGameIds;
		brandGameInfo.gamePlatform = gameInfo.gamePlatform;
		brandGameInfo.classifyOnlineFlag = gameInfo.classifyOnlineFlag;
        brandGameInfo.createTime = new Date();
        brandGameInfo.updateTime = new Date();
		brandGameInfo.gamePlatform = gameInfo.gamePlatform
        var brandRoomList = [];
        //  插入对应的房间数据
        for (var j = 0; j < gameInfo.rooms.length; j++) {
            printjson(gameInfo.rooms[j]);
            var roomInfo = gameInfo.rooms[j];
            var brandRoomInfo = {};

            brandRoomInfo.parentId = NumberInt(roomInfo.roomId);
            brandRoomInfo.state = roomInfo.state;
            brandRoomInfo.sort = NumberInt(roomInfo.sort);
            brandRoomInfo.createTime = new Date();
            brandRoomInfo.updateTime = new Date();
            // 获取业主自增房间id
            var maxValue = db.global_auto_id.findAndModify({
                query: { "colName": "roomId" },
                update: { $inc: { seq: 1 } },
                upsert: true,
                new: true
            });
            printjson("新增房间id== " + maxValue.seq);
            brandRoomInfo.roomId = NumberInt(maxValue.seq);

            brandRoomList.push(brandRoomInfo);
        }
        brandGameInfo.rooms = brandRoomList;
        print("插入对应的游戏数据");
        printjson(brandGameInfo);
        db.brand.update({ "brand": brand }, { $addToSet: { "games": brandGameInfo } });
    }
}



for (var i = 0; i < game.rooms.length; i++) {
    //获取房间自增id
    game.rooms[i].roomId = NumberInt(getBaseRoomId("baseRoomId"));
}

try {
    printjson(game);
    db.base_game_config.insert(game);
} catch (err) {
    print("初始化游戏错误");
}

initBrandGameInfo(game._id);

// 新增游戏参数 ,  管端房间配置,参数校验依赖此配置
// 具体内容字段参照游戏产品文档以及管端产品文档
//  新游戏 注意配置 mq  的  topic  以及  group  如果 此处不指定 topic  以及  group 默认使用  gameAlias 比如 斗地主 为 cg_ddz_in   cg_ddz_out  ddz_producer_group ddz_consumer_group   
var gameParams =  {
    "_id": NumberInt(44),
    "gameName": "癞子牛牛",
    "gameAlias": "lznn",
    "adapt": "niuniuAdapt",
    "handler": "niuniuHandler",
    "listener": "niuniuListener",
    "sort": NumberInt(1001),
    "params": [
      {
        "key": "maxEntry",
        "required": true,
        "title": "准入",
        "sort": NumberInt(1),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(2147483647)
      },
      {
        "key": "serviceCharge",
        "required": true,
        "title": "服务费",
        "sort": NumberInt(2),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(2147483647)
      },
      {
        "key": "minBet",
        "required": true,
        "title": "投注下限",
        "sort": NumberInt(4),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(2147483647)
      },
      {
        "key": "maxBet",
        "required": true,
        "title": "投注上限",
        "sort": NumberInt(5),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(2147483647)
      },
      {
        "key": "commissionRate",
        "required": true,
        "title": "抽水",
        "sort": NumberInt(3),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(1)
      },
      {
        "key": "robotMinAmount",
        "required": false,
        "title": "机器人初始金币",
        "sort": NumberInt(7),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(2147483647)
      }
    ]
  }

// 插入配置参数
db.base_game_setting.save(gameParams);


// 插入游戏热更记录,管端服务自动扫描此集合并热加载配置
var gameSettingInfo = {
    gameId:NumberInt(44), //对应的新增游戏id
    success:false, // false  为未处理  true  热加载不执行
    type:"ADD", // 新增或者 update
    createTime:new Date(),
    updateTime:new Date(),
    robotService:true  // 是否需要机器人  true  的话 管端会初始化机器人房间数据
}
db.game_setting_info.insert(gameSettingInfo);