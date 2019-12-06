use gcenter;

-- ----------------------------
-- Table structure for fish_battery
-- ----------------------------
DROP TABLE IF EXISTS `fish_battery`;
CREATE TABLE `fish_battery` (
  `battery_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '炮台id',
  `battery_name` varchar(20) DEFAULT NULL COMMENT '名称',
  `start_cond` int(11) DEFAULT NULL COMMENT '开启条件',
  `skill_id` varchar(100) DEFAULT NULL COMMENT '技能ID多个逗号分隔',
  `bullet_speed` int(4) DEFAULT NULL COMMENT '子弹速度',
  `send_interval` bigint(20) DEFAULT NULL COMMENT '发射间隔',
  `rebound_nums` int(4) DEFAULT NULL COMMENT '反弹次数 ',
  `consu_gold` bigint(20) DEFAULT NULL COMMENT '消耗金币',
  `catch_radii` int(11) DEFAULT NULL COMMENT '捕捉半径',
  `catch_max` int(11) DEFAULT NULL COMMENT '单次最大捕捉数',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`battery_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='炮台属性表';

-- ----------------------------
-- Records of fish_battery
-- ----------------------------
INSERT INTO `fish_battery` VALUES ('1', '皓光', '0', 'skill005,skill006,skill007', '600', '200', '999999', '1', '50', '1', '2019-07-02 17:28:18', '2019-07-02 17:28:18');

-- ----------------------------
-- Table structure for fish_battery_rate
-- ----------------------------
DROP TABLE IF EXISTS `fish_battery_rate`;
CREATE TABLE `fish_battery_rate` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `multiple` int(11) unsigned zerofill DEFAULT NULL COMMENT '炮台倍数',
  `nums` double(10,2) unsigned zerofill DEFAULT NULL COMMENT '系数',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='炮台倍率配置表';

-- ----------------------------
-- Records of fish_battery_rate
-- ----------------------------

-- ----------------------------
-- Table structure for fish_boss
-- ----------------------------
DROP TABLE IF EXISTS `fish_boss`;
CREATE TABLE `fish_boss` (
  `boss_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'boss鱼机制id ',
  `boss_name` varchar(20) DEFAULT NULL COMMENT 'boss鱼机制名称',
  `consume_coins` bigint(20) DEFAULT NULL COMMENT '累计消耗鱼币 ',
  `damp_nums` int(11) DEFAULT NULL COMMENT '鱼潮次数 ',
  `refr_interval_time` bigint(20) DEFAULT NULL COMMENT '刷新间隔(秒) ',
  `kill_coin_award` bigint(20) DEFAULT NULL COMMENT '完美击杀鱼币奖励 ',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`boss_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='BOSS鱼机制表';

-- ----------------------------
-- Records of fish_boss
-- ----------------------------
INSERT INTO `fish_boss` VALUES ('1', '新手场', '100000', '2', '180', '10000', '2019-07-02 16:38:55', '2019-07-02 16:38:55');
INSERT INTO `fish_boss` VALUES ('2', '初级场', '500000', '2', '180', '50000', '2019-07-02 19:29:14', '2019-07-02 19:29:14');
INSERT INTO `fish_boss` VALUES ('3', '中级场', '1500000', '2', '180', '150000', '2019-07-02 19:29:36', '2019-07-02 19:29:36');
INSERT INTO `fish_boss` VALUES ('4', '高级场', '3500000', '2', '180', '350000', '2019-07-02 19:29:54', '2019-07-02 19:29:54');
INSERT INTO `fish_boss` VALUES ('6', '测试', '99999999', '1', '30', '100', '2019-07-10 14:51:15', '2019-07-10 14:51:15');

-- ----------------------------
-- Table structure for fish_damp
-- ----------------------------
DROP TABLE IF EXISTS `fish_damp`;
CREATE TABLE `fish_damp` (
  `damp_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '鱼潮ID',
  `damp_name` varchar(20) DEFAULT NULL COMMENT '鱼潮机制名称',
  `consu_fish_coins` bigint(20) DEFAULT NULL COMMENT '累计消耗鱼币',
  `refr_interval_time` bigint(20) DEFAULT NULL COMMENT '刷新间隔',
  `track_list` text COMMENT '鱼潮轨迹集合 例：[{"lineId":1,"fishIds":"23,456,466"}]',
  `suffer_award` bigint(20) DEFAULT NULL COMMENT '完美击杀经验奖励',
  `fish_coin_award` bigint(20) DEFAULT NULL COMMENT '完美击杀鱼币奖励',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`damp_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='鱼潮机制表';

-- ----------------------------
-- Records of fish_damp
-- ----------------------------
INSERT INTO `fish_damp` VALUES ('2', '新手场', '100000', '7', '[{\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\",\"lineId\":\"Traj036\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish020\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish020\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish114\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish117\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Boss001\"}]', '0', '10000', '2019-07-02 19:36:57', '2019-07-02 19:36:57');
INSERT INTO `fish_damp` VALUES ('3', '初级场', '500000', '7', '[{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish020,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish020\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish114\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish117\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Boss002,Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"}]', '0', '50000', '2019-07-02 19:37:52', '2019-07-02 19:37:52');
INSERT INTO `fish_damp` VALUES ('4', '中级场', '1500000', '7', '[{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish020\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish020\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish114\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish119\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Boss003,Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"}]', '0', '150000', '2019-07-02 19:38:10', '2019-07-02 19:38:10');
INSERT INTO `fish_damp` VALUES ('5', '高级场', '3500000', '7', '[{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish020\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish020\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish114\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish117\"},{\"lineId\":\"Traj036\",\"fishIds\":\"Boss004,Fish001,Fish004,Fish006,Fish009,Fish010,Fish014\"}]', '0', '350000', '2019-07-02 19:38:49', '2019-07-02 19:38:49');
INSERT INTO `fish_damp` VALUES ('1001', '测试一', '1000', '30', '[{\"lineId\":\"Traj005\",\"fishIds\":\"Fish006\"}]', '100', '1000', '2019-07-02 16:58:03', '2019-07-02 16:58:03');

-- ----------------------------
-- Table structure for fish_damp_track
-- ----------------------------
DROP TABLE IF EXISTS `fish_damp_track`;
CREATE TABLE `fish_damp_track` (
  `track_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '轨迹id',
  `track_name` varchar(20) DEFAULT NULL COMMENT '鱼潮轨迹名称',
  `track_code` int(11) DEFAULT NULL COMMENT '轨迹code，可用数字表示',
  `fish_ids` varchar(200) DEFAULT NULL COMMENT '鱼id，多个用逗号分隔',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`track_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='鱼潮轨迹表';

-- ----------------------------
-- Records of fish_damp_track
-- ----------------------------

-- ----------------------------
-- Table structure for fish_drop
-- ----------------------------
DROP TABLE IF EXISTS `fish_drop`;
CREATE TABLE `fish_drop` (
  `drop_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '掉落机制id',
  `drop_name` varchar(20) DEFAULT NULL COMMENT '掉落机制名称',
  `fish_ids` varchar(200) DEFAULT NULL COMMENT '鱼ID多个用逗号分隔',
  `drop_group_ids` varchar(100) DEFAULT NULL COMMENT '掉落组 id多个用逗号分隔',
  `drop_rate` int(11) DEFAULT NULL COMMENT '掉落概率',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`drop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='渔场道具掉落表';

-- ----------------------------
-- Records of fish_drop
-- ----------------------------

-- ----------------------------
-- Table structure for fish_drop_group
-- ----------------------------
DROP TABLE IF EXISTS `fish_drop_group`;
CREATE TABLE `fish_drop_group` (
  `group_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '组id',
  `group_name` varchar(20) DEFAULT NULL COMMENT '掉落组名称',
  `prop_id` bigint(20) DEFAULT NULL COMMENT '道具id',
  `prop_nums` int(11) DEFAULT NULL COMMENT '道具掉落数量',
  `prop_drop_level` int(11) DEFAULT NULL COMMENT '道具掉落权重',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='掉落组相关表';

-- ----------------------------
-- Records of fish_drop_group
-- ----------------------------

-- ----------------------------
-- Table structure for fish_formation
-- ----------------------------
DROP TABLE IF EXISTS `fish_formation`;
CREATE TABLE `fish_formation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `format_name` varchar(20) DEFAULT NULL COMMENT '阵型名称',
  `sort_type` varchar(100) DEFAULT NULL COMMENT '排序方式',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8 COMMENT='鱼的阵型表';

-- ----------------------------
-- Records of fish_formation
-- ----------------------------
INSERT INTO `fish_formation` VALUES ('1', '阵型1144', '1144', '2019-07-02 14:46:21', '2019-07-02 14:46:21');
INSERT INTO `fish_formation` VALUES ('2', '阵型1234', '1234', '2019-07-02 14:46:53', '2019-07-02 14:46:53');
INSERT INTO `fish_formation` VALUES ('3', '阵型1243', '1243', '2019-07-02 14:47:01', '2019-07-02 14:47:01');
INSERT INTO `fish_formation` VALUES ('4', '阵型1324', '1324', '2019-07-02 14:47:07', '2019-07-02 14:47:07');
INSERT INTO `fish_formation` VALUES ('5', '阵型1333', '1333', '2019-07-02 14:47:12', '2019-07-02 14:47:12');
INSERT INTO `fish_formation` VALUES ('6', '阵型1342', '1342', '2019-07-02 14:47:19', '2019-07-02 14:47:19');
INSERT INTO `fish_formation` VALUES ('7', '阵型1441', '1441', '2019-07-02 14:47:26', '2019-07-02 14:47:26');
INSERT INTO `fish_formation` VALUES ('8', '阵型2134', '2134', '2019-07-02 14:47:32', '2019-07-02 14:47:32');
INSERT INTO `fish_formation` VALUES ('9', '阵型2143', '2143', '2019-07-02 14:47:38', '2019-07-02 14:47:38');
INSERT INTO `fish_formation` VALUES ('10', '阵型2224', '2224', '2019-07-02 14:47:44', '2019-07-02 14:47:44');
INSERT INTO `fish_formation` VALUES ('11', '阵型2233', '2233', '2019-07-02 14:47:49', '2019-07-02 14:47:49');
INSERT INTO `fish_formation` VALUES ('12', '阵型2242', '2242', '2019-07-02 14:47:54', '2019-07-02 14:47:54');
INSERT INTO `fish_formation` VALUES ('13', '阵型2314', '2314', '2019-07-02 14:48:00', '2019-07-02 14:48:00');
INSERT INTO `fish_formation` VALUES ('14', '阵型2323', '2323', '2019-07-02 14:48:06', '2019-07-02 14:48:06');
INSERT INTO `fish_formation` VALUES ('15', '阵型2332', '2332', '2019-07-02 14:48:12', '2019-07-02 14:48:12');
INSERT INTO `fish_formation` VALUES ('16', '阵型2341', '2341', '2019-07-02 14:48:18', '2019-07-02 14:48:18');
INSERT INTO `fish_formation` VALUES ('17', '阵型2413', '2413', '2019-07-02 14:48:24', '2019-07-02 14:48:24');
INSERT INTO `fish_formation` VALUES ('18', '阵型2422', '2422', '2019-07-02 14:48:30', '2019-07-02 14:48:30');
INSERT INTO `fish_formation` VALUES ('19', '阵型2431', '2431', '2019-07-02 14:48:35', '2019-07-02 14:48:35');
INSERT INTO `fish_formation` VALUES ('20', '阵型3142', '3142', '2019-07-02 14:48:43', '2019-07-02 14:48:43');
INSERT INTO `fish_formation` VALUES ('21', '阵型3133', '3133', '2019-07-02 14:48:51', '2019-07-02 14:48:51');
INSERT INTO `fish_formation` VALUES ('22', '阵型3124', '3124', '2019-07-02 14:48:59', '2019-07-02 14:48:59');
INSERT INTO `fish_formation` VALUES ('23', '阵型3214', '3214', '2019-07-02 14:49:06', '2019-07-02 14:49:06');
INSERT INTO `fish_formation` VALUES ('24', '阵型3223', '3223', '2019-07-02 14:49:12', '2019-07-02 14:49:12');
INSERT INTO `fish_formation` VALUES ('25', '阵型3232', '3232', '2019-07-02 14:49:18', '2019-07-02 14:49:18');
INSERT INTO `fish_formation` VALUES ('26', '阵型3241', '3241', '2019-07-02 14:49:25', '2019-07-02 14:49:25');
INSERT INTO `fish_formation` VALUES ('27', '阵型3331', '3331', '2019-07-02 14:49:33', '2019-07-02 14:49:33');
INSERT INTO `fish_formation` VALUES ('28', '阵型3322', '3322', '2019-07-02 14:49:42', '2019-07-02 14:49:42');
INSERT INTO `fish_formation` VALUES ('29', '阵型3313', '3313', '2019-07-02 14:49:51', '2019-07-02 14:49:51');
INSERT INTO `fish_formation` VALUES ('30', '阵型3412', '3412', '2019-07-02 14:49:59', '2019-07-02 14:49:59');
INSERT INTO `fish_formation` VALUES ('31', '阵型3421', '3421', '2019-07-02 14:50:08', '2019-07-02 14:50:08');
INSERT INTO `fish_formation` VALUES ('32', '阵型4411', '4411', '2019-07-02 14:50:21', '2019-07-02 14:50:21');
INSERT INTO `fish_formation` VALUES ('33', '阵型4321', '4321', '2019-07-02 14:50:34', '2019-07-02 14:50:34');
INSERT INTO `fish_formation` VALUES ('34', '阵型4312', '4312', '2019-07-02 14:50:43', '2019-07-02 14:50:43');
INSERT INTO `fish_formation` VALUES ('35', '阵型4213', '4213', '2019-07-02 14:50:50', '2019-07-02 14:50:50');
INSERT INTO `fish_formation` VALUES ('36', '阵型4222', '4222', '2019-07-02 14:51:05', '2019-07-02 14:51:05');
INSERT INTO `fish_formation` VALUES ('37', '阵型4231', '4231', '2019-07-02 14:51:17', '2019-07-02 14:51:17');
INSERT INTO `fish_formation` VALUES ('38', '阵型4141', '4141', '2019-07-02 14:51:25', '2019-07-02 14:51:25');
INSERT INTO `fish_formation` VALUES ('39', '阵型4132', '4132', '2019-07-02 14:51:32', '2019-07-02 14:51:32');
INSERT INTO `fish_formation` VALUES ('40', '阵型4123', '4123', '2019-07-02 14:51:42', '2019-07-02 14:51:42');
INSERT INTO `fish_formation` VALUES ('41', '阵型4114', '4114', '2019-07-02 14:51:48', '2019-07-02 14:51:48');
INSERT INTO `fish_formation` VALUES ('42', '阵型1340', '134', '2019-07-02 14:51:57', '2019-07-02 14:51:57');
INSERT INTO `fish_formation` VALUES ('43', '阵型1430', '143', '2019-07-02 14:52:03', '2019-07-02 14:52:03');
INSERT INTO `fish_formation` VALUES ('44', '阵型2240', '224', '2019-07-02 14:52:10', '2019-07-02 14:52:10');
INSERT INTO `fish_formation` VALUES ('45', '阵型2330', '233', '2019-07-02 14:52:17', '2019-07-02 14:52:17');
INSERT INTO `fish_formation` VALUES ('46', '阵型2420', '242', '2019-07-02 14:52:23', '2019-07-02 14:52:23');
INSERT INTO `fish_formation` VALUES ('47', '阵型3140', '314', '2019-07-02 14:52:29', '2019-07-02 14:52:29');
INSERT INTO `fish_formation` VALUES ('48', '阵型3230', '323', '2019-07-02 14:52:37', '2019-07-02 14:52:37');
INSERT INTO `fish_formation` VALUES ('49', '阵型3320', '332', '2019-07-02 14:52:43', '2019-07-02 14:52:43');
INSERT INTO `fish_formation` VALUES ('50', '阵型4310', '431', '2019-07-02 14:52:52', '2019-07-02 14:52:52');
INSERT INTO `fish_formation` VALUES ('51', '阵型4220', '422', '2019-07-02 14:52:58', '2019-07-02 14:52:58');
INSERT INTO `fish_formation` VALUES ('52', '阵型4130', '413', '2019-07-02 14:53:04', '2019-07-02 14:53:04');
INSERT INTO `fish_formation` VALUES ('53', '阵型1140', '114', '2019-07-02 14:53:14', '2019-07-02 14:53:14');
INSERT INTO `fish_formation` VALUES ('54', '阵型1230', '123', '2019-07-02 14:53:24', '2019-07-02 14:53:24');
INSERT INTO `fish_formation` VALUES ('55', '阵型1320', '132', '2019-07-02 14:53:30', '2019-07-02 14:53:30');
INSERT INTO `fish_formation` VALUES ('56', '阵型1410', '141', '2019-07-02 14:53:37', '2019-07-02 14:53:37');
INSERT INTO `fish_formation` VALUES ('57', '阵型2130', '213', '2019-07-02 14:53:44', '2019-07-02 14:53:44');
INSERT INTO `fish_formation` VALUES ('58', '阵型2220', '222', '2019-07-02 14:53:50', '2019-07-02 14:53:50');
INSERT INTO `fish_formation` VALUES ('59', '阵型2310', '231', '2019-07-02 14:53:56', '2019-07-02 14:53:56');
INSERT INTO `fish_formation` VALUES ('60', '阵型3120', '312', '2019-07-02 14:54:04', '2019-07-02 14:54:04');
INSERT INTO `fish_formation` VALUES ('61', '阵型3210', '321', '2019-07-02 14:54:10', '2019-07-02 14:54:10');
INSERT INTO `fish_formation` VALUES ('62', '阵型1210', '121', '2019-07-02 14:54:18', '2019-07-02 14:54:18');
INSERT INTO `fish_formation` VALUES ('63', '阵型2110', '211', '2019-07-02 14:54:25', '2019-07-02 14:54:25');
INSERT INTO `fish_formation` VALUES ('64', '阵型1300', '13', '2019-07-02 14:54:31', '2019-07-02 14:54:31');
INSERT INTO `fish_formation` VALUES ('65', '阵型2200', '22', '2019-07-02 14:54:40', '2019-07-02 14:54:40');
INSERT INTO `fish_formation` VALUES ('66', '阵型3100', '31', '2019-07-02 14:54:47', '2019-07-02 14:54:47');
INSERT INTO `fish_formation` VALUES ('67', '阵型4000', '4', '2019-07-02 14:54:54', '2019-07-02 14:54:54');
INSERT INTO `fish_formation` VALUES ('68', '阵型1000', '1', '2019-07-02 14:55:02', '2019-07-02 14:55:02');

-- ----------------------------
-- Table structure for fish_info
-- ----------------------------
DROP TABLE IF EXISTS `fish_info`;
CREATE TABLE `fish_info` (
  `fish_id` varchar(20) NOT NULL COMMENT '鱼ID',
  `fish_name` varchar(20) NOT NULL COMMENT '鱼名称',
  `vals` bigint(20) DEFAULT NULL COMMENT '鱼的价值',
  `hit_rate` int(11) DEFAULT NULL COMMENT '鱼的速度',
  `appear_rate` int(11) DEFAULT NULL COMMENT '鱼的捕获率',
  `max_catch_nums` int(11) DEFAULT NULL COMMENT '鱼的最大捕获次数',
  `refresh_level` int(4) DEFAULT NULL COMMENT '刷新权重',
  `refresh_nums` int(11) DEFAULT NULL COMMENT '刷新数量',
  `refresh_gap` bigint(20) DEFAULT NULL COMMENT '刷新间隔',
  `survive_time` bigint(20) DEFAULT NULL COMMENT '鱼的存活时间（秒）',
  `fish_type` int(4) DEFAULT NULL COMMENT '鱼的类型,1- 普通鱼 2- BOSS鱼 3- 特殊鱼',
  `volume` int(4) DEFAULT NULL COMMENT '体积,用数字表示，每一个数字代表一种类型 单位：像素 1- 微型鱼:50*50 2- 小型鱼:80*80 3- 中型鱼:120*120 4- 大型鱼:180*180 5- 巨型鱼:250*250',
  `formation_ids` varchar(200) DEFAULT NULL COMMENT '阵型ID',
  `drop_ids` varchar(200) DEFAULT NULL COMMENT '鱼场掉落机制表id多个,用逗号分隔 ',
  `path_line` varchar(100) DEFAULT NULL COMMENT '轨迹，数字代替多个用逗号分隔',
  `skill_id` varchar(100) DEFAULT NULL COMMENT '技能ID多个逗号分隔',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`fish_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='鱼属性信息表';

-- ----------------------------
-- Records of fish_info
-- ----------------------------
INSERT INTO `fish_info` VALUES ('Boss001', '黄金巨齿鲨', '100', '20', '10', '999', '10', '1', '60', '200', '1', '5', '', null, 'Traj036', '', '2019-07-03 20:00:26', '2019-07-19 13:58:46');
INSERT INTO `fish_info` VALUES ('Boss002', '黄金蓝鲸', '200', '20', '7', '999', '10', '1', '60', '200', '1', '5', '', null, 'Traj036', '', '2019-07-04 09:42:33', '2019-07-19 13:58:49');
INSERT INTO `fish_info` VALUES ('Boss003', '黄金大乌贼', '300', '20', '6', '999', '10', '1', '60', '200', '1', '5', '', null, 'Traj036', '', '2019-07-04 09:43:06', '2019-07-19 13:58:54');
INSERT INTO `fish_info` VALUES ('Boss004', '黄金大水母', '400', '20', '5', '999', '10', '1', '60', '200', '1', '5', '', null, 'Traj036', '', '2019-07-04 09:44:34', '2019-07-19 15:31:59');
INSERT INTO `fish_info` VALUES ('Boss005', '猪八戒', '400', '10', '5', '9999', '999', '1', '180', '200', '2', '5', '', null, 'Traj007', 'skill002', '2019-07-04 09:45:44', '2019-07-18 11:58:28');
INSERT INTO `fish_info` VALUES ('Boss006', '沙僧', '400', '10', '5', '9999', '999', '1', '180', '200', '2', '5', '', null, 'Traj007', 'skill002', '2019-07-04 09:46:20', '2019-08-02 16:44:29');
INSERT INTO `fish_info` VALUES ('Boss007', '唐僧', '400', '10', '5', '99999', '999', '1', '180', '200', '2', '5', '', null, 'Traj007', 'skill002', '2019-07-04 09:46:50', '2019-08-03 09:27:12');
INSERT INTO `fish_info` VALUES ('Boss008', '孙悟空', '400', '10', '5', '99999', '999', '1', '180', '200', '2', '5', '', null, 'Traj007', 'skill002', '2019-07-04 09:47:25', '2019-07-25 14:34:56');
INSERT INTO `fish_info` VALUES ('Fish001', '小黄鱼', '1', '90', '99', '9', '50', '10', '60', '200', '1', '1', '2', null, 'Traj037', '', '2019-07-02 16:15:25', '2019-08-05 16:12:36');
INSERT INTO `fish_info` VALUES ('Fish004', '孔雀鱼', '2', '75', '70', '999', '45', '10', '60', '200', '1', '1', '37', null, 'Traj038', '', '2019-07-02 16:17:34', '2019-07-19 14:01:16');
INSERT INTO `fish_info` VALUES ('Fish006', '蝴蝶鱼', '2', '75', '70', '999', '40', '8', '60', '200', '1', '2', '45', null, 'Traj039', '', '2019-07-02 16:19:53', '2019-07-19 13:56:46');
INSERT INTO `fish_info` VALUES ('Fish009', '神仙鱼', '3', '60', '58', '99', '35', '6', '60', '200', '1', '2', '58', null, 'Traj041', '', '2019-07-03 09:56:46', '2019-07-19 13:56:55');
INSERT INTO `fish_info` VALUES ('Fish010', '狮子鱼', '4', '50', '50', '99', '30', '4', '60', '200', '1', '3', '66', null, 'Traj042', '', '2019-07-03 10:14:20', '2019-07-24 15:01:55');
INSERT INTO `fish_info` VALUES ('Fish014', '海龟', '6', '40', '40', '99', '25', '2', '60', '200', '1', '3', '', null, 'Traj040', '', '2019-07-03 10:33:11', '2019-07-19 13:57:38');
INSERT INTO `fish_info` VALUES ('Fish019', '翻车鱼', '12', '40', '29', '99', '20', '1', '60', '200', '1', '4', '', null, 'Traj001', '', '2019-07-03 10:39:40', '2019-07-19 14:09:18');
INSERT INTO `fish_info` VALUES ('Fish020', '双髻鲨', '18', '30', '24', '999', '15', '1', '60', '200', '1', '4', '', null, 'Traj002', '', '2019-07-03 13:52:35', '2019-07-19 13:58:07');
INSERT INTO `fish_info` VALUES ('Fish023', '炸弹鱼', '12', '30', '29', '99', '15', '1', '60', '200', '3', '3', '', null, 'Traj041', 'skill001', '2019-07-04 14:38:21', '2019-07-30 10:23:25');
INSERT INTO `fish_info` VALUES ('Fish024', '冰冻鱼', '30', '30', '18', '99', '5', '1', '60', '200', '3', '3', '', null, 'Traj003', 'skill004', '2019-07-04 14:39:06', '2019-07-30 09:55:57');
INSERT INTO `fish_info` VALUES ('Fish025', '鱼王', '20', '30', '22', '99', '15', '1', '60', '200', '3', '3', '', null, 'Traj006', 'skill006', '2019-07-04 14:39:48', '2019-08-24 17:12:12');
INSERT INTO `fish_info` VALUES ('Fish114', '黄金海龟', '25', '35', '20', '99', '20', '1', '60', '200', '3', '3', '', null, 'Traj003', '', '2019-07-04 09:26:41', '2019-07-19 13:58:18');
INSERT INTO `fish_info` VALUES ('Fish117', '黄金鸭嘴鱼', '35', '30', '17', '99', '30', '1', '60', '200', '3', '4', '', null, 'Traj005', '', '2019-07-04 09:37:28', '2019-07-19 13:58:29');
INSERT INTO `fish_info` VALUES ('Fish119', '黄金翻车鱼', '60', '25', '13', '99', '10', '1', '60', '200', '3', '4', '', null, 'Traj004', '', '2019-07-04 09:38:49', '2019-07-19 13:58:38');

-- ----------------------------
-- Table structure for fish_pool
-- ----------------------------
DROP TABLE IF EXISTS `fish_pool`;
CREATE TABLE `fish_pool` (
  `site_id` varchar(20) NOT NULL COMMENT '渔场ID',
  `site_name` varchar(20) DEFAULT NULL COMMENT '渔场名称',
  `draw_rate` bigint(20) DEFAULT NULL COMMENT '抽水比例',
  `loss_limit_val` varchar(100) DEFAULT NULL COMMENT '亏损极限值',
  `loss_line_val` varchar(100) DEFAULT NULL COMMENT '亏损警界值',
  `centre_line_val` varchar(100) DEFAULT NULL COMMENT '中位警戒值',
  `centre_val` varchar(100) DEFAULT NULL COMMENT '中位值',
  `centre_limit_val` varchar(100) DEFAULT NULL COMMENT '中位极限值',
  `profit_line_val` varchar(100) DEFAULT NULL COMMENT '盈利警戒值',
  `profit_limit_val` varchar(100) DEFAULT NULL COMMENT '盈利极限值',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='水池配置表';

-- ----------------------------
-- Records of fish_pool
-- ----------------------------
INSERT INTO `fish_pool` VALUES ('1', '新手房', '10', '-99999999-100', '101-1000', '1001-5000', '5001-10000', '10001-30000', '30001-50000', '50001-99999999', '2019-08-30 15:51:37', '2019-08-30 15:51:37');
INSERT INTO `fish_pool` VALUES ('2', '进阶房', '10', '-99999999999-5000', '5001-200000', '200001-350000', '350001-500000', '500001-600000', '600001-1000000', '1000001-9999999999', '2019-08-30 15:51:14', '2019-08-30 15:51:14');
INSERT INTO `fish_pool` VALUES ('3', '高手房', '10', '-99999999999-20000', '20001-900000', '900001-1100000', '1100001-1500000', '1500001-3000000', '3000001-5000000', '5000001-9999999999', '2019-08-30 14:53:51', '2019-08-30 14:53:51');
INSERT INTO `fish_pool` VALUES ('4', '土豪房', '10', '-99999999999-50000', '50001-3300000', '3300001-5000000', '5000001-7000000', '7000001-9000000', '9000001-15000000', '15000001-9999999999', '2019-08-30 09:24:17', '2019-08-30 09:24:17');

-- ----------------------------
-- Table structure for fish_pool_reward
-- ----------------------------
DROP TABLE IF EXISTS `fish_pool_reward`;
CREATE TABLE `fish_pool_reward` (
  `reward_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '返奖率配置ID',
  `reward_level` int(4) DEFAULT NULL COMMENT '档位（数字表示）',
  `reward_rate` bigint(20) DEFAULT NULL COMMENT '返奖率',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`reward_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='水池返奖率配置表';

-- ----------------------------
-- Records of fish_pool_reward
-- ----------------------------
INSERT INTO `fish_pool_reward` VALUES ('1', '1', '70', '2019-07-02 17:24:26', '2019-07-02 17:24:26');
INSERT INTO `fish_pool_reward` VALUES ('2', '2', '80', '2019-07-02 17:24:32', '2019-07-02 17:24:32');
INSERT INTO `fish_pool_reward` VALUES ('3', '3', '90', '2019-07-02 17:24:37', '2019-07-02 17:24:37');
INSERT INTO `fish_pool_reward` VALUES ('4', '4', '100', '2019-07-02 17:24:47', '2019-07-02 17:24:47');
INSERT INTO `fish_pool_reward` VALUES ('5', '5', '110', '2019-07-02 17:24:58', '2019-07-02 17:24:58');
INSERT INTO `fish_pool_reward` VALUES ('6', '6', '120', '2019-07-02 18:56:15', '2019-07-02 18:56:15');
INSERT INTO `fish_pool_reward` VALUES ('7', '7', '130', '2019-07-02 18:56:24', '2019-07-02 18:56:24');

-- ----------------------------
-- Table structure for fish_prop
-- ----------------------------
DROP TABLE IF EXISTS `fish_prop`;
CREATE TABLE `fish_prop` (
  `prop_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '道具ID',
  `prop_name` varchar(20) DEFAULT NULL COMMENT '道具名称',
  `prop_type` int(4) DEFAULT NULL COMMENT '道具类型用数字表示，1表示可以掉落、赠送、兑换以及活动可奖励，2表示不可掉落、赠送和兑换，3表示不可掉落和赠送，但可以兑换、活动可奖励，4表示为充值奖励道具，不可掉落、兑换和赠送，5表示为持续可开启道具，不可掉落、兑换和赠送，6表示为实物',
  `gold_value` bigint(20) DEFAULT NULL COMMENT '金币价值',
  `conver_value` bigint(20) DEFAULT NULL COMMENT '兑换价格（奖牌）',
  `use_type` int(4) DEFAULT NULL COMMENT '使用方式 0表示渔场内主动使用,1表示获得即自动使用,2表示渔场外主动使用',
  `prop_descr` varchar(200) DEFAULT NULL COMMENT '道具描述',
  `prop_icon` varchar(100) DEFAULT NULL COMMENT '道具icon',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`prop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='道具属性表';

-- ----------------------------
-- Records of fish_prop
-- ----------------------------

-- ----------------------------
-- Table structure for fish_site
-- ----------------------------
DROP TABLE IF EXISTS `fish_site`;
CREATE TABLE `fish_site` (
  `site_id` varchar(20) NOT NULL COMMENT '渔场ID',
  `site_type` int(4) DEFAULT NULL COMMENT '渔场类型： 1- 普通场 2- 竞技场 3- 大奖赛',
  `site_name` varchar(20) DEFAULT NULL COMMENT '渔场名称',
  `open_level` int(11) DEFAULT NULL COMMENT '开启等级,用数字表示 ',
  `gold_consume` bigint(20) DEFAULT NULL COMMENT '金币消耗 ',
  `gold_down` bigint(20) DEFAULT NULL COMMENT '金币下限 ',
  `gold_up` bigint(20) DEFAULT NULL COMMENT '金币上限',
  `battery_down` int(4) DEFAULT NULL COMMENT '炮台倍数下限',
  `battery_up` int(4) DEFAULT NULL COMMENT '炮台倍数上限',
  `battery_nums` int(4) DEFAULT NULL COMMENT '默认炮台倍数 ',
  `pause_time` bigint(20) DEFAULT NULL COMMENT '静默时间（秒) ',
  `toin_interval_time` bigint(20) DEFAULT NULL COMMENT '互动间隔（秒） ',
  `cowry_interval_time` bigint(20) DEFAULT NULL COMMENT '宝箱投放间隔（秒） ',
  `open_time` bigint(20) DEFAULT NULL COMMENT '开启时间',
  `open_conti_time` bigint(20) DEFAULT NULL COMMENT '开启持续时间（秒） ',
  `single_conti_time` bigint(20) DEFAULT NULL COMMENT '单次持续时间（秒） ',
  `boss_ids` varchar(200) DEFAULT NULL COMMENT 'boss鱼机制id,多个逗号分隔 ',
  `damp_ids` varchar(200) DEFAULT NULL COMMENT '鱼潮id ',
  `drop_ids` varchar(200) DEFAULT NULL COMMENT '渔场掉落机制表ID,多个逗号分隔 ',
  `fish_ids` varchar(255) DEFAULT NULL COMMENT '鱼ID多个逗号分隔',
  `channel_num` varchar(50) DEFAULT NULL COMMENT '渠道商编号',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='渔场属性表';

-- ----------------------------
-- Records of fish_site
-- ----------------------------
INSERT INTO `fish_site` VALUES ('1', '1', '新手房', '0', '-1', '10', '100000', '1', '50', '1', '60', '10', '180', '-1', '-1', '7200', '1', '2', '-1', 'Fish019,Boss001,Boss005,Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish020,Fish023,Fish024,Fish025,Fish114,Fish117,Fish119', '1', '2019-07-02 17:03:01', '2019-08-30 15:51:37');
INSERT INTO `fish_site` VALUES ('2', '1', '进阶房', '0', '-1', '50000', '500000', '50', '200', '50', '60', '10', '180', '-1', '-1', '7200', '2', '3', '-1', 'Fish001,Fish004,Fish006,Fish009,Fish010,Fish014,Fish019,Fish020,Fish023,Fish024,Fish025,Fish114,Fish117,Fish119,Boss002,Boss006', '1', '2019-07-02 17:06:09', '2019-08-30 15:51:14');
INSERT INTO `fish_site` VALUES ('3', '1', '高手房', '0', '-1', '250000', '2500000', '200', '500', '200', '60', '10', '180', '-1', '-1', '7200', '3', '4', '-1', 'Fish001,Boss003,Boss007,Fish004,Fish006,Fish009,Fish010,Fish014,Fish019,Fish020,Fish023,Fish024,Fish025,Fish114,Fish117,Fish119', '1', '2019-07-02 17:10:43', '2019-08-30 14:53:51');
INSERT INTO `fish_site` VALUES ('4', '1', '土豪房', '0', '-1', '1000000', '-1', '500', '1000', '500', '60', '10', '180', '-1', '-1', '7200', '4', '5', '-1', 'Fish001,Boss004,Boss008,Fish004,Fish006,Fish009,Fish010,Fish014,Fish019,Fish020,Fish023,Fish024,Fish025,Fish114,Fish117,Fish119', '1', '2019-07-02 17:15:27', '2019-08-30 09:24:17');

-- ----------------------------
-- Table structure for fish_site_refr
-- ----------------------------
DROP TABLE IF EXISTS `fish_site_refr`;
CREATE TABLE `fish_site_refr` (
  `site_id` varchar(20) NOT NULL COMMENT '渔场ID',
  `refr_interval_time` bigint(20) DEFAULT NULL COMMENT '刷新间隔（秒） ',
  `refr_level` varchar(255) DEFAULT NULL COMMENT '渔场刷新权重',
  `init_variety` int(11) DEFAULT NULL COMMENT '初始刷新品种:7 ',
  `refr_nums` int(11) DEFAULT NULL COMMENT '刷新数量:100 ',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='渔场刷新表';

-- ----------------------------
-- Records of fish_site_refr
-- ----------------------------
INSERT INTO `fish_site_refr` VALUES ('1', '15', '1:70,2:0,3:30', '1', '100', '2019-07-02 17:03:01', '2019-08-30 15:51:37');
INSERT INTO `fish_site_refr` VALUES ('2', '15', '1:70,2:0,3:30', '7', '100', '2019-07-02 17:06:09', '2019-08-30 15:51:14');
INSERT INTO `fish_site_refr` VALUES ('3', '15', '1:70,2:0,3:30', '7', '100', '2019-07-02 17:10:43', '2019-08-30 14:53:51');
INSERT INTO `fish_site_refr` VALUES ('4', '15', '1:70,2:0,3:30', '7', '100', '2019-07-02 17:15:27', '2019-08-30 09:24:17');
INSERT INTO `fish_site_refr` VALUES ('5', '60', '1:100,2:0,3:0', '1', '100', '2019-08-20 16:25:09', '2019-08-20 18:27:51');

-- ----------------------------
-- Table structure for fish_skill
-- ----------------------------
DROP TABLE IF EXISTS `fish_skill`;
CREATE TABLE `fish_skill` (
  `skill_id` varchar(30) NOT NULL COMMENT '技能ID',
  `skill_icon` varchar(50) DEFAULT NULL COMMENT '图标icon ',
  `skill_name` varchar(20) DEFAULT NULL COMMENT '技能名称 ',
  `consu_energy` bigint(20) DEFAULT NULL COMMENT '能量消耗',
  `prop_id` bigint(20) DEFAULT NULL COMMENT '道具id ',
  `prop_consu` bigint(20) DEFAULT NULL COMMENT '道具消耗',
  `consu_gold` bigint(20) DEFAULT NULL COMMENT '金币消耗 ',
  `valid_radii` int(11) DEFAULT NULL COMMENT '作用半径,如果是-1代表全屏',
  `attack_count` int(11) DEFAULT NULL COMMENT '攻击点数量,如果是-1代表全屏,999999代表一条直线 ',
  `dodge_rate` int(11) DEFAULT NULL COMMENT '闪避率加成（%）,如果是-1无视闪避  ',
  `catch_rate` int(11) DEFAULT NULL COMMENT '捕捉率加成（%） ',
  `free_time` bigint(20) DEFAULT NULL COMMENT '释放时间 ',
  `conti_time` bigint(20) DEFAULT NULL COMMENT '持续时间（秒) ',
  `cd_time` bigint(20) DEFAULT NULL COMMENT '冷却时间（秒） ',
  `cd_force` bigint(20) DEFAULT NULL COMMENT '全场强制冷却（秒） ',
  `bullet_up` bigint(20) DEFAULT NULL COMMENT '炮台子弹加成（秒）',
  `down_attack_time` bigint(20) DEFAULT NULL COMMENT '降低炮台攻击间隔（毫秒）',
  `slow_down_time` bigint(20) DEFAULT NULL COMMENT '持续减速时间（毫秒）',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`skill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='技能表';

-- ----------------------------
-- Records of fish_skill
-- ----------------------------
INSERT INTO `fish_skill` VALUES ('1', '-1', '测试', '0', '-1', '-1', '0', '-1', '-1', '-1', '0', '0', '10', '0', '0', null, null, null, '2019-07-02 17:35:06', '2019-07-02 17:35:06');
INSERT INTO `fish_skill` VALUES ('skill001', '-1', '爆炸', '0', '-1', '0', '0', '300', '20', null, '0', null, null, null, '0', '0', '0', '0', '2019-07-08 11:29:12', '2019-07-08 11:29:12');
INSERT INTO `fish_skill` VALUES ('skill002', '-1', '大爆炸', '0', '-1', '0', '0', '-1', '-1', null, '20', null, null, null, '0', '0', '0', '0', '2019-07-08 11:29:42', '2019-07-08 11:29:42');
INSERT INTO `fish_skill` VALUES ('skill003', '-1', '冰冻', '0', '-1', '0', '0', '300', '20', null, '0', null, null, null, '0', '0', '0', '5', '2019-07-08 11:30:28', '2019-07-08 11:30:28');
INSERT INTO `fish_skill` VALUES ('skill004', '-1', '极寒冰冻', '0', '-1', '-1', '0', '-1', '-1', null, '0', null, null, null, '0', '0', '0', '5', '2019-07-08 11:34:30', '2019-07-08 11:34:30');
INSERT INTO `fish_skill` VALUES ('skill005', '-1', '自动攻击', '0', '-1', '0', '0', '-1', '1', null, '0', null, null, null, '0', '0', '0', '0', '2019-07-08 11:34:51', '2019-07-08 11:34:51');
INSERT INTO `fish_skill` VALUES ('skill006', '-1', '炮台极速', '0', '-1', '0', '0', '-1', '1', null, '0', null, null, null, '0', '1000', '50', '30', '2019-07-08 11:36:32', '2019-07-08 11:36:32');
INSERT INTO `fish_skill` VALUES ('skill007', '-1', '锁定', '0', '-1', '0', '1', '-1', '1', null, '0', null, null, null, '0', '600', '200', '0', '2019-08-08 16:01:42', '2019-08-08 16:01:42');

-- ----------------------------
-- Table structure for fish_user_grade
-- ----------------------------
DROP TABLE IF EXISTS `fish_user_grade`;
CREATE TABLE `fish_user_grade` (
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `grade_name` varchar(20) DEFAULT NULL COMMENT '成就名称',
  `grade_descr` varchar(100) DEFAULT NULL COMMENT '成就描述',
  `before_grade` int(11) DEFAULT NULL COMMENT '前置成就',
  `grade_award` bigint(20) DEFAULT NULL COMMENT '成就点奖励',
  `gold_award` bigint(20) DEFAULT NULL COMMENT '金币奖励',
  `prop_award` int(11) DEFAULT NULL COMMENT '道具奖励',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户成就表';

-- ----------------------------
-- Records of fish_user_grade
-- ----------------------------

-- ----------------------------
-- Table structure for fish_user_level
-- ----------------------------
DROP TABLE IF EXISTS `fish_user_level`;
CREATE TABLE `fish_user_level` (
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `user_level` int(4) DEFAULT NULL COMMENT '用户等级:如1,2,3..',
  `requir_suffer` bigint(20) DEFAULT NULL COMMENT '所需升级经验',
  `up_suffer_award` bigint(20) DEFAULT NULL COMMENT '升级金币奖励',
  `battery_multiple` int(11) DEFAULT NULL COMMENT '炮台倍数',
  `battery_id` bigint(20) DEFAULT NULL COMMENT '体验炮id',
  `touch_time` bigint(20) DEFAULT NULL COMMENT '体验时长',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户等级表';

-- ----------------------------
-- Records of fish_user_level
-- ----------------------------

-- ----------------------------
-- Table structure for fish_vip_user
-- ----------------------------
DROP TABLE IF EXISTS `fish_vip_user`;
CREATE TABLE `fish_vip_user` (
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `vip_level` int(4) DEFAULT NULL COMMENT 'vip级别 如：1,2,3',
  `recharge_amt` bigint(20) DEFAULT NULL COMMENT '充值金额',
  `battery_id` bigint(20) DEFAULT NULL COMMENT '炮台id',
  `suffer_up` bigint(20) DEFAULT NULL COMMENT '经验加成',
  `prop_up` bigint(20) DEFAULT NULL COMMENT '道具掉路加成',
  `give_prop_nums` int(11) DEFAULT NULL COMMENT '赠送道具次数',
  `conver_entity_nums` int(11) DEFAULT NULL COMMENT '兑换实物次数',
  `auto_attack_nums` int(11) DEFAULT NULL COMMENT '自动攻击次数',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='VIP用户表';

-- ----------------------------
-- Records of fish_vip_user
-- ----------------------------

-- ----------------------------
-- Table structure for flyway_schema_history
-- ----------------------------
DROP TABLE IF EXISTS `flyway_schema_history`;
CREATE TABLE `flyway_schema_history` (
  `installed_rank` int(11) NOT NULL,
  `version` varchar(50) DEFAULT NULL,
  `description` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL,
  `script` varchar(1000) NOT NULL,
  `checksum` int(11) DEFAULT NULL,
  `installed_by` varchar(100) NOT NULL,
  `installed_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `execution_time` int(11) NOT NULL,
  `success` tinyint(1) NOT NULL,
  PRIMARY KEY (`installed_rank`),
  KEY `flyway_schema_history_s_idx` (`success`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of flyway_schema_history
-- ----------------------------
INSERT INTO `flyway_schema_history` VALUES ('1', '1', 'init tables', 'SQL', 'V1__init_tables.sql', '-545582882', 'moxi123', '2019-07-02 11:11:45', '444', '1');
INSERT INTO `flyway_schema_history` VALUES ('2', '2', 'init tables', 'SQL', 'V2__init_tables.sql', '1163857729', 'moxi123', '2019-07-02 16:28:39', '65', '1');
INSERT INTO `flyway_schema_history` VALUES ('3', '3', 'init tables', 'SQL', 'V3__init_tables.sql', '-609096036', 'moxi123', '2019-07-05 13:40:19', '221', '1');
INSERT INTO `flyway_schema_history` VALUES ('4', '4', 'init tables', 'SQL', 'V4__init_tables.sql', '-830821026', 'moxi123', '2019-07-09 16:24:04', '159', '1');
INSERT INTO `flyway_schema_history` VALUES ('5', '5', 'init tables', 'SQL', 'V5__init_tables.sql', '-502728602', 'moxi123', '2019-07-12 17:39:58', '150', '1');
INSERT INTO `flyway_schema_history` VALUES ('6', '6', 'init tables', 'SQL', 'V6__init_tables.sql', '-2076190683', 'moxi123', '2019-07-17 10:21:04', '133', '1');

commit;