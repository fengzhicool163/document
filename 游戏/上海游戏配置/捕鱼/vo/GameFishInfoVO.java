package com.mx.game.ms.fish.api.vo;

import com.mx.game.ms.fish.model.FishFormation;
import com.mx.game.ms.fish.model.FishInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;
@ApiModel("游戏配置-鱼关联信息")
public class GameFishInfoVO {
    @ApiModelProperty("鱼的基础属性列表")
    List<FishInfoVO> fishInfoList;

    @ApiModelProperty("鱼的阵型列表")
    List<FishFormation> formationList;

    public List<FishInfoVO> getFishInfoList() {
        return fishInfoList;
    }

    public void setFishInfoList(List<FishInfoVO> fishInfoList) {
        this.fishInfoList = fishInfoList;
    }

    public List<FishFormation> getFormationList() {
        return formationList;
    }

    public void setFormationList(List<FishFormation> formationList) {
        this.formationList = formationList;
    }
}
