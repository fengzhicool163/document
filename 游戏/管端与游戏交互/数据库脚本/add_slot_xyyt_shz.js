var games = [{
    "_id": NumberInt(53),
    "name": "幸运樱桃",
    "alias": "XYYT",
    "icon": "/assets/ui/game/icon_game_dt_00.png",
    "url": "../s008_xyyt/",
    "jumpUrl": true,
    "gameStyle": "SLOT",
    "state": "NORMAL",
    "sort": NumberInt(863),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[],
	"gamePlatform": "",
	"classify" : NumberInt(2), 
    "classifyAlias" : "XYYT", 
	"enterLimit" : NumberInt(0), 	
    "classifyStatus" : "NORMAL", 
    "classifySort" : NumberInt(2), 
    "classifyIcon" : "https://cdn.pixabay.com/photo/2019/07/29/16/13/bald-eagle-4370916_960_720.jpg", 
	"classifyGameIds" : "", 
    "classifyGames" : [
            ], 
    "classifyOnlineFlag" : true
},
{
    "_id": NumberInt(54),
    "name": "水浒传",
    "alias": "SHZ",
    "icon": "/assets/ui/game/icon_game_08.png",
    "url": "../s009_shz/",
    "jumpUrl": true,
    "gameStyle": "SLOT",
    "state": "NORMAL",
    "sort": NumberInt(855),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[],
	"gamePlatform": "",
	"classify" : NumberInt(2), 
    "classifyAlias" : "SHZ", 
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
db.brand.update({},{$pull: {games: {gameName:"幸运樱桃"} }},{multi:true});
db.base_game_config.remove({"name":"幸运樱桃"},false);

db.brand.update({},{$pull: {games: {gameName:"水浒传"} }},{multi:true});
db.base_game_config.remove({"name":"水浒传"},false);

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