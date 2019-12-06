
// 添加斗地主
var game = {
    "_id": NumberInt(42),
    "name": "抢庄牌九",
    "alias": "pg",
    "icon": "/assets/ui/game/icon_game_bj_00.png",
    "url": "../pg/",
    "jumpUrl": true,
    "gameStyle": "SH",
    "gameType": "ROUND",
    "state": "NORMAL",
    "sort": NumberInt(928),
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
                "serviceCharge": NumberInt(0),
                "minBet": NumberInt(1),
                "minEntry": NumberInt(20),
                "robotMinAmount": NumberInt(20),
                "commissionRate": 0.03,
                "chip01":NumberInt(-1),
                "chip02":NumberInt(3),
                "chip03":NumberInt(15),
                "chip04":NumberInt(60),
                "chip05":NumberInt(180),
                "chip06":NumberInt(1),
                "chip07":NumberInt(-1),
                "chip08":NumberInt(-1),
                "chip09":NumberInt(-1),
                "chip010":NumberInt(-1),
                "chip011":NumberInt(1),
                "chip012":NumberInt(2),
                "chip013":NumberInt(3),
                "chip014":NumberInt(4),
                "chip015":NumberInt(5),
                "chip016":NumberInt(1),
                "chip017":NumberInt(2),
                "chip018":NumberInt(5),
                "chip019":NumberInt(10),
                "chip020":NumberInt(20),
                "chip021":NumberInt(1),
                "chip022":NumberInt(5),
                "chip023":NumberInt(15),
                "chip024":NumberInt(30),
                "chip025":NumberInt(60)
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
                "serviceCharge": NumberInt(0),
                "minBet": NumberInt(5),
                "minEntry": NumberInt(100),
                "robotMinAmount": NumberInt(100),
                "commissionRate": 0.03,
                "chip01":NumberInt(-1),
                "chip02":NumberInt(3),
                "chip03":NumberInt(15),
                "chip04":NumberInt(60),
                "chip05":NumberInt(180),
                "chip06":NumberInt(1),
                "chip07":NumberInt(-1),
                "chip08":NumberInt(-1),
                "chip09":NumberInt(-1),
                "chip010":NumberInt(-1),
                "chip011":NumberInt(1),
                "chip012":NumberInt(2),
                "chip013":NumberInt(3),
                "chip014":NumberInt(4),
                "chip015":NumberInt(5),
                "chip016":NumberInt(1),
                "chip017":NumberInt(2),
                "chip018":NumberInt(5),
                "chip019":NumberInt(10),
                "chip020":NumberInt(20),
                "chip021":NumberInt(1),
                "chip022":NumberInt(5),
                "chip023":NumberInt(15),
                "chip024":NumberInt(30),
                "chip025":NumberInt(60)
            }
        },
        {
            "roomId": NumberInt(291),
            "name": "高手房",
            "icon": "/assets/ui/room/img_fangjian_fang_03.png",
            "state": "NORMAL",
            "sort": NumberInt(3),
            "roomType": "SUPERIOR",
            "createTime": new Date(),
            "updateTime": new Date(),
            "config": {
                "serviceCharge": NumberInt(0),
                "minBet": NumberInt(20),
                "minEntry": NumberInt(400),
                "robotMinAmount": NumberInt(400),
                "commissionRate": 0.03,
                "chip01":NumberInt(-1),
                "chip02":NumberInt(3),
                "chip03":NumberInt(15),
                "chip04":NumberInt(60),
                "chip05":NumberInt(180),
                "chip06":NumberInt(1),
                "chip07":NumberInt(-1),
                "chip08":NumberInt(-1),
                "chip09":NumberInt(-1),
                "chip010":NumberInt(-1),
                "chip011":NumberInt(1),
                "chip012":NumberInt(2),
                "chip013":NumberInt(3),
                "chip014":NumberInt(4),
                "chip015":NumberInt(5),
                "chip016":NumberInt(1),
                "chip017":NumberInt(2),
                "chip018":NumberInt(5),
                "chip019":NumberInt(10),
                "chip020":NumberInt(20),
                "chip021":NumberInt(1),
                "chip022":NumberInt(5),
                "chip023":NumberInt(15),
                "chip024":NumberInt(30),
                "chip025":NumberInt(60)
            }
        },
        {
            "roomId": NumberInt(292),
            "name": "土豪房",
            "icon": "/assets/ui/room/img_fangjian_fang_03.png",
            "state": "NORMAL",
            "sort": NumberInt(4),
            "roomType": "TUHAO",
            "createTime": new Date(),
            "updateTime": new Date(),
            "config": {
                "serviceCharge": NumberInt(0),
                "minBet": NumberInt(100),
                "minEntry": NumberInt(2000),
                "robotMinAmount": NumberInt(2000),
                "commissionRate": 0.03,
                "chip01":NumberInt(-1),
                "chip02":NumberInt(3),
                "chip03":NumberInt(15),
                "chip04":NumberInt(60),
                "chip05":NumberInt(180),
                "chip06":NumberInt(1),
                "chip07":NumberInt(-1),
                "chip08":NumberInt(-1),
                "chip09":NumberInt(-1),
                "chip010":NumberInt(-1),
                "chip011":NumberInt(1),
                "chip012":NumberInt(2),
                "chip013":NumberInt(3),
                "chip014":NumberInt(4),
                "chip015":NumberInt(5),
                "chip016":NumberInt(1),
                "chip017":NumberInt(2),
                "chip018":NumberInt(5),
                "chip019":NumberInt(10),
                "chip020":NumberInt(20),
                "chip021":NumberInt(1),
                "chip022":NumberInt(5),
                "chip023":NumberInt(15),
                "chip024":NumberInt(30),
                "chip025":NumberInt(60)
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
db.brand.update({}, { $pull: { games: { gameName: "抢庄牌九" } } }, { multi: true });
db.base_game_config.remove({ "name": "抢庄牌九" }, false);


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
        brandGameInfo.state = "NORMAL";
        brandGameInfo.sort = NumberInt(gameInfo.sort);
        brandGameInfo.createTime = new Date();
        brandGameInfo.updateTime = new Date();
        var brandRoomList = [];
        //  插入对应的房间数据
        for (var j = 0; j < gameInfo.rooms.length; j++) {
            printjson(gameInfo.rooms[j]);
            var roomInfo = gameInfo.rooms[j];
            var brandRoomInfo = {};

            brandRoomInfo.parentId = NumberInt(roomInfo.roomId);
            brandRoomInfo.state = "NORMAL";
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
    "_id" : NumberInt(42), 
    "gameName" : "抢庄牌九", 
    "gameAlias" : "pg", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "params" : [
        {
            "key" : "serviceCharge", 
            "required" : true, 
            "title":"服务费", 
            "sort":NumberInt(2),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true,
            "title":"底注", 
            "sort":NumberInt(1),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxEntry", 
            "required" : true,
            "title":"准入",
            "sort":NumberInt(3), 
            "type" : "INT", 
            "min" : NumberInt(1), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "robotMinAmount", 
            "required" : false, 
            "title":"机器人初始金币",
            "sort":NumberInt(5),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "required" : true, 
            "title":"抽水",
            "sort":NumberInt(4),
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "chip01", 
            "required" : false, 
            "title":"筹码1",
            "sort":NumberInt(6),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip02", 
            "required" : false,
            "title":"筹码2",
            "sort":NumberInt(7), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip03", 
            "required" : false, 
            "title":"筹码3",
            "sort":NumberInt(8),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip04", 
            "required" : false, 
            "title":"筹码4",
            "sort":NumberInt(9),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip05", 
            "required" : false, 
            "title":"筹码5",
            "sort":NumberInt(10),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip06", 
            "required" : false, 
            "title":"筹码6",
            "sort":NumberInt(11),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip07", 
            "required" : false, 
            "title":"筹码7",
            "sort":NumberInt(12),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip08", 
            "required" : false, 
            "title":"筹码8",
            "sort":NumberInt(13),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip09", 
            "required" : false, 
            "title":"筹码9",
            "sort":NumberInt(14),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip10", 
            "required" : false, 
            "title":"筹码10",
            "sort":NumberInt(15),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip11", 
            "required" : false, 
            "title":"筹码11",
            "sort":NumberInt(16),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip12", 
            "required" : false, 
            "title":"筹码12",
            "sort":NumberInt(17),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip13", 
            "required" : false, 
            "title":"筹码13",
            "sort":NumberInt(18),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip14", 
            "required" : false, 
            "title":"筹码14",
            "sort":NumberInt(19),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip15", 
            "required" : false, 
            "title":"筹码15",
            "sort":NumberInt(20),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip16", 
            "required" : false, 
            "title":"筹码16",
            "sort":NumberInt(21),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip17", 
            "required" : false, 
            "title":"筹码17",
            "sort":NumberInt(22),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip18", 
            "required" : false, 
            "title":"筹码18",
            "sort":NumberInt(23),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip19", 
            "required" : false, 
            "title":"筹码19",
            "sort":NumberInt(24),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip20", 
            "required" : false,
            "title":"筹码20",
            "sort":NumberInt(25), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip21", 
            "required" : false, 
            "title":"筹码21",
            "sort":NumberInt(26),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip22", 
            "required" : false, 
            "title":"筹码22",
            "sort":NumberInt(27),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip23", 
            "required" : false, 
            "title":"筹码23",
            "sort":NumberInt(28),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip24", 
            "required" : false, 
            "title":"筹码24",
            "sort":NumberInt(29),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        },
        {
            "key" : "chip25", 
            "required" : false, 
            "title":"筹码25",
            "sort":NumberInt(30),
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }
    ]
}

// 插入配置参数
db.base_game_setting.save(gameParams);

// 插入更新脚本
var gameSettingInfo = {
    gameId:42,
    success:false,
    type:"ADD",
    createTime:new Date(),
    updateTime:new Date(),
    robotService:true
}

db.game_setting_info.insert(gameSettingInfo);