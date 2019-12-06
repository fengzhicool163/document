import pymysql
import pymongo
import logging

from pymysql.cursors import DictCursor

logging.basicConfig(level=logging.DEBUG)

##  需要根据环境设置的配置
mongoUrl = 'mongodb://sec_game:1qaz2wsx@192.168.1.96:20000,192.168.1.97:20000,192.168.1.98:20000'
mysql_host = '192.168.1.93'
mysql_user = 'game_center_app'
mysql_password = 'Jxinternet@1234'

# gcenter 库
conn = pymysql.connect(
    host=mysql_host,
    user=mysql_user, password=mysql_password,
    database='gcenter',
    charset='utf8')

gcenter = conn.cursor(cursor=DictCursor)
# mongo  连接
mongo = pymongo.MongoClient(mongoUrl)


# 获取全部业主
def getBrand():
    brandList = mongo.get_database("game").get_collection("brand").distinct("brand")
    return list(brandList)


# 获取游戏房间列表
def getGameRooms(brand, gameId):
    brandRoomResult = mongo.get_database("game").get_collection("brand").aggregate(
        [
            {"$match": {"brand": brand}},
            {"$unwind": "$games"},
            {"$match": {"games.gameId": gameId}},
            {"$unwind": "$games.rooms"},
            {"$project": {'brand': 1, 'gameId': '$games.gameId', 'roomId': '$games.rooms.roomId',
                          'parentId': '$games.rooms.parentId'}}
        ]
    )
    brandRoomList = list(brandRoomResult._CommandCursor__data)
    baseRooms = mongo.get_database("game").get_collection("base_game_config").find_one({'_id': gameId})['rooms']
    for brandRoom in brandRoomList:
        for baseRoom in baseRooms:
            if baseRoom['roomId'] == brandRoom['parentId']:
                brandRoom['roomType'] = baseRoom['roomType']
                break

    return brandRoomList


# 计算简单的游戏打码量 (玩家下注 为有效打码量的游戏 幸运五张(28) ,炸金花(10), 21点(23)  ,加勒比梭哈(25),押注牛牛(21),百人牛牛(29) )
def calculationDefaultBet(brand):
    logging.debug("玩家下注 为有效打码量的游戏")
    sqlStr = 'update game_user_stats_{brand}  set user_bet = user_input where game_id in (28,10,23,25,21,29) and user_bet is null'
    sql = sqlStr.format(brand=brand)
    logging.debug("calculationDefaultBet sql = %s", sql)
    try:
        count = gcenter.execute(sql)
        conn.commit()
        logging.debug("玩家下注 为有效打码量的游戏 更新条数: %s", count)
    except:
        conn.rollback()

    #  计算多轮游戏有效打码量 (二八杠(40) 抢庄牌九(42)


def calculationMultipleRoundBet(brand):
    logging.debug("开始计算多轮游戏有效打码量")


#  玩家底注 为 用户有效打码量的用户 (欢乐红包(26) 每轮底注 每局几轮* 底注)
def calculationEnvelopBet(brand):
    logging.debug("开始统计欢乐红包数据")


# 执行抢庄牛牛sql 语句
def calculationQznnSql(brand, userBet, userPnlCond, gameId, roomId):
    sql = 'update game_user_stats_{brand} set user_bet = ' + str(
        userBet) + ' where game_id ={gameId} and user_pnl {userPnlCond} and user_bet is null'
    if (roomId is not None):
        sql = sql + " and room_id = " + str(roomId)
    sql = sql.format(brand=brand, userPnlCond=userPnlCond, gameId=gameId)
    logging.debug("游戏id: %s sql =%s", gameId, sql)
    try:
        count = gcenter.execute(sql)
        conn.commit()
        logging.debug("抢庄牛牛类型用户打码量更新条数为: %s", count)
    except:
        conn.rollback()


# 计算抢庄牛牛(22)有效打码量 (赢== 底注  输== 实际输的钱)
# 抢庄牛牛底注 新手房1 进阶房 5 高手房 20 土豪房 100
def calculationQznnBet(brand):
    logging.debug("开始统计抢庄牛牛数据")
    calculationQznnSql(brand=brand, userBet='user_pnl * -1', userPnlCond=' <= 0 ', gameId=22, roomId=None)
    logging.debug("开始计算用户赢的打码量...")
    roomList = getGameRooms(brand=brand, gameId=22)
    for room in roomList:
        if (room['roomType'] == 'NOVICE'):
            logging.debug("开始统计新手房数据")
            calculationQznnSql(brand=brand, userBet=1, userPnlCond=' > 0 ', gameId=22, roomId=room['roomId'])
        elif (room['roomType'] == 'ADVANCED'):
            logging.debug("开始统计进阶房")
            calculationQznnSql(brand=brand, userBet=5, userPnlCond=' > 0 ', gameId=22, roomId=room['roomId'])
        elif (room['roomType'] == 'SUPERIOR'):
            logging.debug("开始统计高手房")
            calculationQznnSql(brand=brand, userBet=20, userPnlCond=' > 0 ', gameId=22, roomId=room['roomId'])
        elif (room['roomType'] == 'TUHAO'):
            logging.debug("开始统计高手房")
            calculationQznnSql(brand=brand, userBet=100, userPnlCond=' > 0 ', gameId=22, roomId=room['roomId'])


# 计算三公(22)有效打码量 (赢== 底注  输== 实际输的钱)
# 三公底注 新手房1 进阶房 2 高手房 4 土豪房 10
def calculationSangongBet(brand):
    logging.debug("开始统计抢庄牛牛数据")
    calculationQznnSql(brand=brand, userBet='user_pnl * -1', userPnlCond=' <= 0 ', gameId=11, roomId=None)
    logging.debug("开始计算用户赢的打码量...")
    roomList = getGameRooms(brand=brand, gameId=11)
    for room in roomList:
        if (room['roomType'] == 'NOVICE'):
            logging.debug("开始统计新手房数据")
            calculationQznnSql(brand=brand, userBet=1, userPnlCond=' > 0 ', gameId=11, roomId=room['roomId'])
        elif (room['roomType'] == 'ADVANCED'):
            logging.debug("开始统计进阶房")
            calculationQznnSql(brand=brand, userBet=2, userPnlCond=' > 0 ', gameId=11, roomId=room['roomId'])
        elif (room['roomType'] == 'SUPERIOR'):
            logging.debug("开始统计高手房")
            calculationQznnSql(brand=brand, userBet=4, userPnlCond=' > 0 ', gameId=11, roomId=room['roomId'])
        elif (room['roomType'] == 'TUHAO'):
            logging.debug("开始统计高手房")
            calculationQznnSql(brand=brand, userBet=10, userPnlCond=' > 0 ', gameId=11, roomId=room['roomId'])


# 计算通比牛牛(20)有效打码量 (赢 == 赢得钱/人数  输 == 实际输的钱)
def calculationTbnnBet(brand):
    logging.debug("update game_user_stats_{brand}")
    logging.debug("开始计算输的用户的打码量")
    sqlFormat = "update game_user_stats_{brand}  set user_bet = user_input where game_id = 20 and user_bet is  null and final_user_pnl <= 0;"
    sql = sqlFormat.format(brand=brand)
    logging.debug("开始计算输的用户的打码量 sql = %s", sql)
    try:
        count = gcenter.execute(sql)
        conn.commit()
        logging.debug("开始计算输的用户的打码量 count= %s", count)
    except:
        conn.rollback()
    logging.debug("开始计算赢的用户的打码量")
    sqlFormat = "update game_user_stats_{brand} as t2 inner join  (select t3.userBet,t3.id from (select ROUND(t.final_user_pnl / t.player_count,2) as userBet ,t.id from (select b.id,b.final_user_pnl,d.player_count from (select a.id,a.uuid,a.user_bet,a.final_user_pnl,a.user_input,a.user_output from game_user_stats_{brand} as a where a.game_id = 20 and a.final_user_pnl > 0 and user_bet is null ) as b left join (select count(*) as player_count,c.uuid from game_user_stats_{brand} as c group by c.uuid) d on b.uuid = d.uuid) t )t3) t4 on t4.id = t2.id set t2.user_bet = t4.userBet where t2.game_id = 20  and t2.final_user_pnl >0 and t2.user_bet is  null"
    sql = sqlFormat.format(brand=brand)
    logging.debug("开始计算赢的用户的打码量 sql =%s", sql)
    try:
        count = gcenter.execute(sql)
        conn.commit()
        logging.debug("计算通比牛牛用户打码量为赢得用户的数据:%s", count)
    except:
        conn.rollback()


# 开始计算押注类型 红黑大战 的游戏数据
# 同时下注红黑时打码量为差额,其余全部为有效打码量
def calculationHhdzBet(brand):
    logging.debug("开始统计红黑大战游戏有效打码量")
    # 从mongo  数据 查询投注详情并获取差额信息 0 红 1 黑
    queryResult = mongo.get_database("game").get_collection("hhdz_bet_record").aggregate([
        {"$unwind": "$betItems"},
        {"$match": {"betItems.betType": {"$in": [0, 1]}}},
        {"$project": {"playerId": 1, "roundId": 1, "redBetScore": {
            "$cond": {"if": {"$eq": ["$betItems.betType", 0]}, "then": "$betItems.betScore", "else": 0}},
                      "blackBetScore": {"$cond": {"if": {"$eq": ["$betItems.betType", 1]}, "then": "$betItems.betScore",
                                                  "else": 0}}}},
        {"$group": {"_id": {"roundId": "$roundId", "playerId": "$playerId"},
                    "redBetScoreTotal": {"$sum": "$redBetScore"},
                    "blackBetScoreTotal": {"$sum": "$blackBetScore"}}},
        {"$match": {"redBetScoreTotal": {"$gt": 0}, "blackBetScoreTotal": {"$gt": 0}}},
        {"$project": {"roundId": 1, "playerId": 1,
                      "minValue": {"$cond": {"if": {"$lt": ["$redBetScoreTotal",
                                                            "$blackBetScoreTotal"]}, "then": "$redBetScoreTotal",
                                             "else": "$blackBetScoreTotal"}}}}
    ])
    resultList = list(queryResult._CommandCursor__data)
    logging.debug("红黑mongo  查询数据 : %s", len(resultList))
    sqlFormat = "update game_user_stats_{brand}  set user_bet = (user_input - {difference}) where game_id = 30 and uuid = {uuid} and user_id = {userId} and user_bet is  null;"
    count = 0
    for result in resultList:
        sql = sqlFormat.format(brand=brand, uuid=result['_id']['roundId'], userId=result['_id']['playerId'],
                               difference=result['minValue'])
        logging.debug("sql = %s", sql)
        try:
            count += gcenter.execute(sql)
            conn.commit()
        except:
            conn.rollback()
            logging.error("执行sql 语句失败 sql= %s", sql)
            count -= 1
    logging.debug("共执行sql  共 %s 条", count)
    # 再修改有效投注的数据
    sqlFormat = "update game_user_stats_{brand}  set user_bet = user_input where game_id = 30 and user_bet is  null;"
    sql = sqlFormat.format(brand=brand)
    count = 0
    try:
        count = gcenter.execute(sql)
        conn.commit()
    except:
        conn.rollback()
        logging.error("sql  语句执行失败:%s", sql)
    logging.debug("红黑统一数据执行 %s", count)


# 计算龙虎斗有效打码量
# 龙虎斗 有效打码计算方式 1. 开和 龙虎不算,2 同时押龙虎,两个数相减 3, 花色超过三个 不计算打码量
def calculationLhdBet(brand):
    logging.debug("开始计算龙虎斗打码量: %s", brand)


if __name__ == '__main__':
    logging.debug("开始统计有效打码量")
    brandList = getBrand()
    # logging.debug(brandList)
    for brand in brandList:
        logging.debug("开始统计 %s 业主", brand)
        calculationDefaultBet(brand=brand)
        calculationQznnBet(brand=brand)
        calculationSangongBet(brand)
        calculationTbnnBet(brand=brand)
        calculationHhdzBet(brand)
        calculationLhdBet(brand)
