var games = [{
    "_id": NumberInt(196),
    "name": "彩票游戏",
    "alias": "cpyx",
    "icon": "/assets/ui/game/icon_game_08.png",
    "url": "/player/mobile/startGame",
    "jumpUrl": true,
    "gameStyle": "CARD_GAME",
    "state": "TESTING",
    "sort": NumberInt(1993),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[],
	"gamePlatform": "CP",
	"classify" : NumberInt(1), 
    "classifyAlias" : "ltGame", 
	"classifyThirdGameId": "cpyx",
    "classifyStatus" : "NORMAL", 
    "classifySort" : NumberInt(1), 
    "classifyIcon" : "https://cdn.pixabay.com/photo/2019/07/29/16/13/bald-eagle-4370916_960_720.jpg", 
	"classifyGameIds" : "", 
	"enterLimit" : NumberInt(0), 	
    "classifyGames" : [
            ], 
    "classifyOnlineFlag" : true
	}
];

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
        brandGameInfo.state = "TESTING";
        brandGameInfo.sort = NumberInt(gameInfo.sort);
		brandGameInfo.classify = NumberInt(gameInfo.classify);
		brandGameInfo.classifyStatus = gameInfo.classifyStatus;
		brandGameInfo.classifyGameIds = gameInfo.classifyGameIds;
		brandGameInfo.gamePlatform = gameInfo.gamePlatform;
		brandGameInfo.classifyOnlineFlag = gameInfo.classifyOnlineFlag;
		brandGameInfo.classifySort = NumberInt(gameInfo.classifySort);
		brandGameInfo.enterLimit = NumberInt(gameInfo.enterLimit);
        brandGameInfo.createTime = new Date();
        brandGameInfo.updateTime = new Date();
        brandGameInfo.rooms = [];
        print("插入对应的游戏数据");
        printjson(brandGameInfo);
        db.brand.update({ "brand": brand }, { $addToSet: { "games": brandGameInfo } });
    }
}

db.base_game_config.insert(games);

games.forEach(game => {
    initBrandGameInfo(game._id);
});