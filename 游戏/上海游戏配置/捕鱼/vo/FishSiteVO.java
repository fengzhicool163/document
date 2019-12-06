package com.mx.game.ms.fish.api.vo;

import com.mx.game.ms.fish.model.FishSite;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@ApiModel("渔场配置信息")
public class FishSiteVO extends FishSite {

	/**
	 * 刷新间隔（秒）
	 */
    @NotNull(message = "刷新间隔不能为空")
	@ApiModelProperty("刷新间隔（秒）")
    private Long refrIntervalTime;

	/**
	 * 鱼类刷新权重:刷新规则：
 1- 刷新时，先根据渔场id，来判定刷新哪种类型的鱼，随后根据类型来计算权重，刷新哪一条鱼
 2- 初始刷新时，必须要满足指定的品种
 3- 刷新鱼权重公式：刷新时根据单个鱼的权重/总权重得出单个鱼的刷新率
	 */
    @NotNull(message = "鱼类刷新权重不能为空")
	@ApiModelProperty("鱼类刷新权重:刷新规则,用数字表示")
    private String refrLevel;

	/**
	 * 初始刷新品种:7
	 */
    @NotNull(message = "初始刷新品种不能为空")
	@ApiModelProperty("初始刷新品种,用数字表示")
    private Integer initVariety;

	/**
	 * 刷新数量:100
	 */
    @NotNull(message = "刷新数量不能为空")
	@ApiModelProperty("刷新数量")
    private Integer refrNums;


    public Long getRefrIntervalTime() {
        return refrIntervalTime;
    }

    public void setRefrIntervalTime(Long refrIntervalTime) {
        this.refrIntervalTime = refrIntervalTime;
    }

    public String getRefrLevel() {
        return refrLevel;
    }

    public void setRefrLevel(String refrLevel) {
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

    @Override
    public String toString() {
        return "FishSiteVO{" +
                "refrIntervalTime=" + refrIntervalTime +
                ", refrLevel='" + refrLevel + '\'' +
                ", initVariety=" + initVariety +
                ", refrNums=" + refrNums +
                "} " + super.toString();
    }
}
