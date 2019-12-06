package com.mx.game.ms.fish.api.vo;

import io.swagger.annotations.ApiModelProperty;

public class OkVo {

    @ApiModelProperty(value = "操作是否成功")
    private static boolean ok;

    public OkVo(boolean ok) {
        this.ok = ok;
    }

    public boolean isOk() {
        return ok;
    }

    /**
     * 根据更新插入记录返回操作状态
     * @param rs
     * @return
     */
    public static OkVo isSucceed(Integer rs){

        return new OkVo(rs!=null && rs.intValue()>0);
    }
}
