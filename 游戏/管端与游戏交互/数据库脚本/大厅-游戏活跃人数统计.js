db.getCollection("user_login_stats_record").aggregate([
  {
  "$match": {
    "brand": "sqp01",
    "loginTime": {
      "$gte": ISODate("2019-11-16T06:00:00.000+0000"),
      "$lt": ISODate("2019-11-16T06:59:00.000+0000")
    }
  }
}
,{
  "$facet": {
    "hallActiveList": [
      {
        "$project": {
          "userId": 1
        }
      },
      {
        "$group": {
          "_id": "$userId",
          "active": {
            "$sum": 1
          }
        }
      },
      {
        "$project": {
          "active": 1
        }
      },
      {
        "$count": "active"
      }
    ],
    "gameActiveList": [
      {
        "$match": {
          "statRecords": {
            "$exists": true
          }
        }
      },
      {
        "$unwind": "$statRecords"
      },
      {
        "$project": {
          "userId": 1,
          "gameId": "$statRecords.gameId",
          "gameName": "$statRecords.gameName"
        }
      },
      {
        "$group": {
          "_id": {
            "userId": "$userId",
            "gameId": "$gameId",
            "gameName": "$gameName"
          },
          "gameActive": {
            "$sum": 1
          }
        }
      }
//      ,
//      {
//        "$group": {
//          "_id": {
//            "gameId": "$_id.gameId",
//            "gameName": "$_id.gameName"
//          },
//          "gameActive": {
//            "$sum": "$gameActive"
//          }
//        }
//      },
//      {
//        "$project": {
//          "gameId": "$_id.gameId",
//          "gameName": "$_id.gameName",
//          "gameActive": 1
//        }
//      }
    ]
  }
}
])
