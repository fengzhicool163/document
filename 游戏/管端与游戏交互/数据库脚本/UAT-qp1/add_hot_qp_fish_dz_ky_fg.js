var games = [{
    "_id": NumberInt(197),
    "name": "热门游戏",
    "alias": "rmyx",
    "icon": "/assets/ui/game/icon_game_08.png",
    "url": "../classify_rmyx/",
    "jumpUrl": true,
    "gameStyle": "CARD_GAME",
    "state": "NORMAL",
    "sort": NumberInt(1999),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[],
	"gamePlatform": "",
	"classify" : NumberInt(1), 
    "classifyAlias" : "hotgame", 
    "classifyStatus" : "NORMAL", 
    "classifySort" : NumberInt(1), 
    "classifyIcon" : "https://cdn.pixabay.com/photo/2019/07/29/16/13/bald-eagle-4370916_960_720.jpg", 
	"classifyGameIds" : "10,22,20,30,23,26,28,25,31,60,32,29,40,11,42,24", 
    "classifyGames" : [
            ], 
    "classifyOnlineFlag" : true
},
{
    "_id": NumberInt(195),
    "name": "电子游艺",
    "alias": "dzyx",
    "icon": "/assets/ui/game/icon_game_08.png",
    "url": "../classify_dzyx/",
    "jumpUrl": true,
    "gameStyle": "CARD_GAME",
    "state": "NORMAL",
    "sort": NumberInt(1998),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[],
	"gamePlatform": "",
	"classify" : NumberInt(1), 
    "classifyAlias" : "electgame", 
    "classifyStatus" : "NORMAL", 
    "classifySort" : NumberInt(1), 
    "classifyIcon" : "https://cdn.pixabay.com/photo/2019/07/29/16/13/bald-eagle-4370916_960_720.jpg", 
	"classifyGameIds" : "50,51,60,90,61,52,62,63,33,53,54", 
    "classifyGames" : [
            ], 
    "classifyOnlineFlag" : true
},
{
    "_id": NumberInt(200),
    "name": "捕鱼游戏",
    "alias": "byyx",
    "icon": "/assets/ui/game/icon_game_08.png",
    "url": "../classify_byyx/",
    "jumpUrl": true,
    "gameStyle": "CARD_GAME",
    "state": "NORMAL",
    "sort": NumberInt(1997),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[],
	"gamePlatform": "FG",
	"classify" : NumberInt(1), 
    "classifyAlias" : "fishgame", 
    "classifyStatus" : "NORMAL", 
    "classifySort" : NumberInt(1), 
    "classifyIcon" : "https://cdn.pixabay.com/photo/2019/07/29/16/13/bald-eagle-4370916_960_720.jpg", 
	"classifyGameIds" : "221,222,223,224,225,226,227,90", 
    "classifyGames" : [
            ], 
    "classifyOnlineFlag" : true
},
{
    "_id": NumberInt(198),
    "name": "FG游戏",
    "alias": "fgyx",
    "icon": "/assets/ui/game/icon_game_08.png",
    "url": "../classify_fgyx/",
    "jumpUrl": true,
    "gameStyle": "CARD_GAME",
    "state": "NORMAL",
    "sort": NumberInt(1995),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[],
	"gamePlatform": "FG",
	"classify" : NumberInt(1), 
    "classifyAlias" : "fgGame", 
    "classifyStatus" : "NORMAL", 
    "classifySort" : NumberInt(1), 
    "classifyIcon" : "https://cdn.pixabay.com/photo/2019/07/29/16/13/bald-eagle-4370916_960_720.jpg", 
	"classifyGameIds" : "231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,250,251", 
    "classifyGames" : [
            ], 
    "classifyOnlineFlag" : true
}
,{
    "_id": NumberInt(199),
    "name": "开元棋牌",
    "alias": "kyqp",
    "icon": "/assets/ui/game/icon_game_dt_00.png",
    "url": "../classify_kyqp/",
    "jumpUrl": true,
    "gameStyle": "CARD_GAME",
    "state": "NORMAL",
    "sort": NumberInt(1996),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[],
	"gamePlatform": "KY",
	"classify" : NumberInt(1), 
    "classifyAlias" : "kyqp", 
    "classifyStatus" : "NORMAL", 
    "classifySort" : NumberInt(1), 
    "classifyIcon" : "https://cdn.pixabay.com/photo/2019/07/29/16/13/bald-eagle-4370916_960_720.jpg",
	"classifyGameIds" : "201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218", 
    "classifyGames" : [
            ], 
    "classifyOnlineFlag" : true
}
];

// 删除基本表中的游戏数据
function removeOldData(oldGameName){
	db.brand.update({},{$pull: {"games": {"gameName":oldGameName} }},{multi:true});
	db.base_game_config.remove({"name":oldGameName},false);
}

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
		brandGameInfo.classify = NumberInt(gameInfo.classify);
		brandGameInfo.classifyStatus = gameInfo.classifyStatus;
		brandGameInfo.classifyGameIds = gameInfo.classifyGameIds;
		brandGameInfo.gamePlatform = gameInfo.gamePlatform;
		brandGameInfo.classifyOnlineFlag = gameInfo.classifyOnlineFlag;
		brandGameInfo.classifySort = NumberInt(gameInfo.classifySort);
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