package com.mx.game.ms.fish.api.vo;

import com.mx.game.ms.fish.model.FishDropGroup;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@ApiModel("渔场道具掉落信息配置")
public class FishDropVO {
    /**
     * 掉落机制id
     */
    @ApiModelProperty("掉落机制id")
    private Long dropId;

    /**
     * 掉落机制名称
     */
    @ApiModelProperty("掉落机制名称")
    private String dropName;
    /**
     * 鱼ID多个用逗号分隔
     */
    @ApiModelProperty("鱼ID多个用逗号分隔")
    private String fishIds;

    /**
     * 掉落组 id多个用逗号分隔
     */
    @ApiModelProperty("掉落组 id多个用逗号分隔")
    private String dropGroupIds;
    /**
     * 道具掉落组集合列表
     */
    @ApiModelProperty("道具掉落组集合列表")
    private List<FishDropGroup> dropGroupList;

    /**
     * 掉落概率
     */
    @ApiModelProperty("掉落概率%")
    private Integer dropRate;

    /**
     * 取 掉落机制id
     *
     * @return
     */
    public Long getDropId() {
        return dropId;
    }

    /**
     * 赋值  掉落机制id
     *
     * @param dropId
     */
    public void setDropId(Long dropId) {
        this.dropId = dropId;
    }

    /**
     * 取 鱼ID多个用逗号分隔
     *
     * @return
     */
    public String getFishIds() {
        return fishIds;
    }

    /**
     * 赋值  鱼ID多个用逗号分隔
     *
     * @param fishIds
     */
    public void setFishIds(String fishIds) {
        this.fishIds = fishIds == null ? null : fishIds.trim();
    }

    /**
     * 取 掉落组 id多个用逗号分隔
     *
     * @return
     */
    public String getDropGroupIds() {
        return dropGroupIds;
    }

    /**
     * 赋值  掉落组 id多个用逗号分隔
     *
     * @param dropGroupIds
     */
    public void setDropGroupIds(String dropGroupIds) {
        this.dropGroupIds = dropGroupIds == null ? null : dropGroupIds.trim();
    }

    /**
     * 取 掉落概率
     *
     * @return
     */
    public Integer getDropRate() {
        return dropRate;
    }

    /**
     * 赋值  掉落概率
     *
     * @param dropRate
     */
    public void setDropRate(Integer dropRate) {
        this.dropRate = dropRate;
    }

    public String getDropName() {
        return dropName;
    }

    public void setDropName(String dropName) {
        this.dropName = dropName;
    }

    public List<FishDropGroup> getDropGroupList() {
        return dropGroupList;
    }

    public void setDropGroupList(List<FishDropGroup> dropGroupList) {
        this.dropGroupList = dropGroupList;
    }

    public FishDropVO() {
    }

    @Override
    public String toString() {
        return "FishDropVO{" +
                "dropId=" + dropId +
                ", dropName='" + dropName + '\'' +
                ", fishIds='" + fishIds + '\'' +
                ", dropGroupIds='" + dropGroupIds + '\'' +
                ", dropGroupList=" + dropGroupList +
                ", dropRate=" + dropRate +
                '}';
    }
}
