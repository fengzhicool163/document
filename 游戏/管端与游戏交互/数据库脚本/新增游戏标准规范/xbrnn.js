var game = { 
    "_id" : NumberInt(35), 
    "name" : "新百人牛牛", 
    "alias" : "xbrnn", 
    "icon" : "/assets/ui/game/icon_dt_brnn.png", 
    "url" : "../g_xbrnn/", 
    "jumpUrl" : true, 
    "gameStyle" : "SH", 
    "gameType" : "STAKE", 
    "state" : "NORMAL", 
    "sort" : NumberInt(1001), 
    "robotService" : false, 
    "betAnalysis" : true, 
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
            "sort" : NumberInt(0), 
            "config" : {
                "serviceCharge" : "0", 
                "commissionRate" : "0.03", 
                "minEntry" : "0", 
                "maxBet" : "20", 
                "robotMinAmount" : "200", 
                "chip02" : "5", 
                "minBet" : "1", 
                "chip03" : "10", 
                "chip01" : "1", 
                "checkPeriod" : NumberInt(1), 
                "rtpRate" : "0.95", 
                "chip04" : "20", 
                "needPay" : 20.0
            }
        }, 
        {
            "roomId" : NumberInt(305), 
            "name" : "进阶房", 
            "icon" : "/assets/ui/room/img_fangjian_fang_02.png", 
            "roomType" : "ADVANCED", 
            "state" : "NORMAL", 
            "sort" : NumberInt(0), 
            "config" : {
                "serviceCharge" : NumberInt(0), 
                "commissionRate" : "0.03", 
                "minEntry" : NumberInt(0), 
                "maxBet" : NumberInt(100), 
                "robotMinAmount" : NumberInt(1000), 
                "chip02" : NumberInt(25), 
                "minBet" : NumberInt(5), 
                "chip03" : NumberInt(50), 
                "chip01" : NumberInt(5), 
                "checkPeriod" : NumberInt(1), 
                "rtpRate" : "0.95", 
                "chip04" : NumberInt(100), 
                "needPay" : 20.0
            }
        }, 
        {
            "roomId" : NumberInt(306), 
            "name" : "高手房", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png", 
            "roomType" : "SUPERIOR", 
            "state" : "NORMAL", 
            "sort" : NumberInt(0), 
            "config" : {
                "serviceCharge" : NumberInt(0), 
                "commissionRate" : "0.03", 
                "minEntry" : NumberInt(0), 
                "maxBet" : NumberInt(400), 
                "robotMinAmount" : NumberInt(4000), 
                "chip02" : NumberInt(100), 
                "minBet" : NumberInt(20), 
                "chip03" : NumberInt(200), 
                "chip01" : NumberInt(20), 
                "checkPeriod" : NumberInt(1), 
                "rtpRate" : "0.95", 
                "chip04" : NumberInt(400), 
                "needPay" : 20.0
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
                "serviceCharge" : NumberInt(0), 
                "commissionRate" : "0.03", 
                "minEntry" : NumberInt(0), 
                "maxBet" : NumberInt(2000), 
                "robotMinAmount" : NumberInt(20000), 
                "chip02" : NumberInt(500), 
                "minBet" : NumberInt(100), 
                "chip03" : NumberInt(1000), 
                "chip01" : NumberInt(100), 
                "checkPeriod" : NumberInt(1), 
                "rtpRate" : "0.95", 
                "chip04" : NumberInt(2000), 
                "needPay" : 100.0
            }
        }
    ], 
    "gamePlatform": "",
	"classify" : NumberInt(2), 
    "classifyAlias" : "xbrnn", 
	"enterLimit" : NumberInt(0), 	
    "classifyStatus" : "NORMAL", 
    "classifySort" : NumberInt(2), 
    "classifyIcon" : "", 
	"classifyGameIds" : "", 
    "classifyGames" : [
            ], 
    "classifyOnlineFlag" : true
}

db.brand.update({},{$pull: {games: {gameName:"新百人牛牛"} }},{multi:true});
db.base_game_config.remove({"name":"新百人牛牛"},false);
db.base_game_setting.remove({"name":"新百人牛牛"},false);

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
    "_id": NumberInt(35),
    "gameName": "新百人牛牛",
    "gameAlias": "xbrnn",
    "adapt": "niuniuAdapt",
    "handler": "niuniuHandler",
    "listener": "niuniuListener",
    "sort": NumberInt(1001),
    "params": [
      {
        "key": "minEntry",
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
        "key": "chip01",
        "required": false,
        "title": "筹码1",
        "sort": NumberInt(7),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(2147483647)
      },
      {
        "key": "chip02",
        "required": false,
        "title": "筹码2",
        "sort": NumberInt(8),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(2147483647)
      },
      {
        "key": "chip03",
        "required": false,
        "title": "筹码3",
        "sort": NumberInt(9),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(2147483647)
      },
      {
        "key": "chip04",
        "required": false,
        "title": "筹码4",
        "sort": NumberInt(10),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(2147483647)
      },
      {
        "key": "robotMinAmount",
        "required": false,
        "title": "机器人初始金币",
        "sort": NumberInt(6),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(2147483647)
      },
      {
        "key": "checkPeriod",
        "required": false,
        "title": "rtp检测周期",
        "sort": NumberInt(11),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(2147483647)
      },
      {
        "key": "rtpRate",
        "required": true,
        "title": "预设RTP%",
        "sort": NumberInt(12),
        "type": "DOUBLE",
        "min": NumberInt(0),
        "max": NumberInt(1)
      }
    ]
  }

// 插入配置参数
db.base_game_setting.save(gameParams);


// 插入游戏热更记录,管端服务自动扫描此集合并热加载配置
var gameSettingInfo = {
    gameId:NumberInt(35), //对应的新增游戏id
    success:false, // false  为未处理  true  热加载不执行
    type:"ADD", // 新增或者 update
    createTime:new Date(),
    updateTime:new Date(),
    robotService:false  // 是否需要机器人  true  的话 管端会初始化机器人房间数据
}
db.game_setting_info.insert(gameSettingInfo);