package com.mx.game.ms.fish.api.vo;

import com.mx.game.ms.fish.model.FishBattery;
import com.mx.game.ms.fish.model.FishBatteryRate;
import com.mx.game.ms.fish.model.FishProp;
import com.mx.game.ms.fish.model.FishSkill;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;
@ApiModel("游戏配置-炮台配置关联信息")
public class GameFishBatteryVO {
    @ApiModelProperty("捕鱼道具列表")
    private List<FishProp> fishProps;
    @ApiModelProperty("捕鱼炮台倍率列表")
    private List<FishBatteryRate> fishBatteryRates;
    @ApiModelProperty("捕鱼炮台信息列表")
    private List<FishBattery> fishBatteries;
    @ApiModelProperty("技能列表")
    private List<FishSkill> fishSkills;

    public List<FishProp> getFishProps() {
        return fishProps;
    }

    public void setFishProps(List<FishProp> fishProps) {
        this.fishProps = fishProps;
    }

    public List<FishBatteryRate> getFishBatteryRates() {
        return fishBatteryRates;
    }

    public void setFishBatteryRates(List<FishBatteryRate> fishBatteryRates) {
        this.fishBatteryRates = fishBatteryRates;
    }

    public List<FishBattery> getFishBatteries() {
        return fishBatteries;
    }

    public void setFishBatteries(List<FishBattery> fishBatteries) {
        this.fishBatteries = fishBatteries;
    }

    public List<FishSkill> getFishSkills() {
        return fishSkills;
    }

    public void setFishSkills(List<FishSkill> fishSkills) {
        this.fishSkills = fishSkills;
    }
}
