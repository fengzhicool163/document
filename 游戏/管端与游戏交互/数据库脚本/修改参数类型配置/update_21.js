

var gameInfo = db.base_game_config.findOne({ "_id": 23 });

var roomTypeInfo = {};

for (let i = 0; i < gameInfo.rooms.length; i++) {
    var roomInfo = gameInfo.rooms[i];
    var key = roomInfo.roomId+"";
    roomTypeInfo[key] = roomInfo.roomType;
    switch (roomInfo.roomType) {
        case "NOVICE":
            roomInfo.config.minEntry = 0.6;
            roomInfo.config.minBet = 0.02;
            roomInfo.config.maxBet = 0.1;
            roomInfo.config.chip01 = 0.02;
            roomInfo.config.chip02 = 0.04;
            roomInfo.config.chip03 = 0.06;
            roomInfo.config.chip04 = 0.08;
            roomInfo.config.chip05 = 0.1;
            roomInfo.config.robotMinAmount = 0.6;
            break;
        case "ADVANCED":
            roomInfo.config.minEntry = 20;
            roomInfo.config.minBet = 1;
            roomInfo.config.maxBet = 100;
            roomInfo.config.chip01 = 1;
            roomInfo.config.chip02 = 5;
            roomInfo.config.chip03 = 10;
            roomInfo.config.chip04 = 50;
            roomInfo.config.chip05 = 100;
            roomInfo.config.robotMinAmount = 20;
            break;
        case "SUPERIOR":
            roomInfo.config.minEntry = 100;
            roomInfo.config.minBet = 5;
            roomInfo.config.maxBet = 500;
            roomInfo.config.chip01 = 5;
            roomInfo.config.chip02 = 25;
            roomInfo.config.chip03 = 50;
            roomInfo.config.chip04 = 250;
            roomInfo.config.chip05 = 500;
            roomInfo.config.robotMinAmount = 100;
            break;
        case "TUHAO":
            roomInfo.config.minEntry = 400;
            roomInfo.config.minBet = 20;
            roomInfo.config.maxBet = 2000;
            roomInfo.config.chip01 = 20;
            roomInfo.config.chip02 = 100;
            roomInfo.config.chip03 = 200;
            roomInfo.config.chip04 = 1000;
            roomInfo.config.chip05 = 2000;
            roomInfo.config.robotMinAmount = 400;
            break;
    }
}

printjson(gameInfo);

db.base_game_config.save(gameInfo);



var brandList = db.brand.find({});
while (brandList.hasNext()) {
    var brand = brandList.next();
    var gameInfoList = brand.games;
    for (let k = 0; k < gameInfoList.length; k++) {
        var gameInfo = gameInfoList[k];
        if (gameInfo.gameId == 23) {
            var roomList = gameInfo.rooms;
            for (let j = 0; j < roomList.length; j++) {
                var roomInfo = roomList[j];
                if (roomInfo.config != undefined && roomInfo.config != null) {
                    var roomId = roomInfo.parentId;
                    print(roomTypeInfo);
                    var roomType = roomTypeInfo[roomId+""];
                    print(roomType);
                    switch (roomType) {
                        case "NOVICE":
                            roomInfo.config.minEntry = 0.6;
                            roomInfo.config.minBet = 0.01;
                            roomInfo.config.maxBet = 0.1;
                            roomInfo.config.chip01 = 0.01;
                            roomInfo.config.chip02 = 0.03;
                            roomInfo.config.chip03 = 0.05;
                            roomInfo.config.chip04 = 0.08;
                            roomInfo.config.chip05 = 0.1;
                            roomInfo.config.robotMinAmount = 0.6;
                            break;
                        case "ADVANCED":
                            roomInfo.config.minEntry = 20;
                            roomInfo.config.minBet = 1;
                            roomInfo.config.maxBet = 100;
                            roomInfo.config.chip01 = 1;
                            roomInfo.config.chip02 = 5;
                            roomInfo.config.chip03 = 10;
                            roomInfo.config.chip04 = 50;
                            roomInfo.config.chip05 = 100;
                            roomInfo.config.robotMinAmount = 20;
                            break;
                        case "SUPERIOR":
                            roomInfo.config.minEntry = 100;
                            roomInfo.config.minBet = 5;
                            roomInfo.config.maxBet = 500;
                            roomInfo.config.chip01 = 5;
                            roomInfo.config.chip02 = 25;
                            roomInfo.config.chip03 = 50;
                            roomInfo.config.chip04 = 250;
                            roomInfo.config.chip05 = 500;
                            roomInfo.config.robotMinAmount = 100;
                            break;
                        case "TUHAO":
                            roomInfo.config.minEntry = 400;
                            roomInfo.config.minBet = 20;
                            roomInfo.config.maxBet = 2000;
                            roomInfo.config.chip01 = 20;
                            roomInfo.config.chip02 = 100;
                            roomInfo.config.chip03 = 200;
                            roomInfo.config.chip04 = 1000;
                            roomInfo.config.chip05 = 2000;
                            roomInfo.config.robotMinAmount = 400;
                            break;
                    }
                }
            }
        }
    }
    printjson(brand)
    db.brand.save(brand);
}


var setting ={ 
    "_id" : NumberInt(23), 
    "gameName" : "21点", 
    "gameAlias" : "tto", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort" : NumberInt(939), 
    "mergeHeaders" : [
        {
            "key" : "Chips", 
            "title" : "筹码面值", 
            "paramKeys" : [
                "chip01", 
                "chip02", 
                "chip03", 
                "chip04", 
                "chip05"
            ]
        }
    ], 
    "params" : [
        {
            "key" : "serviceCharge", 
            "required" : true, 
            "title" : "服务费", 
            "sort" : NumberInt(2), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "required" : true, 
            "title" : "抽水", 
            "sort" : NumberInt(3), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minEntry", 
            "required" : true, 
            "title" : "准入", 
            "sort" : NumberInt(1), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title" : "投注下限", 
            "sort" : NumberInt(4), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : true, 
            "title" : "投注上限", 
            "sort" : NumberInt(5), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip01", 
            "required" : false, 
            "title" : "筹码1", 
            "sort" : NumberInt(6), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : false, 
            "title" : "筹码2", 
            "sort" : NumberInt(7), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : false, 
            "title" : "筹码3", 
            "sort" : NumberInt(8), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : false, 
            "title" : "筹码4", 
            "sort" : NumberInt(9), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip05", 
            "required" : false, 
            "title" : "筹码5", 
            "sort" : NumberInt(10), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "robotMinAmount", 
            "required" : false, 
            "title" : "机器人初始金币", 
            "sort" : NumberInt(11), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "checkPeriod", 
            "required" : false, 
            "title" : "rtp检测周期", 
            "sort" : NumberInt(12), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "rtpRate", 
            "required" : true, 
            "title" : "预设RTP%", 
            "sort" : NumberInt(13), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }
    ]
}

db.base_game_setting.save(setting);