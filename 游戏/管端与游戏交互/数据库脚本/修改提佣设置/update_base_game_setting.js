var gameParamsSettingList = [
    { 
    "_id" : NumberInt(22), 
    "gameName" : "抢庄牛牛", 
    "gameAlias" : "niuniu_qz", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort":NumberInt(979),
    "params" : [
        {
            "key" : "serviceCharge", 
            "title":"服务费",
            "sort":NumberInt(2),
            "required" : true, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate",
            "title":"抽水",
            "sort":NumberInt(3), 
            "required" : true, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "type" : "INT", 
            "title":"投注下限",
            "sort":NumberInt(4),
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : false, 
            "title":"投注上限",
            "sort":NumberInt(5),
            "type" : "INT", 
            "min" : NumberInt(-1), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "robotMinAmount", 
            "required" : false, 
            "title":"机器人初始金币",
            "sort":NumberInt(6),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }
    ]
},
{ 
    "_id" : NumberInt(30), 
    "gameName" : "红黑大战", 
    "gameAlias" : "hhdz", 
    "adapt" : "defaultAdapt", 
    "handler" : "stakeHandler", 
    "listener" : "defaultListener", 
    "sort":NumberInt(959),
    "params" : [
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : true, 
            "title":"投注上限",
            "sort":NumberInt(2),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "title":"抽水",
            "sort":NumberInt(3),
            "required" : true, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minJackpot", 
            "required" : true, 
            "title":"奖池下限",
            "sort":NumberInt(4),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxJackpot", 
            "required" : true,
            "title":"奖池上限",
            "sort":NumberInt(5), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip01", 
            "required" : false, 
            "title":"筹码1",
            "sort":NumberInt(6), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : false, 
            "title":"筹码2",
            "sort":NumberInt(7), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : false, 
            "title":"筹码3",
            "sort":NumberInt(8), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : false,
            "title":"筹码4",
            "sort":NumberInt(9),  
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "redBlackRate", 
            "required" : false, 
            "title":"红黑赔率",
            "sort":NumberInt(10), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "bzRate", 
            "required" : false, 
            "title":"豹子赔率",
            "sort":NumberInt(11), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "sjRate", 
            "required" : false, 
            "title":"顺金赔率",
            "sort":NumberInt(12), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "jhRate", 
            "required" : false, 
            "title":"金花赔率",
            "sort":NumberInt(13), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "szRate", 
            "required" : false, 
            "title":"顺子赔率",
            "sort":NumberInt(14), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "dzRate", 
            "required" : false, 
            "title":"对子赔率",
            "sort":NumberInt(15), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "checkPeriod", 
            "required" : false, 
            "title":"rtp检测周期",
            "sort":NumberInt(16), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "rtpRate", 
            "required" : true, 
            "title":"预设RTP%",
            "sort":NumberInt(17), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }
    ]
},
{ 
    "_id" : NumberInt(20), 
    "gameName" : "通比牛牛", 
    "gameAlias" : "niuniu_tb", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort":NumberInt(919),
    "params" : [
        {
            "key" : "serviceCharge", 
            "required" : true, 
            "title":"服务费",
            "sort":NumberInt(2), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "required" : true, 
            "title":"抽水",
            "sort":NumberInt(3), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title":"投注下限",
            "sort":NumberInt(4), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : true, 
            "title":"投注上限",
            "sort":NumberInt(5), 
            "type" : "INT", 
            "min" : NumberInt(-1), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "robotMinAmount", 
            "required" : false, 
            "title":"机器人初始金币",
            "sort":NumberInt(6), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }
    ]
},
{ 
    "_id" : NumberInt(31), 
    "gameName" : "龙虎斗", 
    "gameAlias" : "lhd", 
    "adapt" : "defaultAdapt", 
    "handler" : "stakeHandler", 
    "listener" : "defaultListener", 
    "sort":NumberInt(849),
    "params" : [
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxMembers", 
            "required" : false, 
            "title":"最大人数",
            "sort":NumberInt(2),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "new_minBet", 
            "required" : false, 
            "title":"最低投注",
            "sort":NumberInt(2),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : false, 
            "title":"底注",
            "sort":NumberInt(3),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : false, 
            "title":"最大投注",
            "sort":NumberInt(4),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "required" : true,
            "title":"抽水",
            "sort":NumberInt(5), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minJackpot", 
            "required" : true,
            "title":"奖池下限",
            "sort":NumberInt(6), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxJackpot", 
            "required" : true, 
            "title":"奖池上限",
            "sort":NumberInt(7), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip01", 
            "required" : false, 
            "title":"筹码1",
            "sort":NumberInt(8), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : false, 
            "title":"筹码2",
            "sort":NumberInt(9),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : false, 
            "title":"筹码3",
            "sort":NumberInt(10),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : false, 
            "title":"筹码4",
            "sort":NumberInt(11),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "cardMembers", 
            "required" : false, 
            "title":"使用牌数",
            "sort":NumberInt(12),
            "type" : "STRING", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "colorLimit", 
            "required" : false, 
            "title":"允许下注花色局数",
            "sort":NumberInt(13),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "callsGames", 
            "required" : false, 
            "title":"未操作提醒局数",
            "sort":NumberInt(14),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "outsGames", 
            "required" : false, 
            "title":"未操作踢出局数",
            "sort":NumberInt(15),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "readyTime", 
            "required" : false,
            "title":"准备阶段时间(S)",
            "sort":NumberInt(16), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "dealTime", 
            "required" : false, 
            "title":"发牌阶段时间(S)",
            "sort":NumberInt(17),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "betsTime", 
            "required" : false, 
            "title":"下注阶段时间(S)",
            "sort":NumberInt(18),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "compareTime", 
            "required" : false, 
            "title":"比牌阶段时间(S)",
            "sort":NumberInt(19),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "prizeTime", 
            "required" : false, 
            "title":"派奖阶段时间(S)",
            "sort":NumberInt(20),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "checkPeriod", 
            "required" : false, 
            "title":"rtp检测周期",
            "sort":NumberInt(21),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "rtpRate", 
            "required" : false, 
            "title":"预设RTP%",
            "sort":NumberInt(22),
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }
    ]
},
{ 
    "_id" : NumberInt(23), 
    "gameName" : "21点", 
    "gameAlias" : "tto", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort":NumberInt(939),
    "mergeHeaders":[
        {
            "key":"Chips",
            "title":"筹码面值",
            "paramKeys":["chip01","chip02","chip03","chip04"]
        }
    ],
    "params" : [
        {
            "key" : "serviceCharge", 
            "required" : true, 
            "title":"服务费",
            "sort":NumberInt(2),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "required" : true, 
            "title":"抽水",
            "sort":NumberInt(3),
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title":"投注下限",
            "sort":NumberInt(4),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : true, 
            "title":"投注上限",
            "sort":NumberInt(5),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip01", 
            "required" : false, 
            "title":"筹码1",
            "sort":NumberInt(6),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : false, 
            "title":"筹码2",
            "sort":NumberInt(7),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : false,
            "title":"筹码3",
            "sort":NumberInt(8), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : false,
            "title":"筹码4",
            "sort":NumberInt(9), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip05", 
            "required" : false, 
            "title":"筹码5",
            "sort":NumberInt(10),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "robotMinAmount", 
            "required" : false, 
            "title":"机器人初始金币",
            "sort":NumberInt(11),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "checkPeriod", 
            "required" : false, 
            "title":"rtp检测周期",
            "sort":NumberInt(12),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "rtpRate", 
            "required" : false, 
            "title":"预设RTP%",
            "sort":NumberInt(13),
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }
    ]
},
{ 
    "_id" : NumberInt(26), 
    "gameName" : "欢乐红包", 
    "gameAlias" : "hlhb", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort":NumberInt(839),
    "params" : [
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title":"底注",
            "sort":NumberInt(2),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "required" : true, 
            "title":"抽水",
            "sort":NumberInt(4),
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "serviceCharge", 
            "required" : true,
            "title":"服务费",
            "sort":NumberInt(3), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }
    ]
},
{ 
    "_id" : NumberInt(21), 
    "gameName" : "押注牛牛", 
    "gameAlias" : "niuniu_yz", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort":NumberInt(759),
    "mergeHeaders":[
        {
            "key":"Chips",
            "title":"筹码面值",
            "paramKeys":["chip01","chip02","chip03","chip04"]
        }
    ],
    "params" : [
        {
            "key" : "serviceCharge", 
            "required" : true, 
            "title":"服务费",
            "sort":NumberInt(2), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "required" : true,
            "title":"抽水",
            "sort":NumberInt(3),  
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title":"投注下限",
            "sort":NumberInt(4), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : true, 
            "title":"投注上限",
            "sort":NumberInt(5),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip01", 
            "required" : false, 
            "title":"筹码1",
            "sort":NumberInt(6),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : false, 
            "title":"筹码2",
            "sort":NumberInt(7),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : false,
            "title":"筹码3",
            "sort":NumberInt(8), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : false,
            "title":"筹码4",
            "sort":NumberInt(9), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "checkPeriod", 
            "required" : false, 
            "title":"rtp检测周期",
            "sort":NumberInt(10),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "rtpRate", 
            "required" : false, 
            "title":"预设RTP%",
            "sort":NumberInt(11),
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "robotMinAmount", 
            "required" : false, 
            "title":"机器人初始金币",
            "sort":NumberInt(12),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }
    ]
},
{ 
    "_id" : NumberInt(25), 
    "gameName" : "加勒比梭哈", 
    "gameAlias" : "jlbsh", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort":NumberInt(819),
    "mergeHeaders":[
        {
            "key":"Chips",
            "title":"筹码面值",
            "paramKeys":["chip01","chip02","chip03","chip04"]
        }
    ],
    "params" : [
        {
            "key" : "commissionRate", 
            "required" : true, 
            "title":"抽水",
            "sort":NumberInt(3),
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : true, 
            "title":"投注上限",
            "sort":NumberInt(5),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title":"投注下限",
            "sort":NumberInt(4),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "serviceCharge", 
            "required" : true,
            "title":"服务费",
            "sort":NumberInt(2), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip01", 
            "required" : true,
            "title":"筹码1",
            "sort":NumberInt(8), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : true, 
            "title":"筹码2",
            "sort":NumberInt(9), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : true,
            "title":"筹码3",
            "sort":NumberInt(10),  
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : true,
            "title":"筹码4",
            "sort":NumberInt(11),  
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip05", 
            "required" : true, 
            "title":"筹码5",
            "sort":NumberInt(12), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minJackpot", 
            "required" : true, 
            "title":"奖池下限",
            "sort":NumberInt(6),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxJackpot", 
            "required" : true, 
            "title":"奖池上限",
            "sort":NumberInt(7),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "royalflush", 
            "required" : false, 
            "title":"royalflush",
            "sort":NumberInt(13), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "straightFlush", 
            "required" : false, 
            "title":"straightFlush",
            "sort":NumberInt(14),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "fourKind", 
            "required" : false, 
            "title":"fourKind",
            "sort":NumberInt(15),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "fullHouse", 
            "required" : false, 
            "title":"fullHouse",
            "sort":NumberInt(16),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "flush", 
            "required" : false, 
            "title":"flush",
            "sort":NumberInt(17),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "robotMinAmount", 
            "required" : false, 
            "title":"机器人初始金币",
            "sort":NumberInt(18),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "checkPeriod", 
            "required" : false, 
            "title":"rtp检测周期",
            "sort":NumberInt(19),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "rtpRate", 
            "required" : true,
            "title":"预设RTP%",
            "sort":NumberInt(20), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }
    ]
},
{ 
    "_id" : NumberInt(24), 
    "gameName" : "斗地主", 
    "gameAlias" : "ddz", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort":NumberInt(929),
    "params" : [
        {
            "key" : "commissionRate", 
            "title":"抽水",
            "sort":NumberInt(5), 
            "required" : true, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入下限",
            "sort":NumberInt(1),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxEntry", 
            "required" : true, 
            "title":"准入上限",
            "sort":NumberInt(2),
            "type" : "INT", 
            "min" : NumberInt(-1), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title":"底注",
            "sort":NumberInt(3),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "serviceCharge", 
            "required" : true, 
            "title":"服务费",
            "sort":NumberInt(4),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "robotMinAmount", 
            "required" : false, 
            "title":"机器人初始金币",
            "sort":NumberInt(6),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }
    ]
},
{ 
    "_id" : NumberInt(28), 
    "gameName" : "幸运五张", 
    "gameAlias" : "xywz", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort":NumberInt(799),
    "mergeHeaders":[
        {
            "key":"Chips",
            "title":"筹码面值",
            "paramKeys":["chip01","chip02","chip03","chip04"]
        }
    ],  
    "params" : [
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title":"投注下限",
            "sort":NumberInt(4),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : true,
            "title":"投注下限",
            "sort":NumberInt(5), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "required" : true,
            "title":"抽水",
            "sort":NumberInt(3), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "chip01", 
            "required" : true,
            "title":"筹码1",
            "sort":NumberInt(6), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : true,
            "title":"筹码2",
            "sort":NumberInt(7), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : true,
            "title":"筹码3",
            "sort":NumberInt(8), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : true,
            "title":"筹码4",
            "sort":NumberInt(9),  
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "serviceCharge", 
            "required" : true,
            "title":"服务费",
            "sort":NumberInt(2), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "winningStreak", 
            "required" : false, 
            "title":"押大小连胜限次",
            "sort":NumberInt(10), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "checkPeriod", 
            "required" : false, 
            "title":"rtp检测周期",
            "sort":NumberInt(11), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "rtpRate", 
            "required" : true, 
            "title":"预设RTP%",
            "sort":NumberInt(12), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }
    ]
},
{ 
    "_id" : NumberInt(40), 
    "gameName" : "二八杠", 
    "gameAlias" : "erbg", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener",
    "sort":NumberInt(779), 
    "params" : [
        {
            "key" : "minEntry", 
            "required" : false, 
            "title":"准入",
            "sort":NumberInt(1), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title":"底注",
            "sort":NumberInt(2), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "title":"抽水",
            "sort":NumberInt(4), 
            "required" : true, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "serviceCharge", 
            "required" : true, 
            "title":"服务费",
            "sort":NumberInt(3), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "robotMinAmount", 
            "required" : false, 
            "title":"机器人初始金币",
            "sort":NumberInt(999), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip01", 
            "required" : false, 
            "title":"筹码1",
            "sort":NumberInt(5), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : false, 
            "title":"筹码2",
            "sort":NumberInt(6), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : false, 
            "title":"筹码3",
            "sort":NumberInt(7), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : false, 
            "title":"筹码4",
            "sort":NumberInt(8), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip05", 
            "required" : false, 
            "title":"筹码5",
            "sort":NumberInt(9), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip06", 
            "required" : false, 
            "title":"筹码6",
            "sort":NumberInt(10), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip07", 
            "required" : false, 
            "title":"筹码7",
            "sort":NumberInt(11),  
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip08", 
            "required" : false, 
            "title":"筹码8",
            "sort":NumberInt(12),  
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip09", 
            "required" : false, 
            "title":"筹码9",
            "sort":NumberInt(13),  
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip10", 
            "required" : false, 
            "title":"筹码10",
            "sort":NumberInt(14),  
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip11", 
            "required" : false, 
            "title":"筹码11",
            "sort":NumberInt(15), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip12", 
            "required" : false, 
            "title":"筹码12",
            "sort":NumberInt(16), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip13", 
            "required" : false, 
            "title":"筹码13",
            "sort":NumberInt(17),  
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip14", 
            "required" : false, 
            "title":"筹码14",
            "sort":NumberInt(18), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip15", 
            "required" : false, 
            "title":"筹码15",
            "sort":NumberInt(19), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip16", 
            "required" : false, 
            "title":"筹码16",
            "sort":NumberInt(20), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip17", 
            "required" : false, 
            "title":"筹码17",
            "sort":NumberInt(21), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip18", 
            "required" : false, 
            "title":"筹码18",
            "sort":NumberInt(22),  
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip19", 
            "required" : false, 
            "title":"筹码19",
            "sort":NumberInt(23),  
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip20", 
            "required" : false, 
            "title":"筹码20",
            "sort":NumberInt(24), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip21", 
            "required" : false, 
            "title":"筹码21",
            "sort":NumberInt(25), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip22", 
            "required" : false, 
            "title":"筹码22",
            "sort":NumberInt(26), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip23", 
            "required" : false, 
            "title":"筹码23",
            "sort":NumberInt(27),  
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip24", 
            "required" : false, 
            "title":"筹码24",
            "sort":NumberInt(28),  
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip25", 
            "required" : false, 
            "title":"筹码25",
            "sort":NumberInt(29), 
            "type" : "INT", 
            "min" : NumberInt(-2147483647), 
            "max" : NumberInt(2147483647)
        }
    ]
},
{ 
    "_id" : NumberInt(10), 
    "gameName" : "炸金花", 
    "gameAlias" : "zjh", 
    "adapt" : "defaultAdapt", 
    "handler" : "defaultHandler", 
    "listener" : "defaultListener", 
    "producerGroup" : "consumerGroup", 
    "consumerGroup" : "producerGroup", 
    "sort":NumberInt(999),
    "mergeHeaders":[
        {
            "key":"darkChips",
            "title":"暗牌筹码面值",
            "paramKeys":["chip01","chip02","chip03","chip04"]
        }
    ],
    "params" : [
        {
            "key" : "seat", 
            "required" : false, 
            "title":"位置个数",
            "sort":NumberInt(15), 
            "type" : "INT", 
            "min" : NumberInt(2), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "thinkTimes", 
            "required" : false, 
            "title":"思考时间",
            "sort":NumberInt(16),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(300)
        }, 
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title":"底注",
            "sort":NumberInt(2), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : false, 
            "title":"最大投注",
            "sort":NumberInt(17),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxRound", 
            "required" : false, 
            "title":"最大回合数",
            "sort":NumberInt(18),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minLookRound", 
            "required" : false, 
            "title":"最低看牌轮数",
            "sort":NumberInt(19),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minCompareRound", 
            "required" : false, 
            "title":"最低比牌轮数",
            "sort":NumberInt(20),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "lookCardMultiple", 
            "required" : false, 
            "title":"看牌倍数",
            "sort":NumberInt(21),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "required" : true, 
            "title":"抽水",
            "sort":NumberInt(3), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minJackpot", 
            "required" : true, 
            "title":"奖池下限",
            "sort":NumberInt(4), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxJackpot", 
            "required" : true,
            "title":"奖池上限",
            "sort":NumberInt(5),  
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip01", 
            "required" : true, 
            "title":"暗牌筹码1",
            "sort":NumberInt(6), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : true, 
            "title":"暗牌筹码2",
            "sort":NumberInt(7),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : true, 
            "title":"暗牌筹码3",
            "sort":NumberInt(8), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : true, 
            "title":"暗牌筹码4",
            "sort":NumberInt(9),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "open_chip01", 
            "required" : false, 
            "title":"明牌筹码1",
            "sort":NumberInt(10),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "open_chip02", 
            "required" : false, 
            "title":"明牌筹码2",
            "sort":NumberInt(11),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "open_chip03", 
            "required" : false, 
            "title":"明牌筹码3",
            "sort":NumberInt(12),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "open_chip04", 
            "title":"明牌筹码4",
            "sort":NumberInt(13),
            "required" : false, 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }
    ]
},
{ 
    "_id" : NumberInt(29), 
    "gameName" : "百人牛牛", 
    "gameAlias" : "brnn", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler", 
    "listener" : "niuniuListener", 
    "sort":NumberInt(899),
    "params" : [
        {
            "key" : "commissionRate", 
            "required" : true, 
            "title":"抽水",
            "sort":NumberInt(3),
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : true, 
            "title":"投注上限",
            "sort":NumberInt(5),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true,
            "title":"投注下限",
            "sort":NumberInt(4), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "serviceCharge", 
            "required" : true, 
            "title":"服务费",
            "sort":NumberInt(2),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "robotMinAmount", 
            "required" : false, 
            "title":"机器人初始金币",
            "sort":NumberInt(6),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip01", 
            "required" : false, 
            "title":"筹码1",
            "sort":NumberInt(7),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : false, 
            "title":"筹码2",
            "sort":NumberInt(8),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : false, 
            "title":"筹码3",
            "sort":NumberInt(9),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : false, 
            "title":"筹码4",
            "sort":NumberInt(10),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "checkPeriod", 
            "required" : false, 
            "title":"rtp检测周期",
            "sort":NumberInt(11),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "rtpRate", 
            "required" : true, 
            "title":"预设RTP%",
            "sort":NumberInt(12),
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }
    ]
},
{ 
    "_id" : NumberInt(11), 
    "gameName" : "三公", 
    "gameAlias" : "sang",
    "listener" : "niuniuListener", 
    "adapt" : "niuniuAdapt", 
    "handler" : "niuniuHandler",
    "sort":NumberInt(828), 
    "params" : [
        {
            "key" : "commissionRate", 
            "required" : true,
            "title":"抽水",
            "sort":NumberInt(3), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minEntry", 
            "required" : true, 
            "title":"准入",
            "sort":NumberInt(1),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : true, 
            "title":"投注上限",
            "sort":NumberInt(4),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minBet", 
            "required" : true, 
            "title":"底注",
            "sort":NumberInt(2),
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }
    ]
}];


for (let index = 0; index < gameParamsSettingList.length; index++) {
    var  gameParamsSetting = gameParamsSettingList[index];
    db.base_game_setting.save(gameParamsSetting);   
}


