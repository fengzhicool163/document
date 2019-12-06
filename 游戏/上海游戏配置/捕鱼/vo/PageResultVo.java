package com.mx.game.ms.fish.api.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.apache.commons.lang3.builder.ToStringBuilder;

import java.util.List;

/**
 * 统一查询分页输出
 *
 * @author XuYiWen
 */
@ApiModel(value = "返回分页信息")
public class PageResultVo<T> {

    @ApiModelProperty(value = "当前页")
    private final Integer currentPage;

    @ApiModelProperty(value = "每页数量")
    private final Integer pageSize;

    @ApiModelProperty(value = "总条数")
    private final Long total;

    @ApiModelProperty(value = "总页数")
    private final Long totalPage;

    @ApiModelProperty(value = "数据")
    private final List<T> infos;

    public PageResultVo(Integer currentPage, Integer pageSize, Long total, List<T> data) {
        this(currentPage, pageSize, total, ((total + pageSize - 1) / pageSize), data);
    }

    public PageResultVo(Integer currentPage, Integer pageSize, Long total, Long totalPage, List<T> data) {
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.total = total;
        this.totalPage = totalPage;
        this.infos = data;
    }

    public Integer getCurrentPage() {
        return currentPage;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public Long getTotal() {
        return total;
    }

    public Long getTotalPage() {
        return totalPage;
    }

    public List<T> getInfos() {
        return infos;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("currentPage", currentPage)
                .append("pageSize", pageSize)
                .append("total", total)
                .append("totalPage", totalPage)
                .append("infos", infos)
                .toString();
    }

}