var game= { 
    "_id" : NumberInt(10), 
    "gameName" : "炸金花", 
    "gameAlias" : "zjh", 
    "adapt" : "defaultAdapt", 
    "handler" : "defaultHandler", 
    "listener" : "defaultListener", 
    "producerGroup" : "consumerGroup", 
    "consumerGroup" : "producerGroup", 
    "sort" : NumberInt(999), 
    "mergeHeaders" : [
        {
            "key" : "darkChips", 
            "title" : "暗牌筹码面值", 
            "paramKeys" : [
                "chip01", 
                "chip02", 
                "chip03", 
                "chip04"
            ]
        }
    ], 
    "params" : [
        {
            "key" : "seat", 
            "required" : false, 
            "title" : "位置个数", 
            "sort" : NumberInt(15), 
            "type" : "INT", 
            "min" : NumberInt(2), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "thinkTimes", 
            "required" : false, 
            "title" : "思考时间", 
            "sort" : NumberInt(16), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(300)
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
            "title" : "底注", 
            "sort" : NumberInt(2), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxBet", 
            "required" : false, 
            "title" : "最大投注", 
            "sort" : NumberInt(17), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxRound", 
            "required" : false, 
            "title" : "最大回合数", 
            "sort" : NumberInt(18), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minLookRound", 
            "required" : false, 
            "title" : "最低看牌轮数", 
            "sort" : NumberInt(19), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "minCompareRound", 
            "required" : false, 
            "title" : "最低比牌轮数", 
            "sort" : NumberInt(20), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "lookCardMultiple", 
            "required" : false, 
            "title" : "看牌倍数", 
            "sort" : NumberInt(21), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "commissionRate", 
            "required" : true, 
            "title" : "抽水", 
            "sort" : NumberInt(3), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(1)
        }, 
        {
            "key" : "minJackpot", 
            "required" : true, 
            "title" : "奖池下限", 
            "sort" : NumberInt(4), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "maxJackpot", 
            "required" : true, 
            "title" : "奖池上限", 
            "sort" : NumberInt(5), 
            "type" : "INT", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip01", 
            "required" : true, 
            "title" : "暗牌筹码1", 
            "sort" : NumberInt(6), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip02", 
            "required" : true, 
            "title" : "暗牌筹码2", 
            "sort" : NumberInt(7), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip03", 
            "required" : true, 
            "title" : "暗牌筹码3", 
            "sort" : NumberInt(8), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "chip04", 
            "required" : true, 
            "title" : "暗牌筹码4", 
            "sort" : NumberInt(9), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "open_chip01", 
            "required" : false, 
            "title" : "明牌筹码1", 
            "sort" : NumberInt(10), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "open_chip02", 
            "required" : false, 
            "title" : "明牌筹码2", 
            "sort" : NumberInt(11), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "open_chip03", 
            "required" : false, 
            "title" : "明牌筹码3", 
            "sort" : NumberInt(12), 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }, 
        {
            "key" : "open_chip04", 
            "title" : "明牌筹码4", 
            "sort" : NumberInt(13), 
            "required" : false, 
            "type" : "DOUBLE", 
            "min" : NumberInt(0), 
            "max" : NumberInt(2147483647)
        }
    ]
};

db.base_game_cinfig.save(game);