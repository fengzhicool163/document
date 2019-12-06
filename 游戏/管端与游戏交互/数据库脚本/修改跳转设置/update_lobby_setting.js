var lobbySetting = [
    {
        title:'公告',
        jumpCode:'noticeCenter'
    },
    {
        title:'绑定手机活动弹框',
        jumpCode:'bindPhoneAct'
    },
    {
        title:'绑定手机弹框',
        jumpCode:'bindPhone'
    },
    {
        title:'提现',
        jumpCode:'withdraw'
    }
];


db.lobby_setting.insertMany(lobbySetting);

db.lobby_setting.update({"jumpCode":"activityCenter"},{$set:{"title":"活动"}});
