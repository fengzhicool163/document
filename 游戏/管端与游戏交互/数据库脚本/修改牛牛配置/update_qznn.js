

var gameInfo = db.base_game_config.findOne({ "_id": 22 });

var roomTypeInfo ={};

for (let i = 0; i < gameInfo.rooms.length; i++) {
    var roomInfo = gameInfo.rooms[i];
    roomTypeInfo.roomId= roomInfo.roomType;
    switch (roomInfo.roomType) {
        case "NOVICE":
            roomInfo.config.minEntry = 0.6;
            roomInfo.config.minBet = 0.01;
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
        if (gameInfo.gameId == 22) {
            var roomList = gameInfo.rooms;
            for (let j = 0; j < roomList.length; j++) {
                var roomInfo = roomList[j];
                if (roomInfo.config != undefined && roomInfo.config != null) {
                    var roomId = roomInfo.parentId;
                    print(roomTypeInfo);
                    var roomType = roomTypeInfo.roomId;
                    print(roomType);
                    switch (roomType) {
                        case "NOVICE":
                            roomInfo.config.minEntry = 0.6;
                            roomInfo.config.minBet = 0.01;
                            break;
                    }
                }
            }
        }
    }
 db.brand.save(brand);
}


var base_game_setting = { 
    "_id" : NumberInt(22), 
    "gameName" : "抢庄牛牛", 
    "gameAlias" : "niuniu_qz", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort" : NumberInt(979), 
    "params" : [
        {
            "key" : "serviceCharge", 
            "title" : "服务费", 
            "sort" : NumberInt(2), 
            "required" : true, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "title" : "抽水", 
            "sort" : NumberInt(3), 
            "required" : true, 
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
            "type" : "DOUBLE", 
            "title" : "投注下限", 
            "sort" : NumberInt(4), 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : true, 
            "title" : "投注上限", 
            "sort" : NumberInt(5), 
            "type" : "INT", 
            "min" : NumberInt(-1), 
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

db.base_game_setting.save(base_game_setting);