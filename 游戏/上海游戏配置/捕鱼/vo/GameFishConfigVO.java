package com.mx.game.ms.fish.api.vo;

import com.mx.game.ms.fish.model.*;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;

/**
 * 捕鱼游戏配置信息
 */
@ApiModel("游戏配置-渔场配置关联信息")
public class GameFishConfigVO {
    /**
     * 渔场基础配置信息
     */
    @ApiModelProperty("渔场基础配置列表")
    private List<GameFishSiteVO> fishSiteList;

    @ApiModelProperty("boss鱼机制列表")
    private List<FishBoss> fishBossList;

    @ApiModelProperty("鱼潮机制列表")
    private List<FishDamp> fishDampList;

    @ApiModelProperty("渔场道具掉落机制列表")
    private List<FishDrop> fishDropList;

    @ApiModelProperty("渔场道具掉落组列表")
    private List<FishDropGroup> fishDropGroupList;

    public List<GameFishSiteVO> getFishSiteList() {
        return fishSiteList;
    }

    public void setFishSiteList(List<GameFishSiteVO> fishSiteList) {
        this.fishSiteList = fishSiteList;
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

    public List<FishDrop> getFishDropList() {
        return fishDropList;
    }

    public void setFishDropList(List<FishDrop> fishDropList) {
        this.fishDropList = fishDropList;
    }

    public List<FishDropGroup> getFishDropGroupList() {
        return fishDropGroupList;
    }

    public void setFishDropGroupList(List<FishDropGroup> fishDropGroupList) {
        this.fishDropGroupList = fishDropGroupList;
    }
}
