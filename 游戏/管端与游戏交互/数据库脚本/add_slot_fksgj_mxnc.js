var games = [{
    "_id": NumberInt(55),
    "name": "疯狂水果机",
    "alias": "FKSGJ",
    "icon": "/assets/ui/game/icon_game_dt_10.png",
    "url": "../s010_hlsgj/",
    "jumpUrl": true,
    "gameStyle": "SLOT",
    "state": "NORMAL",
    "sort": NumberInt(864),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[],
	"gamePlatform": "",
	"classify" : NumberInt(2), 
    "classifyAlias" : "FKSGJ", 
	"enterLimit" : NumberInt(0), 	
    "classifyStatus" : "NORMAL", 
    "classifySort" : NumberInt(2), 
    "classifyIcon" : "https://cdn.pixabay.com/photo/2019/07/29/16/13/bald-eagle-4370916_960_720.jpg", 
	"classifyGameIds" : "", 
    "classifyGames" : [
            ], 
    "classifyOnlineFlag" : true
},{
    "_id": NumberInt(64),
    "name": "梦想农场",
    "alias": "MXNC",
    "icon": "/assets/ui/game/icon_game_dt_01.png",
    "url": "../s011_mxnc/",
    "jumpUrl": true,
    "gameStyle": "SLOT",
    "state": "NORMAL",
    "sort": NumberInt(865),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[],
	"gamePlatform": "",
	"classify" : NumberInt(2), 
    "classifyAlias" : "MXNC", 
	"enterLimit" : NumberInt(0), 	
    "classifyStatus" : "NORMAL", 
    "classifySort" : NumberInt(2), 
    "classifyIcon" : "https://cdn.pixabay.com/photo/2019/07/29/16/13/bald-eagle-4370916_960_720.jpg", 
	"classifyGameIds" : "", 
    "classifyGames" : [
            ], 
    "classifyOnlineFlag" : true
}
];


// 删除基本表中的游戏数据
db.brand.update({},{$pull: {games: {gameName:"疯狂水果机"} }},{multi:true});
db.base_game_config.remove({"name":"疯狂水果机"},false);

db.brand.update({},{$pull: {games: {gameName:"梦想农场"} }},{multi:true});
db.base_game_config.remove({"name":"梦想农场"},false);

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
		brandGameInfo.enterLimit = NumberInt(gameInfo.enterLimit);
		brandGameInfo.classifyStatus = gameInfo.classifyStatus;
		brandGameInfo.classifyGameIds = gameInfo.classifyGameIds;
		brandGameInfo.gamePlatform = gameInfo.gamePlatform;
		brandGameInfo.classifyOnlineFlag = gameInfo.classifyOnlineFlag;
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