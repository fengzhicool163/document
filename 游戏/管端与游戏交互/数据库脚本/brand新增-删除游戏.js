db.brand.find({brand: "bbl", "games.gameId": 34});
db.brand.update({brand: "bbl"},{$pull: {"games": {"gameId":34}}});
db.brand.update({brand: "bbl"},{$push: {"games":{
            "gameId" : NumberInt(43), 
            "gameName" : "血战麻将", 
            "state" : "NORMAL", 
            "sort" : NumberInt(1000), 
            "updateTime" : ISODate("2019-11-02T08:31:11.746+0000"), 
            "createTime" : ISODate("2019-11-02T08:31:11.746+0000"), 
            "rooms" : [
                {
                    "roomId" : NumberInt(4510), 
                    "parentId" : NumberInt(13122), 
                    "state" : "NORMAL", 
                    "sort" : NumberInt(0), 
                    "createTime" : ISODate("2019-11-02T08:31:11.747+0000"), 
                    "updateTime" : ISODate("2019-11-04T02:11:52.006+0000")
                }, 
                {
                    "roomId" : NumberInt(4511), 
                    "parentId" : NumberInt(13123), 
                    "state" : "NORMAL", 
                    "sort" : NumberInt(0), 
                    "createTime" : ISODate("2019-11-02T08:31:11.748+0000"), 
                    "updateTime" : ISODate("2019-11-02T08:31:11.748+0000")
                }, 
                {
                    "roomId" : NumberInt(4512), 
                    "parentId" : NumberInt(13124), 
                    "state" : "NORMAL", 
                    "sort" : NumberInt(0), 
                    "createTime" : ISODate("2019-11-02T08:31:11.749+0000"), 
                    "updateTime" : ISODate("2019-11-04T02:12:24.893+0000")
                }, 
                {
                    "roomId" : NumberInt(4513), 
                    "parentId" : NumberInt(13125), 
                    "state" : "NORMAL", 
                    "sort" : NumberInt(0), 
                    "createTime" : ISODate("2019-11-02T08:31:11.750+0000"), 
                    "updateTime" : ISODate("2019-11-02T08:31:11.750+0000")
                }
            ], 
            "classify" : NumberInt(2), 
            "classifyStatus" : "NORMAL", 
            "classifyGameIds" : "", 
            "classifyOnlineFlag" : true, 
            "gamePlatform" : "", 
            "enterLimit" : NumberInt(0)
        }}});


db.base_game_config.deleteOne({_id: 34});
db.base_game_config.insert({ 
    "_id" : NumberInt(43), 
    "name" : "血战麻将", 
    "alias" : "xzmj", 
    "icon" : "/assets/ui/game/icon_game_bj_00.png", 
    "url" : "../xuezhanmahjong/", 
    "jumpUrl" : true, 
    "gameStyle" : "SH", 
    "gameType" : "ROUND", 
    "state" : "NORMAL", 
    "sort" : NumberInt(1000), 
    "robotService" : true, 
    "betAnalysis" : false, 
    "retryConnection" : true, 
    "updateTime" : ISODate("2019-09-10T07:16:53.171+0000"), 
    "createTime" : ISODate("2019-09-10T07:16:53.171+0000"), 
    "rooms" : [
        {
            "roomId" : NumberInt(13122), 
            "name" : "新手房", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png", 
            "roomType" : "NOVICE", 
            "state" : "NORMAL", 
            "sort" : NumberInt(0), 
            "config" : {
                "minEntry" : 0.01, 
                "serviceCharge" : 0.0, 
                "minBet" : 1, 
                "maxBet" : 100, 
                "commissionRate" : 0.03, 
                "robotMinAmount" : 20.0, 
                "checkPeriod" : 1.0, 
                "rtpRate" : 0.96
            }
        }, 
        {
            "roomId" : NumberInt(13123), 
            "name" : "进阶房", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png", 
            "roomType" : "ADVANCED", 
            "state" : "NORMAL", 
            "sort" : NumberInt(0), 
            "config" : {
                "minEntry" : 0.1, 
                "serviceCharge" : NumberInt(0), 
                "minBet" : 10, 
                "maxBet" : NumberInt(1000), 
                "commissionRate" : 0.03, 
                "robotMinAmount" : 100.0, 
                "checkPeriod" : NumberInt(1), 
                "rtpRate" : "0.95"
            }
        }, 
        {
            "roomId" : NumberInt(13124), 
            "name" : "高手房", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png", 
            "roomType" : "SUPERIOR", 
            "state" : "NORMAL", 
            "sort" : NumberInt(0), 
            "config" : {
                "minEntry" : 1, 
                "serviceCharge" : 0.0, 
                "minBet" : 100.0, 
                "maxBet" : -1.0, 
                "commissionRate" : 0.03, 
                "robotMinAmount" : 500.0, 
                "checkPeriod" : 1.0, 
                "rtpRate" : 0.95
            }
        }, 
        {
            "roomId" : NumberInt(13125), 
            "name" : "土豪房", 
            "icon" : "/assets/ui/room/img_fangjian_fang_03.png", 
            "roomType" : "TUHAO", 
            "state" : "NORMAL", 
            "sort" : NumberInt(0), 
            "config" : {
                "minEntry" : 5, 
                "serviceCharge" : NumberInt(0), 
                "minBet" : 500.0, 
                "maxBet" : NumberInt(-1), 
                "commissionRate" : 0.03, 
                "robotMinAmount" : 2000.0, 
                "checkPeriod" : NumberInt(1), 
                "rtpRate" : "0.95"
            }
        }
    ], 
    "gamePlatform" : "", 
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
});

db.base_game_setting.find({_id: 34})
db.base_game_setting.deleteOne({_id: 34});
db.base_game_setting.insert({ 
    "_id" : NumberInt(43), 
    "gameName" : "血战麻将", 
    "gameAlias" : "xzmj", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort" : NumberInt(1000), 
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
            "key" : "minBet", 
            "required" : true, 
            "title" : "准入下限", 
            "sort" : NumberInt(1), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : true, 
            "title" : "准入上限", 
            "sort" : NumberInt(2), 
            "type" : "DOUBLE", 
            "min" : NumberInt(-1), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minEntry", 
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
            "type" : "DOUBLE", 
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
        }, 
        {
            "key" : "checkPeriod", 
            "required" : false, 
            "title" : "rtp检测周期", 
            "sort" : NumberInt(11), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "rtpRate", 
            "required" : true, 
            "title" : "预设RTP%", 
            "sort" : NumberInt(12), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }
    ]
})

