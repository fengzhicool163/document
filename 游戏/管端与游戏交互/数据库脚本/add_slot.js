var games = [{
    "_id": NumberInt(61),
    "name": "糖果派对",
    "alias": "tgpd",
    "icon": "/assets/ui/game/icon_game_dt_00.png",
    "url": "../s004_tgpd/",
    "jumpUrl": true,
    "gameStyle": "SLOT",
    "state": "NORMAL",
    "sort": NumberInt(860),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[]
},
{
    "_id": NumberInt(52),
    "name": "猫狗大战",
    "alias": "mgdz",
    "icon": "/assets/ui/game/icon_game_dt_00.png",
    "url": "../s005_mgdz/",
    "jumpUrl": true,
    "gameStyle": "SLOT",
    "state": "NORMAL",
    "sort": NumberInt(852),
    "retryConnection": false,
    "createTime": new Date(),
    "updateTime": new Date(),
    "rooms":[]
}
];


// 删除基本表中的游戏数据
db.brand.update({},{$pull: {games: {gameName:"猫狗大战"} }},{multi:true});
db.base_game_config.remove({"name":"猫狗大战"},false);

db.brand.update({},{$pull: {games: {gameName:"糖果派对"} }},{multi:true});
db.base_game_config.remove({"name":"糖果派对"},false);

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

