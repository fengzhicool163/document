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
    "robotService" : false, 
    "betAnalysis" : false, 
    "retryConnection" : false, 
    "updateTime" : ISODate("2019-06-14T06:27:30.079+0000"), 
    "createTime" : ISODate("2019-06-13T02:07:56.333+0000"), 
    "rooms" : [

    ], 
    "classify" : NumberInt(2)
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
db.brand.update({}, { $pull: { games: { gameName: "西游捕鱼" } } }, { multi: true });
db.base_game_config.remove({ "name": "西游捕鱼" }, false);


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
    "gameName" : "西游捕鱼", 
    "gameAlias" : "fishing", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "params" : [
        {
            "key" : "siteName", 
            "required" : true, 
            "type" : "STRING", 
            "title" : "房间", 
            "sort" : NumberInt(1), 
            "min" : NumberInt(0), 
            "max" : NumberInt(100)
        }, 
        {
            "key" : "openLevel", 
            "required" : true, 
            "title" : "开启等级", 
            "sort" : NumberInt(2), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "goldConsume", 
            "required" : true, 
            "title" : "金币消耗", 
            "sort" : NumberInt(3), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "goldDown", 
            "required" : true, 
            "title" : "金币下限", 
            "sort" : NumberInt(4), 
            "type" : "DOUBLE", 
            "min" : NumberInt(-1), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "goldUp", 
            "required" : true, 
            "title" : "金币上限", 
            "sort" : NumberInt(5), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "batteryDown", 
            "required" : true, 
            "title" : "炮台倍数下限", 
            "sort" : NumberInt(6), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "batteryUp", 
            "required" : true, 
            "title" : "炮台倍数上限", 
            "sort" : NumberInt(7), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "lossLimitValJoinRewardRate", 
            "required" : true, 
            "title" : "水池亏损极限值及对应返奖率", 
            "sort" : NumberInt(8), 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "lossLineValJoinRewardRate", 
            "required" : true, 
            "title" : "水池亏损警戒值及对应返奖率", 
            "sort" : NumberInt(9), 
            "empty" : true, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "centreLineValJoinRewardRate", 
            "required" : true, 
            "title" : "水池中位警戒值及对应返奖率", 
            "sort" : NumberInt(10), 
            "empty" : true, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "centreValJoinRewardRate", 
            "required" : true, 
            "title" : "水池中位值及对应返奖率", 
            "sort" : NumberInt(11), 
            "empty" : true, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "centreLimitJoinRewardRate", 
            "required" : true, 
            "title" : "水池中位极限值及对应返奖率", 
            "sort" : NumberInt(12), 
            "empty" : true, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "profitLineValJoinRewardRate", 
            "required" : true, 
            "title" : "水池盈利警戒值及对应返奖率", 
            "sort" : NumberInt(13), 
            "empty" : true, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "profitLimitValJoinRewardRate", 
            "required" : true, 
            "title" : "水池盈利极限值及对应返奖率", 
            "sort" : NumberInt(14), 
            "empty" : true, 
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "drawRate", 
            "required" : true, 
            "title" : "水池抽水比例", 
            "sort" : NumberInt(15), 
            "type" : "DOUBLE", 
            "min" : NumberInt(-1), 
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