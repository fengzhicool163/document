package com.mx.game.ms.fish.api.vo;

import com.mx.game.ms.fish.model.FishBoss;
import com.mx.game.ms.fish.model.FishDamp;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;

/**
 * 游戏调用-渔场配置信息
 */
@ApiModel("游戏调用-渔场配置信息")
public class GameFishSiteVO {
    /**
     * 渔场id
     */
    @ApiModelProperty("渔场id")
    private String siteId;

    /**
     * 渔场类型：
     * 1- 普通场
     * 2- 竞技场
     * 3- 大奖赛
     */
    @ApiModelProperty("渔场类型 例：1- 普通场,2- 竞技场,3- 大奖赛")
    private Integer siteType;

    /**
     * 渔场名称
     */
    @ApiModelProperty("渔场名称")
    private String siteName;

    /**
     * 开启等级,用数字表示
     */
    @ApiModelProperty("开启等级（用户等级）,用数字表示")
    private Integer openLevel;

    /**
     * 金币消耗
     */
    @ApiModelProperty("金币消耗")
    private Long goldConsume;

    /**
     * 金币下限
     */
    @ApiModelProperty("金币下限")
    private Long goldDown;

    /**
     * 金币上限
     */
    @ApiModelProperty("金币上限")
    private Long goldUp;

    /**
     * 炮台倍数下限
     */
    @ApiModelProperty("炮台倍数下限")
    private Integer batteryDown;

    /**
     * 炮台倍数上限
     */
    @ApiModelProperty("炮台倍数上限")
    private Integer batteryUp;

    /**
     * 默认炮台倍数
     */
    @ApiModelProperty("默认炮台倍数")
    private Integer batteryNums;

    /**
     * 静默时间（秒)
     */
    @ApiModelProperty("静默时间（秒)")
    private Long pauseTime;

    /**
     * 互动间隔（秒）
     */
    @ApiModelProperty("互动间隔（秒）")
    private Long toinIntervalTime;

    /**
     * 宝箱投放间隔（秒）
     */
    @ApiModelProperty("宝箱投放间隔（秒）")
    private Long cowryIntervalTime;

    /**
     * 开启时间
     */
    @ApiModelProperty("开启时间")
    private Long openTime;

    /**
     * 开启持续时间（秒）
     */
    @ApiModelProperty("开启持续时间")
    private Long openContiTime;

    /**
     * 单次持续时间（秒）
     */
    @ApiModelProperty("单次持续时间")
    private Long singleContiTime;

    /**
     * boss鱼机制id,多个逗号分隔
     */
    @ApiModelProperty("boss鱼机制id,多个逗号分隔")
    private String bossIds;
    @ApiModelProperty("boss鱼机制列表")
    private List<FishBoss> fishBossList;
    /**
     * 鱼潮id多个逗号分隔
     */
    @ApiModelProperty("鱼潮id,多个逗号分隔")
    private String dampIds;
    /**
     * 鱼潮机制信息列表
     */
    @ApiModelProperty("鱼潮机制信息列表")
    private List<FishDamp> fishDampList;

    /**
     * 渔场掉落机制表ID,多个逗号分隔
     */
    @ApiModelProperty("渔场掉落机制表ID,多个逗号分隔")
    private String dropIds;
    /**
     * 渔场道具掉落机制列表
     */
    @ApiModelProperty("渔场道具掉落机制列表")
    private List<FishDropVO> fishDropList;
    /**
     * 场景编号
     */
    @ApiModelProperty("场景编号，数字表示")
    private Integer sceneCode;

    /**
     * 渠道商编号
     */
    @ApiModelProperty("渠道商编号")
    private String channelNum;
    /**
     * 刷新间隔（秒）
     */
    @ApiModelProperty("刷新间隔（秒）")
    private Long refrIntervalTime;

    /**
     * 鱼类刷新权重:刷新规则：
     1- 刷新时，先根据渔场id，来判定刷新哪种类型的鱼，随后根据类型来计算权重，刷新哪一条鱼
     2- 初始刷新时，必须要满足指定的品种
     3- 刷新鱼权重公式：刷新时根据单个鱼的权重/总权重得出单个鱼的刷新率
     */
    @ApiModelProperty("鱼类刷新权重:刷新规则,用数字表示")
    private Integer refrLevel;

    /**
     * 初始刷新品种:7
     */
    @ApiModelProperty("初始刷新品种,用数字表示")
    private Integer initVariety;

    /**
     * 刷新数量:100
     */
    @ApiModelProperty("刷新数量")
    private Integer refrNums;
    /**
     * 鱼场投放鱼类信息列表
     */
    @ApiModelProperty("鱼场投放鱼类信息列表")
    private List<FishInfoVO> fishInfoList;

    /**
     * 渔场投放鱼类ID，多个逗号分隔
     */
    @ApiModelProperty("渔场投放鱼类ID，多个逗号分隔")
    private String fishIds;

    public String getSiteId() {
        return siteId;
    }

    public void setSiteId(String siteId) {
        this.siteId = siteId;
    }

    public Integer getSiteType() {
        return siteType;
    }

    public void setSiteType(Integer siteType) {
        this.siteType = siteType;
    }

    public String getSiteName() {
        return siteName;
    }

    public void setSiteName(String siteName) {
        this.siteName = siteName;
    }

    public Integer getOpenLevel() {
        return openLevel;
    }

    public void setOpenLevel(Integer openLevel) {
        this.openLevel = openLevel;
    }

    public Long getGoldConsume() {
        return goldConsume;
    }

    public void setGoldConsume(Long goldConsume) {
        this.goldConsume = goldConsume;
    }

    public Long getGoldDown() {
        return goldDown;
    }

    public void setGoldDown(Long goldDown) {
        this.goldDown = goldDown;
    }

    public Long getGoldUp() {
        return goldUp;
    }

    public void setGoldUp(Long goldUp) {
        this.goldUp = goldUp;
    }

    public Integer getBatteryDown() {
        return batteryDown;
    }

    public void setBatteryDown(Integer batteryDown) {
        this.batteryDown = batteryDown;
    }

    public Integer getBatteryUp() {
        return batteryUp;
    }

    public void setBatteryUp(Integer batteryUp) {
        this.batteryUp = batteryUp;
    }

    public Integer getBatteryNums() {
        return batteryNums;
    }

    public void setBatteryNums(Integer batteryNums) {
        this.batteryNums = batteryNums;
    }

    public Long getPauseTime() {
        return pauseTime;
    }

    public void setPauseTime(Long pauseTime) {
        this.pauseTime = pauseTime;
    }

    public Long getToinIntervalTime() {
        return toinIntervalTime;
    }

    public void setToinIntervalTime(Long toinIntervalTime) {
        this.toinIntervalTime = toinIntervalTime;
    }

    public Long getCowryIntervalTime() {
        return cowryIntervalTime;
    }

    public void setCowryIntervalTime(Long cowryIntervalTime) {
        this.cowryIntervalTime = cowryIntervalTime;
    }

    public Long getOpenTime() {
        return openTime;
    }

    public void setOpenTime(Long openTime) {
        this.openTime = openTime;
    }

    public Long getOpenContiTime() {
        return openContiTime;
    }

    public void setOpenContiTime(Long openContiTime) {
        this.openContiTime = openContiTime;
    }

    public Long getSingleContiTime() {
        return singleContiTime;
    }

    public void setSingleContiTime(Long singleContiTime) {
        this.singleContiTime = singleContiTime;
    }

    public String getBossIds() {
        return bossIds;
    }

    public void setBossIds(String bossIds) {
        this.bossIds = bossIds;
    }

    public String getDampIds() {
        return dampIds;
    }

    public void setDampIds(String dampIds) {
        this.dampIds = dampIds;
    }

    public String getDropIds() {
        return dropIds;
    }

    public void setDropIds(String dropIds) {
        this.dropIds = dropIds;
    }

    public List<FishDropVO> getFishDropList() {
        return fishDropList;
    }

    public void setFishDropList(List<FishDropVO> fishDropList) {
        this.fishDropList = fishDropList;
    }

    public Integer getSceneCode() {
        return sceneCode;
    }

    public void setSceneCode(Integer sceneCode) {
        this.sceneCode = sceneCode;
    }

    public String getChannelNum() {
        return channelNum;
    }

    public void setChannelNum(String channelNum) {
        this.channelNum = channelNum;
    }

    public List<FishInfoVO> getFishInfoList() {
        return fishInfoList;
    }

    public void setFishInfoList(List<FishInfoVO> fishInfoList) {
        this.fishInfoList = fishInfoList;
    }

    public List<FishBoss> getFishBossList() {
        return fishBossList;
    }

    public void setFishBossList(List<FishBoss> fishBossList) {
        this.fishBossList = fishBossList;
    }

    public List<FishDamp> getFishDampList() {
        return fishDampList;
    }

    public void setFishDampList(List<FishDamp> fishDampList) {
        this.fishDampList = fishDampList;
    }

    public Long getRefrIntervalTime() {
        return refrIntervalTime;
    }

    public void setRefrIntervalTime(Long refrIntervalTime) {
        this.refrIntervalTime = refrIntervalTime;
    }

    public Integer getRefrLevel() {
        return refrLevel;
    }

    public void setRefrLevel(Integer refrLevel) {
        this.refrLevel = refrLevel;
    }

    public Integer getInitVariety() {
        return initVariety;
    }

    public void setInitVariety(Integer initVariety) {
        this.initVariety = initVariety;
    }

    public Integer getRefrNums() {
        return refrNums;
    }

    public void setRefrNums(Integer refrNums) {
        this.refrNums = refrNums;
    }

    public String getFishIds() {
        return fishIds;
    }

    public void setFishIds(String fishIds) {
        this.fishIds = fishIds;
    }

    @Override
    public String toString() {
        return "GameFishSiteVO{" +
                "siteId='" + siteId + '\'' +
                ", siteType=" + siteType +
                ", siteName='" + siteName + '\'' +
                ", openLevel=" + openLevel +
                ", goldConsume=" + goldConsume +
                ", goldDown=" + goldDown +
                ", goldUp=" + goldUp +
                ", batteryDown=" + batteryDown +
                ", batteryUp=" + batteryUp +
                ", batteryNums=" + batteryNums +
                ", pauseTime=" + pauseTime +
                ", toinIntervalTime=" + toinIntervalTime +
                ", cowryIntervalTime=" + cowryIntervalTime +
                ", openTime=" + openTime +
                ", openContiTime=" + openContiTime +
                ", singleContiTime=" + singleContiTime +
                ", bossIds='" + bossIds + '\'' +
                ", fishBossList=" + fishBossList +
                ", dampIds='" + dampIds + '\'' +
                ", fishDampList=" + fishDampList +
                ", dropIds='" + dropIds + '\'' +
                ", fishDropList=" + fishDropList +
                ", sceneCode=" + sceneCode +
                ", channelNum='" + channelNum + '\'' +
                ", refrIntervalTime=" + refrIntervalTime +
                ", refrLevel=" + refrLevel +
                ", initVariety=" + initVariety +
                ", refrNums=" + refrNums +
                ", fishInfoList=" + fishInfoList +
                ", fishIds='" + fishIds + '\'' +
                '}';
    }
}
