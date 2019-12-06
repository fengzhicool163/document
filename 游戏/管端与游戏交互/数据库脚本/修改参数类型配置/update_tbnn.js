

var gameInfo = db.base_game_config.findOne({ "_id": 20 });

var roomTypeInfo = {};

for (let i = 0; i < gameInfo.rooms.length; i++) {
    var roomInfo = gameInfo.rooms[i];
    var key = roomInfo.roomId + "";
    roomTypeInfo[key] = roomInfo.roomType;
    switch (roomInfo.roomType) {

        case "NOVICE":
            roomInfo.config.minEntry = 0.6;
            roomInfo.config.minBet = 0.01;
            roomInfo.config.maxBet = -1.0;
            roomInfo.config.robotMinAmount = 0.6;
            break;
        case "ADVANCED":
            roomInfo.config.minEntry = 20;
            roomInfo.config.minBet = 1;
            roomInfo.config.maxBet = -1;
            roomInfo.config.robotMinAmount = 20;
            break;
        case "SUPERIOR":
            roomInfo.config.minEntry = 100;
            roomInfo.config.minBet = 5;
            roomInfo.config.maxBet = -1;
            roomInfo.config.robotMinAmount = 100;
            break;
        case "TUHAO":
            roomInfo.config.minEntry = 400;
            roomInfo.config.minBet = 20;
            roomInfo.config.maxBet = -1;
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
        if (gameInfo.gameId == 20) {
            var roomList = gameInfo.rooms;
            for (let j = 0; j < roomList.length; j++) {
                var roomInfo = roomList[j];
                if (roomInfo.config != undefined && roomInfo.config != null) {
                    var roomId = roomInfo.parentId;
                    print(roomTypeInfo);
                    var roomType = roomTypeInfo[roomId + ""];
                    print(roomType);
                    switch (roomType) {
                        case "NOVICE":
                            roomInfo.config.minEntry = 0.6;
                            roomInfo.config.minBet = 0.01;
                            roomInfo.config.maxBet = -1.0;
                            roomInfo.config.robotMinAmount = 0.6;
                            break;
                        case "ADVANCED":
                            roomInfo.config.minEntry = 20;
                            roomInfo.config.minBet = 1;
                            roomInfo.config.maxBet = -1;
                            roomInfo.config.robotMinAmount = 20;
                            break;
                        case "SUPERIOR":
                            roomInfo.config.minEntry = 100;
                            roomInfo.config.minBet = 5;
                            roomInfo.config.maxBet = -1;
                            roomInfo.config.robotMinAmount = 100;
                            break;
                        case "TUHAO":
                            roomInfo.config.minEntry = 400;
                            roomInfo.config.minBet = 20;
                            roomInfo.config.maxBet = -1;
                            roomInfo.config.robotMinAmount = 400;
                            break;
                    }
                }
            }
        }
    }
    db.brand.save(brand);
}



var setting = {
    "_id": NumberInt(20),
    "gameName": "通比牛牛",
    "gameAlias": "niuniu_tb",
    "adapt": "niuniuAdapt",
    "handler": "niuniuHandler",
    "listener": "niuniuListener",
    "sort": NumberInt(919),
    "params": [
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
            "key": "commissionRate",
            "required": true,
            "title": "抽水",
            "sort": NumberInt(3),
            "type": "DOUBLE",
            "min": NumberInt(0),
            "max": NumberInt(1)
        },
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
            "min": NumberInt(-1),
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
        }
    ]
}

db.base_game_setting.save(setting);