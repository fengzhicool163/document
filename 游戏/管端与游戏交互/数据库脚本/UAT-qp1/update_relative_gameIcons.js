db.brand.find({}).forEach(
	function(item){
	    print(item._id);		
			//fg-fish
			db.brand.update({"_id":item._id,"games.gameId":221},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/fish_3D.png"}},{muti: true}); 
			db.brand.update({"_id":item._id,"games.gameId":222},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/fish_mfwz.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":223},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/bndr.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":224},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/hlby.png"}},{muti: true});  
			db.brand.update({"_id":item._id,"games.gameId":225},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/mrby.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":226},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/ttby.png"}},{muti: true});  
			db.brand.update({"_id":item._id,"games.gameId":227},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/ltzj.png"}},{muti: true});

			//fg-qp
			db.brand.update({"_id":item._id,"games.gameId":231},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/hlhb.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":232},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/qznn.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":233},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/sg.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":234},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/ddz.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":235},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/ebg.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":236},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/iPoker.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":237},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/jszjh.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":238},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/mj.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":239},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/qzpj.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":240},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/ShowHand.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":241},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/sss.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":242},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/tbnn.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":243},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/xzdd.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":244},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/zjh.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":245},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/bjl.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":246},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/zjhdr.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":247},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/tb.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":248},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/brnn.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":249},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/hjgd.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":250},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/hjdz.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":251},{"$set":{"games.$.icon":"/common/gameIcon/fg/mobile/dznz.png"}},{muti: true});

			//ky-qp
			db.brand.update({"_id":item._id,"games.gameId":201},{"$set":{"games.$.icon":"/common/gameIcon/ky/xlch.png"}},{muti: true});  
			db.brand.update({"_id":item._id,"games.gameId":202},{"$set":{"games.$.icon":"/common/gameIcon/ky/slwh.png"}},{muti: true}); 
			db.brand.update({"_id":item._id,"games.gameId":203},{"$set":{"games.$.icon":"/common/gameIcon/ky/brnn.png"}},{muti: true});   
			db.brand.update({"_id":item._id,"games.gameId":204},{"$set":{"games.$.icon":"/common/gameIcon/ky/zjh.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":205},{"$set":{"games.$.icon":"/common/gameIcon/ky/dzpk.png"}},{muti: true});  
			db.brand.update({"_id":item._id,"games.gameId":206},{"$set":{"games.$.icon":"/common/gameIcon/ky/qznn.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":207},{"$set":{"games.$.icon":"/common/gameIcon/ky/wrzjh.png"}},{muti: true});  
			db.brand.update({"_id":item._id,"games.gameId":208},{"$set":{"games.$.icon":"/common/gameIcon/ky/jszjh.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":209},{"$set":{"games.$.icon":"/common/gameIcon/ky/xywz.png"}},{muti: true});  
			db.brand.update({"_id":item._id,"games.gameId":210},{"$set":{"games.$.icon":"/common/gameIcon/ky/21d.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":211},{"$set":{"games.$.icon":"/common/gameIcon/ky/ddz.png"}},{muti: true});  
			db.brand.update({"_id":item._id,"games.gameId":212},{"$set":{"games.$.icon":"/common/gameIcon/ky/sss.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":213},{"$set":{"games.$.icon":"/common/gameIcon/ky/ebg.png"}},{muti: true});  
			db.brand.update({"_id":item._id,"games.gameId":214},{"$set":{"games.$.icon":"/common/gameIcon/ky/qzpj.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":215},{"$set":{"games.$.icon":"/common/gameIcon/ky/sg.png"}},{muti: true});  
			db.brand.update({"_id":item._id,"games.gameId":216},{"$set":{"games.$.icon":"/common/gameIcon/ky/tbnn.png"}},{muti: true});
			db.brand.update({"_id":item._id,"games.gameId":217},{"$set":{"games.$.icon":"/common/gameIcon/ky/yzlh.png"}},{muti: true});  
			db.brand.update({"_id":item._id,"games.gameId":218},{"$set":{"games.$.icon":"/common/gameIcon/ky/bjl.png"}},{muti: true});
			    
	}
);
