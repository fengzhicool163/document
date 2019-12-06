#### 1.fish相关的服务及jenkins打包

1、game-fish-app 依赖game-fish-core ，在发布app之前先构建core（不能构建多次），然后再构建app，最后部署到sit。

2、再RocketChat中发消息通知，如：

game-fish-app已经重新发布
fish-app版本号：game-fish-app-1.0.41
fish-core版本号：game-fish-core-1.3.30



- ms-fish-pool
  - http://192.168.1.25:9000/job/release-ms-fish-pool/
- ms-fish-core
  - http://192.168.1.25:9000/job/sh-game-fish-core/
- ms-fish-service
  - http://192.168.1.25:9000/job/release-ms-fish-service/
- game-fish-app
  - http://192.168.1.25:9000/job/release-game-fish-app/

#### 2. 遗留问题

​    无

#### 3. SH未解决问题

> 1. [TGQP-2670](https://jira.mtkefu.com/browse/TGQP-2670)   SH正在解决中..

####  4. 上线注意事项

      与UAT的数据库脚本、yml配置一致

##### 2. 启动服务前/服务重启，redis清理

```xml
database: 7
key: mx:game:fish:simple
key: mx:game:playing:register:90
```

##### 3. 服务启动顺序

- ms-fish-service
- ms-fish-pool
- game-fish-app

##### 4. 脚本目录

> svn: 
>
> cg-product-brd\游戏\上海游戏配置\捕鱼\game-fish-app\application-sit.yml
>
> cg-product-brd\游戏\上海游戏配置\捕鱼\ms-fish-pool\application-sit.yml
>
> cg-product-brd\游戏\上海游戏配置\捕鱼\ms-fish-service\application-sit.yml
>
> cg-product-brd\游戏\上海游戏配置\捕鱼\mx_ms_fish-发uat脚本-08-22.sql
>
> cg-product-brd\游戏\管端与游戏交互\数据库脚本\add_fish.js
>
> 参考：cg-product-brd\游戏\管端与游戏交互\数据库脚本\修改游戏设置\game.base_game_setting.js
>
> 在超管为每个业主添加捕鱼游戏

#### 5、捕鱼前端重启

点击： Jenkins -> SIT Deploy Frontend Game -> fish -> rebuild

![1566556176714](C:\Users\jason.fang\AppData\Roaming\Typora\typora-user-images\1566556176714.png)