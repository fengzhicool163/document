var topupEnterIds = [224,221,227,225,222,226];
db.base_game_config.find({}).forEach(
	function(baseGame){
		if(topupEnterIds.includes(baseGame._id)){
			print(baseGame._id);
			db.base_game_config.update({"_id":baseGame._id},{"$set":{"enterLimit":NumberInt(0)}});
		}else{
			db.base_game_config.update({"_id":baseGame._id},{"$set":{"enterLimit":NumberInt(10)}});
		}
	}
);