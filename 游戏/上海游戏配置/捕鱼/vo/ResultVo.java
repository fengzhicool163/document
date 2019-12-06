package com.mx.game.ms.fish.api.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 返回客户端统一消息格式
 *
 * @param <T> 消息内容
 */
@ApiModel(value = "通用返回客户端信息")
public class ResultVo<T> {
    @ApiModelProperty(value = "返回编码", notes = "0:处理正常；反之处理异常")
    private final int code;

    @ApiModelProperty(value = "错误信息")
    private final String messages;

    @ApiModelProperty(value = "处理结果")
    private final T data;

    private ResultVo(int code, String messages, T rs) {
        this.code = code;
        this.messages = messages;
        this.data = rs;
    }

    public int getCode() {
        return code;
    }

    public String getMessages() {
        return messages;
    }

    public T getData() {
        return data;
    }

    public static <T> ResultVo<T> success(T t){
        return new ResultVo<>(0, "", t);
    }

    public static <T> ResultVo<T> error(int code, String messages){
        return new ResultVo<>(code, messages, null);
    }

    public static <T> ResultVo<T> error(List<ObjectError> errors){
        String messages = errors.stream().map(ResultVo::buildMessage).collect(Collectors.joining(";"));
        return error(1000, messages);
    }

    private static String buildMessage(ObjectError error){
        return (error instanceof FieldError)?
                ((FieldError)error).getField() + "=" + error.getDefaultMessage():
                error.getDefaultMessage();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("code", code)
                .append("messages", messages)
                .append("data", data)
                .toString();
    }
}
