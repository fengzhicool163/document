alter table game_stats_daily
	add player_bet_total decimal(13,4) null comment '总打码量
' after final_player_output_total;