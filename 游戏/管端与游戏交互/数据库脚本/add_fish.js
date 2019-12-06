var game = { 
    "_id" : NumberInt(90), 
    "name" : "西游捕鱼", 
    "alias" : "fishing", 
    "icon" : "/assets/ui/game/icon_game_bj_00.png", 
    "url" : "../fish/", 
    "jumpUrl" : true, 
    "gameStyle" : "FISH", 
    "gameType" : "STAKE", 
    "state" : "NORMAL", 
    "sort" : NumberInt(950), 
    "robotService" : true, 
    "betAnalysis" : false, 
    "retryConnection" : false, 
    "updateTime" : ISODate("2019-06-14T06:27:30.079+0000"), 
    "createTime" : ISODate("2019-06-13T02:07:56.333+0000"), 
    "rooms" : [
        {
            "roomId" : NumberInt(197), 
            "name" : "新手场", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png", 
            "roomType" : "NOVICE", 
            "state" : "NORMAL", 
            "sort" : NumberInt(1), 
            "config" : {
                "defaultMultiple" : NumberInt(1), 
                "luckyBox" : NumberInt(180), 
                "silentTime" : NumberInt(60), 
                "dropids" : "", 
                "minEntry" : NumberInt(1000), 
                "scenecode" : "", 
                "level" : NumberInt(0), 
                "fisheryId" : "Fishery01", 
                "openingTime" : NumberInt(-1), 
                "fishboomids" : "", 
                "multipleUpperLimit" : NumberInt(50), 
                "businessHours" : NumberInt(-1), 
                "fishids" : "", 
                "duration" : NumberInt(-1), 
                "goldUpperLimit" : NumberInt(100000), 
                "interactionInterval" : NumberInt(10), 
                "multipleLowerLimit" : NumberInt(1), 
                "goldPoint" : NumberInt(-1), 
                "bossids" : ""
            }
        }, 
        {
            "roomId" : NumberInt(198), 
            "name" : "新手场", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png", 
            "roomType" : "NOVICE", 
            "state" : "NORMAL", 
            "sort" : NumberInt(2), 
            "config" : {
                "defaultMultiple" : NumberInt(50), 
                "luckyBox" : NumberInt(180), 
                "silentTime" : NumberInt(60), 
                "dropids" : "", 
                "minEntry" : NumberInt(50000), 
                "scenecode" : "", 
                "level" : NumberInt(10), 
                "fisheryId" : "Fishery02", 
                "openingTime" : NumberInt(-1), 
                "fishboomids" : "", 
                "multipleUpperLimit" : NumberInt(200), 
                "businessHours" : NumberInt(-1), 
                "fishids" : "", 
                "duration" : NumberInt(-1), 
                "goldUpperLimit" : NumberInt(500000), 
                "interactionInterval" : NumberInt(10), 
                "multipleLowerLimit" : NumberInt(50), 
                "goldPoint" : NumberInt(-1), 
                "bossids" : ""
            }
        }, 
        {
            "roomId" : NumberInt(199), 
            "name" : "中级场", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png", 
            "roomType" : "NOVICE", 
            "state" : "NORMAL", 
            "sort" : NumberInt(3), 
            "config" : {
                "defaultMultiple" : NumberInt(200), 
                "luckyBox" : NumberInt(180), 
                "silentTime" : NumberInt(60), 
                "dropids" : "", 
                "minEntry" : NumberInt(250000), 
                "scenecode" : "", 
                "level" : NumberInt(20), 
                "fisheryId" : "Fishery03", 
                "openingTime" : NumberInt(-1), 
                "fishboomids" : "", 
                "multipleUpperLimit" : NumberInt(500), 
                "businessHours" : NumberInt(-1), 
                "fishids" : "", 
                "duration" : NumberInt(-1), 
                "goldUpperLimit" : NumberInt(2500000), 
                "interactionInterval" : NumberInt(10), 
                "multipleLowerLimit" : NumberInt(200), 
                "goldPoint" : NumberInt(-1), 
                "bossids" : ""
            }
        }, 
        {
            "roomId" : NumberInt(200), 
            "name" : "高级场", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png", 
            "roomType" : "NOVICE", 
            "state" : "NORMAL", 
            "sort" : NumberInt(4), 
            "config" : {
                "defaultMultiple" : NumberInt(500), 
                "luckyBox" : NumberInt(180), 
                "silentTime" : NumberInt(60), 
                "dropids" : "", 
                "minEntry" : NumberInt(1000000), 
                "scenecode" : "", 
                "level" : NumberInt(25), 
                "fisheryId" : "Fishery04", 
                "openingTime" : NumberInt(-1), 
                "fishboomids" : "", 
                "multipleUpperLimit" : NumberInt(1000), 
                "businessHours" : NumberInt(-1), 
                "fishids" : "", 
                "duration" : NumberInt(-1), 
                "goldUpperLimit" : NumberInt(-1), 
                "interactionInterval" : NumberInt(10), 
                "multipleLowerLimit" : NumberInt(500), 
                "goldPoint" : NumberInt(-1), 
                "bossids" : ""
            }
        }, 
        {
            "roomId" : NumberInt(201), 
            "name" : "竞技场", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png", 
            "roomType" : "NOVICE", 
            "state" : "NORMAL", 
            "sort" : NumberInt(5), 
            "config" : {
                "defaultMultiple" : NumberInt(1), 
                "luckyBox" : NumberInt(180), 
                "silentTime" : NumberInt(-1), 
                "dropids" : "", 
                "minEntry" : NumberInt(10000), 
                "scenecode" : "", 
                "level" : NumberInt(0), 
                "fisheryId" : "Fishery11", 
                "openingTime" : "09: 3013: 3015: 3020: 30", 
                "fishboomids" : "", 
                "multipleUpperLimit" : NumberInt(1000), 
                "businessHours" : NumberInt(7200), 
                "fishids" : "", 
                "duration" : NumberInt(600), 
                "goldUpperLimit" : NumberInt(-1), 
                "interactionInterval" : NumberInt(10), 
                "multipleLowerLimit" : NumberInt(1), 
                "goldPoint" : NumberInt(10000), 
                "bossids" : ""
            }
        }
    ]
}

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


// 删除基本表中的游戏数据
db.brand.update({}, { $pull: { games: { gameName: "捕鱼" } } }, { multi: true });
db.base_game_config.remove({ "name": "捕鱼" }, false);


/*初始化业主游戏信息*/
function initBrandGameInfo(gameId) {
    var brandList = db.brand.distinct("brand");
    print("现有游戏业主: " + brandList);
    print("开始初始化业主游戏信息");

    for (var i = 0; i < brandList.length; i++) {
        var brand = brandList[i];

        var gameInfo = db.base_game_config.findOne({ _id: gameId });
        var brandGameInfo = {};
        brandGameInfo.gameId = gameInfo._id;
        brandGameInfo.gameName = gameInfo.name;
        brandGameInfo.state = "NORMAL";
        brandGameInfo.sort = gameInfo.sort;
        brandGameInfo.createTime = new Date();
        brandGameInfo.updateTime = new Date();
        var brandRoomList = [];
        //  插入对应的房间数据
        for (var j = 0; j < gameInfo.rooms.length; j++) {
            printjson(gameInfo.rooms[j]);
            var roomInfo = gameInfo.rooms[j];
            var brandRoomInfo = {};

            brandRoomInfo.parentId = roomInfo.roomId;
            brandRoomInfo.state = "NORMAL";
            brandRoomInfo.sort = roomInfo.sort;
            brandRoomInfo.createTime = new Date();
            brandRoomInfo.updateTime = new Date();

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



// 新增游戏参数

var gameParams =  { 
    "_id" : NumberInt(90), 
    "gameName" : "捕鱼", 
    "gameAlias" : "fishing", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "params" : [
        {
            "key" : "fisheryId", 
            "required" : false, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(100)
        }, 
        {
            "key" : "level", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(100)
        }, 
        {
            "key" : "goldPoint", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minEntry", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "goldUpperLimit", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(-1), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "multipleLowerLimit", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "multipleUpperLimit", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "defaultMultiple", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "silentTime", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(-1), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "interactionInterval", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "luckyBox", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "openingTime", 
            "required" : false, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "businessHours", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "duration", 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "fishids", 
            "required" : false, 
            "empty" : true, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "bossids", 
            "required" : false, 
            "empty" : true, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "fishboomids", 
            "required" : false, 
            "empty" : true, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "dropids", 
            "required" : false, 
            "empty" : true, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "scenecode", 
            "required" : false, 
            "empty" : true, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }
    ]
}

// 插入配置参数
db.base_game_setting.save(gameParams);


var gameSettingInfo = {
    gameId:90,
    success:false,
    type:"ADD",
    createTime:new Date(),
    updateTime:new Date(),
    robotService:false
}

db.game_setting_info.insert(gameSettingInfo);