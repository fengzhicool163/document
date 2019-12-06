
// 添加斗地主
var game = {
    "_id": NumberInt(24),
    "name": "斗地主",
    "alias": "ddz",
    "icon": "/assets/ui/game/icon_game_bj_00.png",
    "url": "../lord/",
    "jumpUrl": true,
    "gameStyle": "SH",
    "gameType": "ROUND",
    "state": "EXPECTATION",
    "sort": NumberInt(929),
    "retryConnection": false,
    "robotService":true,
    "betAnalysis":false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms": [
        {
            "roomId": NumberInt(289),
            "name": "新手房",
            "icon": "/assets/ui/room/img_fangjian_fang_03.png",
            "state": "NORMAL",
            "sort": NumberInt(1),
            "roomType": "NOVICE",
            "createTime": new Date(),
            "updateTime": new Date(),
            "config": {
                "serviceCharge" : NumberInt(0), 
                "commissionRate" : 0.03, 
                "minEntry" : 0.6, 
                "robotMinAmount" : 0.6, 
                "minBet" : 0.01, 
                "maxEntry" : NumberInt(100)
            }
        },
        {
            "roomId": NumberInt(290),
            "name": "进阶房",
            "icon": "/assets/ui/room/img_fangjian_fang_03.png",
            "state": "NORMAL",
            "sort": NumberInt(2),
            "roomType": "ADVANCED",
            "createTime": new Date(),
            "updateTime": new Date(),
            "config": {
                "serviceCharge" : NumberInt(0), 
                "commissionRate" : 0.03, 
                "minEntry" : NumberInt(5), 
                "robotMinAmount" : NumberInt(5), 
                "minBet" : 0.1, 
                "maxEntry" : NumberInt(1000)
            }
        },
        {
            "roomId": NumberInt(291),
            "name": "高手房",
            "icon": "/assets/ui/room/img_fangjian_fang_03.png",
            "state": "PAUSE",
            "sort": NumberInt(3),
            "roomType": "SUPERIOR",
            "createTime": new Date(),
            "updateTime": new Date(),
            "config": {
                "serviceCharge" : NumberInt(0), 
                "commissionRate" : 0.03, 
                "minEntry" : NumberInt(20), 
                "robotMinAmount" : NumberInt(20), 
                "minBet" : NumberInt(1), 
                "maxEntry" : NumberInt(-1)
            }     
        },
        {
            "roomId": NumberInt(292),
            "name": "土豪房",
            "icon": "/assets/ui/room/img_fangjian_fang_03.png",
            "state": "PAUSE",
            "sort": NumberInt(4),
            "roomType": "TUHAO",
            "createTime": new Date(),
            "updateTime": new Date(),
            "config": {
                "serviceCharge" : NumberInt(0), 
                "commissionRate" : 0.03, 
                "minEntry" : NumberInt(100), 
                "robotMinAmount" : NumberInt(100), 
                "minBet" : NumberInt(5), 
                "maxEntry" : NumberInt(-1)
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
db.brand.update({}, { $pull: { games: { gameName: "斗地主" } } }, { multi: true });
db.base_game_config.remove({ "name": "斗地主" }, false);


/*初始化业主游戏信息*/
function initBrandGameInfo(gameId) {
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
        brandGameInfo.createTime = new Date();
        brandGameInfo.updateTime = new Date();
        var brandRoomList = [];
        //  插入对应的房间数据
        for (var j = 0; j < gameInfo.rooms.length; j++) {
            printjson(gameInfo.rooms[j]);
            var roomInfo = gameInfo.rooms[j];
            var brandRoomInfo = {};

            brandRoomInfo.parentId =NumberInt( roomInfo.roomId);
            brandRoomInfo.state = roomInfo.state;
            brandRoomInfo.sort = NumberInt(roomInfo.sort);
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
    "_id" : NumberInt(24), 
    "gameName" : "斗地主", 
    "gameAlias" : "ddz", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "params" : [
        {
            "key" : "commissionRate", 
            "title" : "抽水", 
            "sort" : NumberInt(5), 
            "required" : true, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minEntry", 
            "required" : true, 
            "title" : "准入下限", 
            "sort" : NumberInt(1), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxEntry", 
            "required" : true, 
            "title" : "准入上限", 
            "sort" : NumberInt(2), 
            "type" : "INT", 
            "min" : NumberInt(-1), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title" : "底注", 
            "sort" : NumberInt(3), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "serviceCharge", 
            "required" : true, 
            "title" : "服务费", 
            "sort" : NumberInt(4), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "robotMinAmount", 
            "required" : false, 
            "title" : "机器人初始金币", 
            "sort" : NumberInt(6), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }
    ]
}

// 插入配置参数
db.base_game_setting.save(gameParams);


var gameSettingInfo = {
    gameId:NumberInt(24),
    success:false,
    type:"ADD",
    createTime:new Date(),
    updateTime:new Date(),
    robotService:true
}

db.game_setting_info.insert(gameSettingInfo);