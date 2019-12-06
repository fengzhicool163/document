var game = { 
    "_id" : 31, 
    "name" : "龙虎斗", 
    "alias" : "lhd", 
    "icon" : "/assets/ui/game/icon_game_dt_00.png", 
    "url" : "../lhd/", 
    "jumpUrl" : true, 
    "gameStyle" : "CARD_GAME", 
    "gameType" : "STAKE", 
    "state" : "NORMAL", 
    "sort" : 56.0, 
    "retryConnection" : false, 
    "createTime" : ISODate("2019-06-27T10:26:08.312+0000"), 
    "updateTime" : ISODate("2019-06-27T10:26:08.312+0000"), 
    "rooms" : [
        {
            "roomId" : 69.0, 
            "name" : "新手房", 
            "state" : "NORMAL", 
            "sort" : 0.0, 
            "roomType" : "NOVICE", 
            "createTime" : ISODate("2019-06-27T10:26:08.312+0000"), 
            "updateTime" : ISODate("2019-06-27T10:26:08.312+0000"), 
            "icon" : "/assets/ui/game/icon_game_dt_00.png", 
            "config" : {
                "minEntry" : 20.0, 
                "maxMembers" : 200.0, 
                "minBet" : 2.0, 
                "new_minBet" : 2.0, 
                "maxBet" : 500.0, 
                "chip01" : 2.0, 
                "chip02" : 10.0, 
                "chip03" : 30.0, 
                "chip04" : 50.0, 
                "minJackpot" : 0.0, 
                "maxJackpot" : 0.0, 
                "commissionRate" : 0.0, 
                "cardMembers" : "300-350", 
                "colorLimit" : 30.0, 
                "callsGames" : 7.0, 
                "outsGames" : 10.0, 
                "readyTime" : 3.0, 
                "dealTime" : 3.0, 
                "betsTime" : 15.0, 
                "compareTime" : 4.0, 
                "prizeTime" : 4.0, 
                "checkPeriod" : 1.0, 
                "rtpRate" : 0.95
            }, 
            "tables" : [
                {
                    "tableName" : "新手房A桌", 
                    "state" : "NORMAL", 
                    "tableId" : 201.0
                }, 
                {
                    "tableName" : "新手房B桌", 
                    "state" : "NORMAL", 
                    "tableId" : 202.0
                }, 
                {
                    "tableName" : "新手房C桌", 
                    "state" : "NORMAL", 
                    "tableId" : 203.0
                }
            ]
        }, 
        {
            "roomId" : 70.0, 
            "name" : "进阶房", 
            "state" : "NORMAL", 
            "sort" : 0.0, 
            "roomType" : "ADVANCED", 
            "createTime" : ISODate("2019-06-27T10:26:08.312+0000"), 
            "updateTime" : ISODate("2019-06-27T10:26:08.312+0000"), 
            "icon" : "/assets/ui/game/icon_game_dt_00.png", 
            "tables" : [
                {
                    "tableName" : "进阶房A桌", 
                    "state" : "NORMAL", 
                    "tableId" : 204.0
                }, 
                {
                    "tableName" : "进阶房B桌", 
                    "state" : "NORMAL", 
                    "tableId" : 205.0
                }, 
                {
                    "tableName" : "进阶房C桌", 
                    "state" : "NORMAL", 
                    "tableId" : 206.0
                }
            ], 
            "config" : {
                "minEntry" : 100.0, 
                "maxMembers" : 200.0, 
                "minBet" : 10.0, 
                "new_minBet" : 10.0, 
                "maxBet" : 2500.0, 
                "chip01" : 10.0, 
                "chip02" : 30.0, 
                "chip03" : 50.0, 
                "chip04" : 100.0, 
                "minJackpot" : 0.0, 
                "maxJackpot" : 0.0, 
                "commissionRate" : 0.0, 
                "cardMembers" : "300-350", 
                "colorLimit" : 30.0, 
                "callsGames" : 7.0, 
                "outsGames" : 10.0, 
                "readyTime" : 3.0, 
                "dealTime" : 3.0, 
                "betsTime" : 15.0, 
                "compareTime" : 4.0, 
                "prizeTime" : 4.0, 
                "checkPeriod" : 1.0, 
                "rtpRate" : "0.95"
            }
        }, 
        {
            "roomId" : 71.0, 
            "name" : "高手房", 
            "state" : "NORMAL", 
            "sort" : 0.0, 
            "roomType" : "SUPERIOR", 
            "createTime" : ISODate("2019-06-27T10:26:08.312+0000"), 
            "updateTime" : ISODate("2019-06-27T10:26:08.312+0000"), 
            "icon" : "/assets/ui/game/icon_game_dt_00.png", 
            "tables" : [
                {
                    "tableName" : "高手房A桌", 
                    "state" : "NORMAL", 
                    "tableId" : 207.0
                }, 
                {
                    "tableName" : "高手房B桌", 
                    "state" : "NORMAL", 
                    "tableId" : 208.0
                }, 
                {
                    "tableName" : "高手房C桌", 
                    "state" : "NORMAL", 
                    "tableId" : 209.0
                }
            ], 
            "config" : {
                "minEntry" : 400.0, 
                "maxMembers" : 200.0, 
                "minBet" : 50.0, 
                "new_minBet" : 50.0, 
                "maxBet" : 5000.0, 
                "chip01" : 30.0, 
                "chip02" : 50.0, 
                "chip03" : 100.0, 
                "chip04" : 200.0, 
                "minJackpot" : 0.0, 
                "maxJackpot" : 0.0, 
                "commissionRate" : 0.0, 
                "cardMembers" : "300-350", 
                "colorLimit" : 30.0, 
                "callsGames" : 7.0, 
                "outsGames" : 10.0, 
                "readyTime" : 3.0, 
                "dealTime" : 3.0, 
                "betsTime" : 15.0, 
                "compareTime" : 4.0, 
                "prizeTime" : 4.0, 
                "checkPeriod" : 1.0, 
                "rtpRate" : "0.95"
            }
        }, 
        {
            "roomId" : 72.0, 
            "name" : "土豪房", 
            "state" : "NORMAL", 
            "sort" : 0.0, 
            "roomType" : "TUHAO", 
            "createTime" : ISODate("2019-06-27T10:26:08.312+0000"), 
            "updateTime" : ISODate("2019-06-27T10:26:08.312+0000"), 
            "icon" : "/assets/ui/game/icon_game_dt_00.png", 
            "tables" : [
                {
                    "tableName" : "土豪房A桌", 
                    "state" : "NORMAL", 
                    "tableId" : 210.0
                }, 
                {
                    "tableName" : "土豪房B桌", 
                    "state" : "NORMAL", 
                    "tableId" : 211.0
                }, 
                {
                    "tableName" : "土豪房C桌", 
                    "state" : "NORMAL", 
                    "tableId" : 212.0
                }
            ], 
            "config" : {
                "minEntry" : 1000.0, 
                "maxMembers" : 200.0, 
                "minBet" : 100.0, 
                "new_minBet" : 100.0, 
                "maxBet" : 12000.0, 
                "chip01" : 50.0, 
                "chip02" : 100.0, 
                "chip03" : 200.0, 
                "chip04" : 400.0, 
                "minJackpot" : 0.0, 
                "maxJackpot" : 0.0, 
                "commissionRate" : 0.0, 
                "cardMembers" : "300-350", 
                "colorLimit" : 30.0, 
                "callsGames" : 7.0, 
                "outsGames" : 10.0, 
                "readyTime" : 3.0, 
                "dealTime" : 3.0, 
                "betsTime" : 15.0, 
                "compareTime" : 4.0, 
                "prizeTime" : 4.0, 
                "checkPeriod" : 1.0, 
                "rtpRate" : "0.95"
            }
        }
    ]
}