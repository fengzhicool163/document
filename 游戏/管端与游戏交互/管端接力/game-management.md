## 接棒清单

|Jira编号|需求说明|涉及改动类|
|:--|:--|:--|
|TGQP-3574|新增陪玩层级，用于斗地主真人陪玩|类：MgtGameWhitelistController<br />方法：deletePlayerWith，savePlayerWith<br />新增或删除层级都会刷新redis缓存|
|TGQP-3628|配置游戏充值门槛功能，给老虎机增加一个特殊处理|类：SuperAdminGameController<br />方法：save<br />等我回来处理，和云峰对接|
||LT彩票对接|脚本：cg-product-brd\游戏\管端与游戏交互\数据库脚本/add_LT.js<br />|
||轮播图指定活动链接跳转|TODO|
||新游戏上线规范|**脚本：cg-product-brd\游戏\管端与游戏交互\数据库脚本/新增游戏标准规范**|
|TGQP-3503| 微信解绑                                       | 无，和stone联调                                              |
|           | 博必胜422问题                                  | jerry，classifyGameIds，classifyThirdGameId                  |

>  