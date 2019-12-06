var settings = db.base_game_setting.find({});


while(settings.hasNext()){
    var setting = settings.next();
    var params = setting.params;
    params.forEach(param => {
        if (param.type == "INT"){
            param.type = "DOUBLE";
        }
    });
    printjson(setting);
    db.base_game_setting.save(setting);
}