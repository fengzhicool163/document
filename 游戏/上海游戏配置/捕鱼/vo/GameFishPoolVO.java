package com.mx.game.ms.fish.api.vo;

import com.mx.game.ms.fish.model.FishPool;
import com.mx.game.ms.fish.model.FishPoolReward;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;
@ApiModel("水池返奖率配置信息")
public class GameFishPoolVO {
    @ApiModelProperty("渔场水池配置信息")
    private List<FishPool> fishPoolList;

    @ApiModelProperty("水池返奖率配置信息")
    private List<FishPoolReward> fishPoolRewardList;

    public List<FishPool> getFishPoolList() {
        return fishPoolList;
    }

    public void setFishPoolList(List<FishPool> fishPoolList) {
        this.fishPoolList = fishPoolList;
    }

    public List<FishPoolReward> getFishPoolRewardList() {
        return fishPoolRewardList;
    }

    public void setFishPoolRewardList(List<FishPoolReward> fishPoolRewardList) {
        this.fishPoolRewardList = fishPoolRewardList;
    }

    @Override
    public String toString() {
        return "GameFishPoolVO{" +
                "fishPoolList=" + fishPoolList +
                ", fishPoolRewardList=" + fishPoolRewardList +
                '}';
    }
}
