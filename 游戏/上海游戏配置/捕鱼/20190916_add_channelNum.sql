ALTER TABLE `gcenter`.`fish_pool_reward` 
ADD COLUMN `id` int(11) NOT NULL FIRST,
ADD COLUMN `channel_num` varchar(20) NOT NULL COMMENT '业主ID' AFTER `update_time`,
ADD PRIMARY KEY (`id`) USING BTREE;

ALTER TABLE `gcenter`.`fish_pool` 
ADD COLUMN `channel_num` varchar(20) NOT NULL COMMENT '业主ID' AFTER `update_time`,
ADD COLUMN `id` int(11) NOT NULL FIRST,
ADD PRIMARY KEY (`id`) USING BTREE;

UPDATE gcenter.fish_pool set channel_num = 1;
UPDATE gcenter.fish_pool_reward set channel_num = 1;