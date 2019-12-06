var  brandInfoList = db.brand_info.find({});

while(brandInfoList.hasNext()){
    var brandInfo = brandInfoList.next();
    var globalMaterial = brandInfo.globalMaterial;
    var brokerageSetting = {};
    brokerageSetting.autoBrokerage = globalMaterial.autoBrokerage;
    brokerageSetting.minBrokerage = globalMaterial.minBrokerage;
    brokerageSetting.openBlackList = true;
    brokerageSetting._id = brandInfo._id;
    db.brokerage_setting.save(brokerageSetting);
}