//核对线上的游戏id是否都在此数组中
var vaildGameIds = [10,11,20,21,22,23,24,25,26,28,29,30,31,32,33,40,42,50,51,52,53,54,60,61,62,63,90];
db.base_game_config.find({"_id":{$in:vaildGameIds}}).forEach(
	function(baseGame){
		print(baseGame._id);
		db.base_game_config.update({"_id":baseGame._id},{"$set":{"classify":NumberInt(2),"classifyOnlineFlag":true}});
	}
);

db.brand.find({}).forEach(
	function(item){
	    print(item._id);
		for(var i=0; i<vaildGameIds.length;i++){
			db.brand.update({"_id":item._id,"games.gameId":vaildGameIds[i]},{"$set":{"games.$.classify":NumberInt(2),"games.$.classifyOnlineFlag":true}},{muti: true})
		}	    
	}
);