#   添加 username 索引
create index game_user_brokerage_record_106_username_index on game_user_brokerage_record_106 (username);
create index game_user_brokerage_record_109_username_index on game_user_brokerage_record_109 (username);


#  新增用户层级id 字段
alter table game_user_brokerage_record_106 add level_id bigint null comment '用户层级ID' after username;
alter table game_user_brokerage_record_109 add level_id bigint null comment '用户层级ID' after username;

#  新增  用户层级id  字段
alter table game_user_bet_stats_106 add level_id bigint null comment '用户层级id' after username;
alter table game_user_bet_stats_109 add level_id bigint null comment '用户层级id' after username;    

#  新增  用户层级id  字段
alter table game_user_brokerage_stats_106 add level_id bigint null comment '用户层级id' after username;
alter table game_user_brokerage_stats_109 add level_id bigint null comment '用户层级id' after username;