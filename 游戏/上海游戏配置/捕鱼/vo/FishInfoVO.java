package com.mx.game.ms.fish.api.vo;

import com.mx.game.ms.fish.model.FishFormation;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.util.CollectionUtils;

import java.util.Date;
import java.util.List;

@ApiModel("鱼基础信息")
public class FishInfoVO {

    /**
     * 鱼ID
     */
    @ApiModelProperty("鱼ID")
    private String fishId;

    /**
     * 鱼场id
     */
    @ApiModelProperty("鱼场id")
    private Long fishSiteId;

    /**
     * 轨迹代码，多个逗号分隔
     */
    @ApiModelProperty("轨迹代码，多个逗号分隔")
    private String pathLine;

    /**
     * 轨迹名称
     */
    @ApiModelProperty("轨迹名称")
    private String pathName;

    /**
     * 鱼名称
     */
    @ApiModelProperty("鱼名称")
    private String name;

    /**
     * 鱼的价值
     */
    @ApiModelProperty("鱼的价值")
    private Long vals;

    /**
     * 鱼的速度
     */
    @ApiModelProperty("鱼的速度")
    private Integer hitRate;

    /**
     * 鱼的捕获率
     */
    @ApiModelProperty("鱼的捕获率")
    private Integer appearRate;

    /**
     * 刷新权重
     */
    @ApiModelProperty("刷新权重")
    private Integer refreshLevel;

    /**
     * 刷新数量
     */
    @ApiModelProperty("刷新数量")
    private Integer refreshNums;

    /**
     * 刷新间隔(秒)
     */
    @ApiModelProperty("刷新间隔(秒)")
    private Long refreshGap;

    /**
     * 鱼的类型,1- 普通鱼 2- BOSS鱼 3- 特殊鱼
     */
    @ApiModelProperty("鱼的类型,例：1- 普通鱼 2- BOSS鱼 3- 特殊鱼")
    private Integer fishType;

    /**
     * 体积,用数字表示，每一个数字代表一种类型
     * 单位：像素
     * 1- 微型鱼:50*50
     * 2- 小型鱼:80*80
     * 3- 中型鱼:120*120
     * 4- 大型鱼:180*180
     * 5- 巨型鱼:250*250
     */
    @ApiModelProperty("体积,用数字表示每一个数字代表一种类型 单位：像素，例:1- 微型鱼:50*50，2- 小型鱼:80*80，3- 中型鱼:120*120，4- 大型鱼:180*180，5- 巨型鱼:250*250")
    private Integer volume;

    /**
     * 阵型ID多个
     */
    @ApiModelProperty("阵型ID多个")
    private String formationIds;
    private List<String> formationIdsList;

    @ApiModelProperty("鱼的阵型集合list")
    private List<FishFormation> formatList;

    @ApiModelProperty("技能ID")
    private String skillId;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 修改时间
     */
    private Date updateTime;

    public String getSkillId() {
        return skillId;
    }

    public void setSkillId(String skillId) {
        this.skillId = skillId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getFishId() {
        return fishId;
    }

    public void setFishId(String fishId) {
        this.fishId = fishId;
    }

    public Long getFishSiteId() {
        return fishSiteId;
    }

    public void setFishSiteId(Long fishSiteId) {
        this.fishSiteId = fishSiteId;
    }

    public String getPathLine() {
        return pathLine;
    }

    public void setPathLine(String pathLine) {
        this.pathLine = pathLine;
    }

    public String getPathName() {
        return pathName;
    }

    public void setPathName(String pathName) {
        this.pathName = pathName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getVals() {
        return vals;
    }

    public void setVals(Long vals) {
        this.vals = vals;
    }

    public Integer getHitRate() {
        return hitRate;
    }

    public void setHitRate(Integer hitRate) {
        this.hitRate = hitRate;
    }

    public Integer getAppearRate() {
        return appearRate;
    }

    public void setAppearRate(Integer appearRate) {
        this.appearRate = appearRate;
    }

    public Integer getRefreshLevel() {
        return refreshLevel;
    }

    public void setRefreshLevel(Integer refreshLevel) {
        this.refreshLevel = refreshLevel;
    }

    public Integer getRefreshNums() {
        return refreshNums;
    }

    public void setRefreshNums(Integer refreshNums) {
        this.refreshNums = refreshNums;
    }

    public Long getRefreshGap() {
        return refreshGap;
    }

    public void setRefreshGap(Long refreshGap) {
        this.refreshGap = refreshGap;
    }

    public Integer getFishType() {
        return fishType;
    }

    public void setFishType(Integer fishType) {
        this.fishType = fishType;
    }

    public Integer getVolume() {
        return volume;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
    }

    public String getFormationIds() {
        return formationIds;
    }

    public void setFormationIds(String formationIds) {
        this.formationIds = formationIds;
        if(formationIds!=null){
           List<String> arr = CollectionUtils.arrayToList(formationIds.split(","));
           setFormationIdsList(arr);
        }
    }

    public List<String> getFormationIdsList() {
        return formationIdsList;
    }

    public void setFormationIdsList(List<String> formationIdsList) {
        this.formationIdsList = formationIdsList;
    }

    public List<FishFormation> getFormatList() {
        return formatList;
    }

    public void setFormatList(List<FishFormation> formatList) {
        this.formatList = formatList;
    }

    @Override
    public String toString() {
        return "FishInfoVO{" +
                "fishId='" + fishId + '\'' +
                ", fishSiteId=" + fishSiteId +
                ", pathLine='" + pathLine + '\'' +
                ", pathName='" + pathName + '\'' +
                ", name='" + name + '\'' +
                ", vals=" + vals +
                ", hitRate=" + hitRate +
                ", appearRate=" + appearRate +
                ", refreshLevel=" + refreshLevel +
                ", refreshNums=" + refreshNums +
                ", refreshGap=" + refreshGap +
                ", fishType=" + fishType +
                ", volume=" + volume +
                ", formationIds='" + formationIds + '\'' +
                ", formatList=" + formatList +
                ", skillId='" + skillId + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                '}';
    }
}
