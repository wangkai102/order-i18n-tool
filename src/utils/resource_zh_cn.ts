const lang = {
    key: 'zh_cn',
    Common: {
        ProductName: '全时云会议',
        OK: "确定",
        Cancel: "取消",
        Back: '返回',
        ON: "开启",
        OFF: "关闭",
        Notification: '提示',
        More: "更多",
        Operation: "操作",
        You: "你",
        Mine: "我",
        Total: " 等{1}个",
        AttendeeTotal: "等{1}人",
        Copy: '复制',
        Know: "我知道了",
        Today: '今天',
        Yesterday: '昨天',
        Tomorrow: '明天',
        Year: '年',
        Month: '月',
        Day: '日',
        Second: "秒",
        YearOf: "{1}年",
        Shure: "是",
        Delete: "删除",
        Reset: "重置",
        Save: '保存',
        Add: '添加',
        Edit: "编辑",
        Preview: "预览",
        AddSuccess: "添加成功",
        AddUserSuccess: "添加成功",
        EditSuccess: "编辑成功",
        DelSuccess: "删除成功",
        OperatingSuccess: "操作成功",
        SaveSuccess: "保存成功",
        Search: "搜索",
        SelectResult: "已选结果（{1}）",
        SelectResultUser: "已选用户({1})",
        SelectResultOrg: "已选组织({1})",
        TotalCount: '共{1}条',
        TotalCountResult: '共{1}条结果',
    },
    ErrorMessage: {
        UPDATE_MEETING_SUCCESS: "更新成功",
        ERROR_DEFAULT: "请求失败，请重试 ({1})",
        ERROR_SERVER: "服务器响应超时，请稍后再试或联系客服400-810-1919",
        ERROR_LIVE_SETTINGS_SAVE_FAIL: "保存失败",
        ERROR_LIVE_SETTINGS_SAVE_SUCC: "保存成功",
        ERROR_UPDATE_FAIL: "更新失败",
        ERROR_CODE_14902: "验证码输入错误，请重新输入",
        ERROR_CODE_14903: "验证码获取失败",
        ERROR_CODE_14908: "不可重复提交审批",
        ERROR_CODE_14913: "该手机号码已注册，请填写其他手机号",
        ERROR_CODE_14914: "该邮箱已注册，请填写其他邮箱",
        ERROR_CODE_14915: "验证码失效，请重新获取",
        ERROR_CODE_4020: "会议室或设备已被删除!",
        ERROR_CODE_50316: "你没有权限变更此会议，如想变更请升级帐号 联系管理员升级",
        ERROR_CODE_50501: "最长可预约23小时的会议，请修改会议时长",
        ERROR_CODE_50502: "开始时间不能早于当前时间",
        ERROR_CODE_50503: "预约会议失败",
        ERROR_CODE_50504: "回放失效时间不能早于结束时间",
        ERROR_CODE_50813: "当前活动已开始，设置项不可修改",
        ERROR_CODE_50102: "请求的数据为空",
        ERROR_CODE_50103: "请求的参数不合法",
        ERROR_CODE_50104: "服务器异常",
        ERROR_CODE_50107: "请求参数缺少字段",
        ERROR_CODE_50406: "帐号被禁用",
        ERROR_CODE_200: "预约成功",
        ERROR_CODE_50505: "最长可预约6个月以内的会议，请修改会议开始时间",
        ERROR_CODE_50804: "要变更的会议已经开始，不允许变更会议",
        ERROR_CODE_50806: "会议已经结束，不允许变更会议",
        ERROR_CODE_6000: "您选择的会议室已被他人预订，请重新选择会议室",
        ERROR_CODE_6001: "调用ucadmin getAdminInfo API 失败",
        ERROR_CODE_6060: "没有权限创建会议室",
        ERROR_CODE_6016: "没有权限创建和查看会议室",
        ERROR_CODE_6005: "获取会议室信息失败",
        ERROR_CODE_6006: "未获取到有效的会议室信息",
        ERROR_CODE_6014: "获取会议室会议失败",
        ERROR_CODE_6019: "生成icalendar串失败",
        ERROR_CODE_6022: "会议信息写数据库失败",
        ERROR_CODE_6021: "参会人信息写数据库失败",
        ERROR_CODE_6009: "会议室信息保存本地数据库失败",
        ERROR_CODE_6011: "云会议未返回有效的会议信息",
        ERROR_CODE_6020: "修改会议室数据库操作失败",
        ERROR_CODE_6217: "您选择的会议室已被他人预订，请重新选择会议室",
        ERROR_CODE_6030: "预约会议时间不在会议室有效期内",
        ERROR_CODE_6040: "不允许外部联系人参会",
        ERROR_CODE_6041: "预约会议不允许外部联系人参会",
        ERROR_CODE_118: "该周期规则没有有效的单场",
        "ERROR_CODE_-100": '响应超时，请稍后再试或联系客服400-810-1919',
        ERROR_CODE_100002: '手机号已绑定全时其他帐号，请更换手机号',
        ERROR_CODE_100012: '邮箱已绑定全时其他帐号，请更换邮箱',
        ERROR_CODE_20001: "验证码失效，请重新获取",
        ERROR_CODE_20000: "帐号不存在，请重新输入(错误码:20000)",
        ERROR_CODE_20002: "验证码输入错误，请重新输入",
        ERROR_CODE_20003: "帐号或密码不正确，请重新输入",
        ERROR_CODE_20004: "帐号或密码不正确，请重新输入",
        ERROR_CODE_1: '操作不成功，请联系客服400-810-1919  (错误码:1)',
        ERROR_CODE_2: '操作不成功，请联系客服400-810-1919  (错误码:2)',
        ERROR_CODE_3: '操作不成功，请联系客服400-810-1919  (错误码:3)',
        ERROR_CODE_4: '操作不成功，请联系客服400-810-1919  (错误码:4)',
        ERROR_CODE_5: '操作不成功，请联系客服400-810-1919  (错误码:5)',
        ERROR_CODE_21: '操作不成功，请联系客服400-810-1919  (错误码:21)',
        ERROR_CODE_22: '操作不成功，请联系客服400-810-1919  (错误码:22)',
        ERROR_CODE_23: '操作不成功，请联系客服400-810-1919  (错误码:23)',
        ERROR_CODE_31: '操作不成功，请联系客服400-810-1919  (错误码:31)',
        ERROR_CODE_33: '操作不成功，请联系客服400-810-1919  (错误码:33)',
        ERROR_CODE_41: '操作不成功，请联系客服400-810-1919  (错误码:41)',
        ERROR_CODE_43: '操作不成功，请联系客服400-810-1919  (错误码:43)',
        ERROR_CODE_51: '操作不成功，请联系客服400-810-1919  (错误码:51)',
        ERROR_CODE_201: '操作不成功，请联系客服400-810-1919  (错误码:201)',
        ERROR_CODE_50001: "你选择的企业已开通全时会议，如需使用请联系管理员开通",
        ERROR_CODE_60001: "你已提交过注册申请，请联系管理员审批",
        ERROR_CODE_700000: "登录不成功，请联系客服400-810-1919  (错误码:700000)",
        ERROR_CODE_700001: "登录不成功，请联系客服400-810-1919  (错误码:700001)",
        ERROR_CODE_700002: "登录不成功，请联系客服400-810-1919  (错误码:700002)",
        ERROR_CODE_7000001: "注册不成功，请联系客服400-810-1919  (错误码:7000001)",
        ERROR_CODE_7000002: "找回密码不成功，请联系客服400-810-1919  (错误码:7000002)",
        ERROR_CODE_7000003: "操作不成功，请联系客服400-810-1919  (错误码:7000003)",
        ERROR_CODE_7000012: "找回密码不成功，请联系客服400-810-1919  (错误码:7000012)",
        ERROR_CODE_7000013: "操作不成功，请联系客服400-810-1919  (错误码:7000013)",
        ERROR_CODE_7000022: "找回密码不成功，请联系客服400-810-1919  (错误码:7000022)",
        ERROR_CODE_7000023: "操作不成功，请联系客服400-810-1919  (错误码:7000023)",
        ERROR_CODE_7000011: "注册不成功，请联系客服400-810-1919  (错误码:7000011)",
        ERROR_CODE_7000021: "注册不成功，请联系客服400-810-1919  (错误码:7000021)",
        ERROR_CODE_7000025: "你是企业帐号，请联系管理员开通帐号",
        ERROR_CODE_7000026: "帐号已禁用，如需继续使用请联系管理员或客服400-810-1919",
        ERROR_CODE_7000027: "你选择的企业已开通全时会议，如需使用请联系管理员",
        ERROR_CODE_7000028: "此邮箱还未注册，请先注册",

        ERROR_CODE_7000039: "密码要求8-32个字符（至少包含大小写字母和数字）",
        ERROR_CODE_7000041: "设置的新密码，不能与当前密码一致",
        ERROR_CODE_7000042: "验证时umsUserId不一致,越权操作",
        ERROR_CODE_14855: "手机号格式不正确",
        ERROR_CODE_14854: "已存在手机号相同的用户，请填写新的手机号",
        ERROR_CODE_14844: "当前分组名称已存在，请重新输入",
        ERROR_CODE_14852: "不支持的格式或文件已损坏<br />请下载模版重新导入白名单",
        ERROR_CODE_14862: "模版内容不符合要求<br />请按照模版规范填写后重新导入白名单",
        ERROR_CODE_14863: "白名单人数上限为2000人，导入人数超限<br />请重新导入白名单",
        ERROR_CODE_14863_5W: "白名单人数上限为5万人，导入人数超限<br />请重新导入白名单",
        ERROR_CODE_14856: "你上传的文件没有填写联系人信息，请重新导入",
        ERROR_CODE_14853: "服务器有问题，请稍后上传",
        ERROR_CODE_14864: "你上传的文件部分信息填写有误，已作出错误标记<br />请下载修改后重新导入白名单",
        ERROR_CODE_14873: "最多可上传25个模板",
        ERROR_CODE_50812: "主持人离职或者不存在",
        ERROR_CODE_50311: "主持人身份变为参会人身份",
        ERROR_CODE_14901: "当前白名单名称已存在，请重新输入",
        ERROR_CODE_14906: "新建白名单名称超过最大上限",
        ERROR_CODE_14883: "敏感词总数超出最大限制",
        ERROR_CODE_14884: "敏感词重复，请重新输入",
        ERROR_CODE_14885: "创建敏感词失败",
        ERROR_CODE_14886: "传入敏感词为空",
        ERROR_CODE_14887: "获取敏感词失败",
        ERROR_CODE_14920 : "标签白名单上限为5万，数量超过限制",
        ERROR_CODE_14900 : "新建白名单名称失败",
        ERROR_CODE_14905 : "获取白名单联系人列表失败",
    },
    Date: {
        Today: '今天',
        Yesterday: '昨天',
        Tomorrow: '明天',
        Tomorrow1: '次日',
        Hour: "小时",
        Minute: "分钟",
        YearMonth: "{1}年{2}月",
        Year: "年",
        Month: "月",
        Day: "日",
        Hour_t: "时",
        Minute_t: "分",
        Second: "Second",
        Monday: "星期一",
        Tuesday: "星期二",
        Wednesday: "星期三",
        Thursday: "星期四",
        Friday: "星期五",
        Saturday: "星期六",
        Sunday: "星期日",
        NumMonday: "一",
        NumTuesday: "二",
        NumWednesday: "三",
        NumThursday: "四",
        NumFriday: "五",
        NumSaturday: "六",
        NumSunday: "日",
        ReSunday: "周日",
        ReMonday: "周一",
        ReTuesday: "周二",
        ReWednesday: "周三",
        ReThursday: "周四",
        ReFriday: "周五",
        ReSaturday: "周六",
        WorkingDay: "工作日",
        Weekday: "周日",
        LastYear: "上一年",
        NextYear: "下一年",
        LastMonth: "上一月",
        NextMonth: "下一月",
        CurrentMonth: "当月",
        DetailWeekCycle: "每{1}周 (周{2})",
        DetailMonthCycle: "每{1}月 ({2}号)",
        MonthDayWeek: "{1}月{2}日 {3}",
        DayCycle: "每{1}天",
    },
    Empty: {
        DataEmpty: "暂无数据",
        SearchEmpty: "当前搜索结果为空",
    },
    Login: {
        Title: "云活动",
        Customer: "在线客服",
        Copyright: "全时云商务服务股份有限公司 Copyright © {1} 京icp备08005473号",
    },
    AdminSetting: {
        ProductSettingTab: "产品设置",
        ProductSettingInvite: "预约邀请",
        ProductSettingInviteApproval: "预约活动需审批",
        ProductSettingInviteApprovalList: [{
            name: "不需要",
            value: 0,
        },
        {
            name: "需要",
            value: 1,
        }],
        PosterLabel: '上传邀请海报',
        PosterUpload: '立即上传',
    },
    EventSettingTheme: {
        BgType: "观看页背景图",
        BgTypeList: [{
            name: "专业",
            id: "pro",
            value: "pro"
        },
        {
            name: "娱乐",
            id: "rec",
            value: "rec"
        },
        {
            name: "教育",
            id: "edu",
            value: "edu"
        },
        {
            name: "年会",
            id: "annual",
            value: "annual"
        },
        {
            name: "自定义",
            id: "custom",
            value: "custom",
            iconClass: 'icon-plus',
        }],
        BgClient: "活动间预览图",
        BgClientPC: "电脑端",
        BgClientM: "移动端",
        BgColor: "页面背景风格",
        BtnColor: "页面按钮风格",
        ImgLogo: "企业LOGO",
        ImgLogoTips: "尺寸90*90",
        ImgLogoValid1: "请上传小于2M的图片",
        ImgLogoValid2: "上传不成功，仅支持jpg、png格式的文件",
        ImgAd: "广告挂件",
        ImgAdTips: "尺寸240*240",
        ImgAdValid1: "请上传小于2M的图片",
        ImgAdValid2: "上传不成功，仅支持jpg、png格式的文件",
    },
    EventSettingScreen: {
        MarqueeSetting: "防录屏跑马灯设置",
        MarqueeSettingTab: "防录屏跑马灯",
        MarqueeSettingTips: "开启后，将显示防录屏跑马灯",
        MarqueeText: "跑马灯文本",
        MarqueeTextList: [{
            text: "固定文本",
            value: "txt",
        }, {
            text: "固定文本+观看者昵称",
            value: "txt-nick",
        }],
        MarqueeTextValid: "请输入跑马灯文本",
        MarqueeTextDefault: "版权所有，盗版必究",
        MarqueeTextOpacity: "文本不透明度",
        MarqueeTextOpacityValid: "请输入文本不透明度",
        MarqueeTextOpacityValid1: "请输入0~100之间的数字",
        MarqueeTextSize: "文字大小",
        MarqueeTextColor: "字体颜色",
        MarqueeTextInterval: "显示时间间隔",
        MarqueeTextIntervalValid: "请输入显示时间间隔",
        MarqueeTextIntervalValid1: "请输入数字",
        MarqueeTextMoveSpeed: "文字移动速度",
        MarqueeTextMoveSpeedList: [{
            text: "快",
            value: "fast",
        }, {
            text: "中",
            value: "middle",
        }, {
            text: "慢",
            value: "slow",
        }],
        MarqueeTextPosition: "位置",
        MarqueeTextPositionList: [{
            text: "居上",
            value: "top",
        }, {
            text: "居中",
            value: "middle",
        }, {
            text: "居下",
            value: "bottom",
        }],
        MarqueePreview: "防录屏跑马灯预览",
        WatermarkPreview: "水印预览",
        WatermarkSetting: "水印设置",
        WatermarkSettingTab: "水印设置",
        WatermarkSettingTips: "开启后，可在播放器中增加图片、水印",
        WatermarkImg: "上传",
        WatermarkImgTips1: "尺寸80*80px",
        WatermarkImgTips2: "小于2MB且支持JPG、PNG格式",
        WatermarkImgValid: "请上传水印图片",
        WatermarkImgValid1: "请上传小于2M的图片",
        WatermarkImgValid2: "上传不成功，仅支持jpg、png格式的文件",
        WatermarkImgOpacity: "图片不透明度",
        WatermarkImgOpacityValid: "请输入图片不透明度",
        WatermarkImgPosition: "位置",
        WatermarkImgPositionList: [{
            text: "左上角",
            value: "upleft",
        }, {
            text: "右上角",
            value: "upright",
        }],
    },
    BusyFree: {
        HostLabel: "主持人",
        HostRoomLabel: "主持人会场",
        Tomorrow1: '次日',
        Delete: "删除",
    },
    NoticeMessage: {
        Message: "消息",
        ProductMessage: "产品消息",
        MeetingMessage: "会议消息",
        NoMessage: "暂无消息",
        MeetingHasCancel: "会议已取消",
        InviteMessage: "{1}邀请你加入会议",
        UpdateMessage: "{1}变更了会议",
        CanCelMessage: "{1}取消了会议",
        OtherMessage: "有新消息，可打开全时空间查看",
        Approve: "{1}审批",
        HasApprove: "已通过",
        HasReject: "已拒绝",
        HasLose: "已失效",
        HasCancel: "已取消",
        Date: "时间：",
        DateFormat: "{1}年{2}月{3}日 {4} {5}:{6}-{7}:{8}",
        DateFormat1: "{1}月{2}日 {3} {4}:{5}-{6}:{7}",
    },
    RoomTip: {
        RoomEmptyTip: "为了方便预约<br />尽快通知管理员设置会议室信息",
        AccountTip: "仅企业用户可预约会议室",
        AccountTip1: "帐号无法使用预约系统",
        NoticeAdminSuccess: "已通知管理员",
        ContactCustomerServiceBtn: "联系客服",
        NotiveAdminBtn: "通知管理员",
    },
    RoomSelect: {
        MeetingRoom: "会议室",
        RoomHost: "主持人会场",
        Search: "搜索",
        RoomHostSelectTip: "请选择主持人会场",
        RoomSelectEmptyTip: "当前暂无可预约会议室",
        DeleteSelectedRoom: "删除",
        SetHostRoom: "主持人会场",
        AddMeeting: "点击占用",
        MeetingConfilict: "时间冲突"
    },
    RoomDetail: {
        Title: "会议室详情",
        Equip: "设备：",
        Capacity: "容量：",
        City: "城市：",
        Location: "大厦：",
        ApprovalType: "类型：",
        NotNeededApproval: "不需要审批",
        NeedApproval: "需要批准",
        Admin: "管理员：",
        No: "无",
        People: "{1}人",
    },
    RoomView: {
        Next: "下一步",
        RoomBusyUsers: "{1}已占用",
        Search: "搜索",
        HistoryTitle: "搜索历史",
        HistoryClear: "清空历史",
        RoomListEmptyTip: "暂无会议室信息",
    },
    Contact: {
        Title: "联系人",
        Company: "公司",
        Phone: "手机",
        Email: "邮箱",
        Invite: "邀请他开会",
        ContactEmpty: "暂无联系人",
        ContactSearchEmpty: "未搜索到联系人",
        CompanyContact: "企业联系人",
        CommonContact: "常用联系人",
        SearchContact: "搜索联系人",
        ExpandMore: "展开更多",
    },
    MeetingScheduler: {
        SchedulerTitle: '预约远程会议',
        AppointmentMeeting: '立即预约',
        Update: "更新会议",
        SchedulerTitlePlaceholder: '添加会议主题',
        NotRecommendContact: "暂无推荐的常用联系人",
        ViewOtherContact: "查看其他相关联系人",
        GuessContact: "猜你要跟他们开会",
        VideoMeeting: "视频会议",
        DataMeeting: "数据会议",
        MeetingType: "会议类型",
        StandardMeeting: "召开标准会议",
        PrivacyMeeting: "召开保密会议",
        QuitEditor: "确定要退出编辑？",
        SecrecyMeetingTitle: "管理员已将你的权限修改为仅能召开保密会议，编辑后该会议将更新为保密会议",
        StandardMeetingTitle: "管理员已将你的权限修改为仅能召开标准会议，编辑后该会议将更新为标准会议",
        UpdateMeetingTips: "与此周期会议相关联的例外会议都将被取消，是否继续？",
        TimeConflict: "当前有时间冲突",
        SelectHostMeeting: '请选择主持人会议室',
        Title: "{1}的会议",
        UseVideoRoom: "使用视频会议",
        TotalParticipant: "({1}共{2}人)",
        NotContact: '暂无常用联系人',
        Search: '搜索',
        SelectedAttendee: '添加参会人 / 视频会议',
        RemarkPlaceholder: "添加备注 (最多不超过500字)",
        Total: '{1} 共{2}个',
        Room: '会议室',
        Select: '请选择',
        repeatCycle: "重复周期",
        EndRepeat: "结束周期",
        SelectTimezone: "选择时区",
        SelectTime: "选择时间",
        SelectDuration: "选择时长",
        TimeZone: "时区",
        Never: "永不",
        AdvanceSet: "高级设置",
        Start: "开始",
        Duration: "时长",
        repeatCycleItem: [{
            text: "不重复",
            value: "0",
            type: "notRepeat"
        },
        {
            text: "每天",
            value: "1",
            type: "daily"
        },
        {
            text: "每周",
            value: "2",
            type: "weekly"
        },
        {
            text: "每月",
            value: "3",
            type: "monthly"
        }],
        RepeatListItem: [{
            text: "永不",
            value: 99
        },
        {
            text: "至周期",
            value: 1
        }],
    },
    CreateMeetingTimeZone: [{
        windowsText: "(UTC-12:00) 国际日期变更线西",
        content: -12,
        windowsValue: "Dateline Standard Time",
        unixText: "(UTC-12:00) Etc/GMT+12",
        unixValue: "Etc/GMT+12"
    }, {
        windowsText: "(UTC-11:00) 协调世界时-11",
        content: -11,
        windowsValue: "UTC-11",
        unixText: "(UTC-11:00) 太平洋/帕果-帕果",
        unixValue: "Pacific/Pago_Pago"
    }, {
        windowsText: "(UTC-10:00) 阿留申群岛",
        content: -10,
        windowsValue: "Aleutian Standard Time",
        unixText: "(UTC-10:00) 美洲/阿达克",
        unixValue: "America/Adak"
    }, {
        windowsText: "(UTC-10:00) 夏威夷",
        content: -10,
        windowsValue: "Hawaiian Standard Time",
        unixText: "(UTC-10:00) 太平洋/火奴鲁鲁",
        unixValue: "Pacific/Honolulu"
    }, {
        windowsText: "(UTC-09:30) 马克萨斯群岛",
        content: -9,
        windowsValue: "Marquesas Standard Time",
        unixText: "(UTC-09:30) 太平洋/马克萨斯",
        unixValue: "Pacific/Marquesas"
    }, {
        windowsText: "(UTC-09:00) 阿拉斯加",
        content: -9,
        windowsValue: "Alaskan Standard Time",
        unixText: "(UTC-09:00) 美洲/安克雷奇",
        unixValue: "America/Anchorage"
    }, {
        windowsText: "(UTC-09:00) 协调世界时-09",
        content: -9,
        windowsValue: "UTC-09",
        unixText: "(UTC-09:00) 太平洋/甘比亚",
        unixValue: "Pacific/Gambier"
    }, {
        windowsText: "(UTC-08:00) 下加利福尼亚",
        content: -8,
        windowsValue: "Pacific Standard Time (Mexico)",
        unixText: "(UTC-08:00) 美洲/提华纳",
        unixValue: "America/Tijuana"
    }, {
        windowsText: "(UTC-08:00) 协调世界时-08",
        content: -8,
        windowsValue: "UTC-08",
        unixText: "(UTC-08:00) 太平洋/皮特凯恩",
        unixValue: "Pacific/Pitcairn"
    }, {
        windowsText: "(UTC-08:00) 太平洋时间(美国和加拿大)",
        content: -8,
        windowsValue: "Pacific Standard Time",
        unixText: "(UTC-08:00) 美洲/洛杉矶",
        unixValue: "America/Los_Angeles"
    }, {
        windowsText: "(UTC-07:00) 亚利桑那",
        content: -7,
        windowsValue: "US Mountain Standard Time",
        unixText: "(UTC-07:00) 美洲/凤凰城",
        unixValue: "America/Phoenix"
    }, {
        windowsText: "(UTC-07:00) 奇瓦瓦，拉巴斯，马萨特兰",
        content: -7,
        windowsValue: "Mountain Standard Time (Mexico)",
        unixText: "(UTC-07:00) 美洲/奇瓦瓦",
        unixValue: "America/Chihuahua"
    }, {
        windowsText: "(UTC-07:00) 山地时间(美国和加拿大)",
        content: -7,
        windowsValue: "Mountain Standard Time",
        unixText: "(UTC-07:00) 美洲/丹佛",
        unixValue: "America/Denver"
    }, {
        windowsText: "(UTC-06:00) 中美洲",
        content: -6,
        windowsValue: "Central America Standard Time",
        unixText: "(UTC-06:00) 美洲/危地马拉",
        unixValue: "America/Guatemala"
    }, {
        windowsText: "(UTC-06:00) 中部时间(美国和加拿大)",
        content: -6,
        windowsValue: "Central Standard Time",
        unixText: "(UTC-06:00) 美洲/芝加哥",
        unixValue: "America/Chicago"
    }, {
        windowsText: "(UTC-06:00) 瓜达拉哈拉，墨西哥城，蒙特雷",
        content: -6,
        windowsValue: "Central Standard Time (Mexico)",
        unixText: "(UTC-06:00) 美洲/墨西哥城",
        unixValue: "America/Mexico_City"
    }, {
        windowsText: "(UTC-06:00) 萨斯喀砌温",
        content: -6,
        windowsValue: "Canada Central Standard Time",
        unixText: "(UTC-06:00) 美洲/里贾纳",
        unixValue: "America/Regina"
    }, {
        windowsText: "(UTC-06:00) 复活节岛",
        content: -6,
        windowsValue: "Easter Island Standard Time",
        unixText: "(UTC-06:00) 太平洋/复活节岛",
        unixValue: "Pacific/Easter"
    }, {
        windowsText: "(UTC-05:00) 波哥大，利马，基多，里约布兰科",
        content: -5,
        windowsValue: "SA Pacific Standard Time",
        unixText: "(UTC-05:00) 美洲/波哥大",
        unixValue: "America/Bogota"
    }, {
        windowsText: "(UTC-05:00) 切图马尔",
        content: -5,
        windowsValue: "Eastern Standard Time (Mexico)",
        unixText: "(UTC-05:00) 美洲/坎库恩",
        unixValue: "America/Cancun"
    }, {
        windowsText: "(UTC-05:00) 东部时间(美国和加拿大)",
        content: -5,
        windowsValue: "Eastern Standard Time",
        unixText: "(UTC-05:00) 美洲/纽约",
        unixValue: "America/New_York"
    }, {
        windowsText: "(UTC-05:00) 哈瓦那",
        content: -5,
        windowsValue: "Cuba Standard Time",
        unixText: "(UTC-05:00) 美洲/哈瓦那",
        unixValue: "America/Havana"
    }, {
        windowsText: "(UTC-05:00) 海地",
        content: -5,
        windowsValue: "Haiti Standard Time",
        unixText: "(UTC-05:00) 美洲/太子港",
        unixValue: "America/Port-au-Prince"
    }, {
        windowsText: "(UTC-05:00) 印地安那州(东部)",
        content: -5,
        windowsValue: "US Eastern Standard Time",
        unixText: "(UTC-05:00) 美洲/印第安纳波利斯",
        unixValue: "America/Indianapolis"
    }, {
        windowsText: "(UTC-04:00) 亚松森",
        content: -4,
        windowsValue: "Paraguay Standard Time",
        unixText: "(UTC-04:00) 美洲/亚松森",
        unixValue: "America/Asuncion"
    }, {
        windowsText: "(UTC-04:00) 大西洋时间(加拿大)",
        content: -4,
        windowsValue: "Atlantic Standard Time",
        unixText: "(UTC-04:00) 美洲/哈利法克斯",
        unixValue: "America/Halifax"
    }, {
        windowsText: "(UTC-04:00) 加拉加斯",
        content: -4,
        windowsValue: "Venezuela Standard Time",
        unixText: "(UTC-04:00) 美洲/加拉加斯",
        unixValue: "America/Caracas"
    }, {
        windowsText: "(UTC-04:00) 库亚巴",
        content: -4,
        windowsValue: "Central Brazilian Standard Time",
        unixText: "(UTC-04:00) 美洲/库亚巴",
        unixValue: "America/Cuiaba"
    }, {
        windowsText: "(UTC-04:00) 乔治敦，拉巴斯，马瑙斯，圣胡安",
        content: -4,
        windowsValue: "SA Western Standard Time",
        unixText: "(UTC-04:00) 美洲/拉巴斯",
        unixValue: "America/La_Paz"
    }, {
        windowsText: "(UTC-04:00) 特克斯和凯科斯群岛",
        content: -4,
        windowsValue: "Turks And Caicos Standard Time",
        unixText: "(UTC-04:00) 美洲/大特克",
        unixValue: "America/Grand_Turk"
    }, {
        windowsText: "(UTC-03:30) 纽芬兰",
        content: -3,
        windowsValue: "Newfoundland Standard Time",
        unixText: "(UTC-03:30) 美洲/圣约翰斯",
        unixValue: "America/St_Johns"
    }, {
        windowsText: "(UTC-03:00) 阿拉瓜伊纳",
        content: -3,
        windowsValue: "Tocantins Standard Time",
        unixText: "(UTC-03:00) 美洲/阿拉瓜伊纳",
        unixValue: "America/Araguaina"
    }, {
        windowsText: "(UTC-03:00) 巴西利亚",
        content: -3,
        windowsValue: "E. South America Standard Time",
        unixText: "(UTC-03:00) 美洲/圣保罗",
        unixValue: "America/Sao_Paulo"
    }, {
        windowsText: "(UTC-03:00) 卡宴，福塔雷萨",
        content: -3,
        windowsValue: "SA Eastern Standard Time",
        unixText: "(UTC-03:00) 美洲/卡宴",
        unixValue: "America/Cayenne"
    }, {
        windowsText: "(UTC-03:00) 布宜诺斯艾利斯",
        content: -3,
        windowsValue: "Argentina Standard Time",
        unixText: "(UTC-03:00) 美洲/布宜诺斯艾利斯",
        unixValue: "America/Buenos_Aires"
    }, {
        windowsText: "(UTC-03:00) 格陵兰",
        content: -3,
        windowsValue: "Greenland Standard Time",
        unixText: "(UTC-03:00) 美洲/戈特霍布",
        unixValue: "America/Godthab"
    }, {
        windowsText: "(UTC-03:00) 蒙德维的亚",
        content: -3,
        windowsValue: "Montevideo Standard Time",
        unixText: "(UTC-03:00) 美洲/蒙德维的亚",
        unixValue: "America/Montevideo"
    }, {
        windowsText: "(UTC-03:00) 圣皮埃尔和密克隆群岛",
        content: -3,
        windowsValue: "Saint Pierre Standard Time",
        unixText: "(UTC-03:00) 美洲/密克隆岛",
        unixValue: "America/Miquelon"
    }, {
        windowsText: "(UTC-03:00) 萨尔瓦多",
        content: -3,
        windowsValue: "Bahia Standard Time",
        unixText: "(UTC-03:00) 美洲/巴伊亚",
        unixValue: "America/Bahia"
    }, {
        windowsText: "(UTC-03:00) 圣地亚哥",
        content: -3,
        windowsValue: "Pacific SA Standard Time",
        unixText: "(UTC-03:00) 美洲/圣地亚哥",
        unixValue: "America/Santiago"
    }, {
        windowsText: "(UTC-02:00) 协调世界时-02",
        content: -2,
        windowsValue: "UTC-02",
        unixText: "(UTC-02:00) 美洲/诺罗尼亚",
        unixValue: "America/Noronha"
    }, {
        windowsText: "(UTC-01:00) 亚速尔群岛",
        content: -1,
        windowsValue: "Azores Standard Time",
        unixText: "(UTC-01:00) 大西洋/亚速尔群岛",
        unixValue: "Atlantic/Azores"
    }, {
        windowsText: "(UTC-01:00) 佛得角群岛",
        content: -1,
        windowsValue: "Cape Verde Standard Time",
        unixText: "(UTC-01:00) 大西洋/佛得角",
        unixValue: "Atlantic/Cape_Verde"
    }, {
        windowsText: "(UTC) 卡萨布兰卡",
        content: 0,
        windowsValue: "Morocco Standard Time",
        unixText: "(UTC) 非洲/卡萨布兰卡",
        unixValue: "Africa/Casablanca"
    }, {
        windowsText: "(UTC) 协调世界时",
        content: 0,
        windowsValue: "UTC",
        unixText: "(UTC) Etc/GMT",
        unixValue: "Etc/GMT"
    }, {
        windowsText: "(UTC) 都柏林，爱丁堡，里斯本，伦敦",
        content: 0,
        windowsValue: "GMT Standard Time",
        unixText: "(UTC) 欧洲/伦敦",
        unixValue: "Europe/London"
    }, {
        windowsText: "(UTC) 蒙罗维亚，雷克雅未克",
        content: 0,
        windowsValue: "Greenwich Standard Time",
        unixText: "(UTC) 大西洋/雷克雅维克",
        unixValue: "Atlantic/Reykjavik"
    }, {
        windowsText: "(UTC+01:00) 阿姆斯特丹，柏林，伯尔尼，罗马，斯德哥尔摩，维也纳",
        content: 1,
        windowsValue: "W. Europe Standard Time",
        unixText: "(UTC+01:00) 欧洲/柏林",
        unixValue: "Europe/Berlin"
    }, {
        windowsText: "(UTC+01:00) 贝尔格莱德，布拉迪斯拉发，布达佩斯，卢布尔雅那，布拉格",
        content: 1,
        windowsValue: "Central Europe Standard Time",
        unixText: "(UTC+01:00) 欧洲/布达佩斯",
        unixValue: "Europe/Budapest"
    }, {
        windowsText: "(UTC+01:00) 布鲁塞尔，哥本哈根，马德里，巴黎",
        content: 1,
        windowsValue: "Romance Standard Time",
        unixText: "(UTC+01:00) 欧洲/巴黎",
        unixValue: "Europe/Paris"
    }, {
        windowsText: "(UTC+01:00) 萨拉热窝，斯科普里，华沙，萨格勒布",
        content: 1,
        windowsValue: "Central European Standard Time",
        unixText: "(UTC+01:00) 欧洲/华沙",
        unixValue: "Europe/Warsaw"
    }, {
        windowsText: "(UTC+01:00) 中非西部",
        content: 1,
        windowsValue: "W. Central Africa Standard Time",
        unixText: "(UTC+01:00) 非洲/拉各斯",
        unixValue: "Africa/Lagos"
    }, {
        windowsText: "(UTC+01:00) 温得和克",
        content: 1,
        windowsValue: "Namibia Standard Time",
        unixText: "(UTC+01:00) 非洲/温得和克",
        unixValue: "Africa/Windhoek"
    }, {
        windowsText: "(UTC+02:00) 安曼",
        content: 2,
        windowsValue: "Jordan Standard Time",
        unixText: "(UTC+02:00) 亚洲/安曼",
        unixValue: "Asia/Amman"
    }, {
        windowsText: "(UTC+02:00) 雅典、布加勒斯特",
        content: 2,
        windowsValue: "GTB Standard Time",
        unixText: "(UTC+02:00) 欧洲/布加勒斯特",
        unixValue: "Europe/Bucharest"
    }, {
        windowsText: "(UTC+02:00) 贝鲁特",
        content: 2,
        windowsValue: "Middle East Standard Time",
        unixText: "(UTC+02:00) 亚洲/贝鲁特",
        unixValue: "Asia/Beirut"
    }, {
        windowsText: "(UTC+02:00) 开罗",
        content: 2,
        windowsValue: "Egypt Standard Time",
        unixText: "(UTC+02:00) 非洲/开罗",
        unixValue: "Africa/Cairo"
    }, {
        windowsText: "(UTC+02:00) 大马士革",
        content: 2,
        windowsValue: "Syria Standard Time",
        unixText: "(UTC+02:00) 亚洲/大马士革",
        unixValue: "Asia/Damascus"
    }, {
        windowsText: "(UTC+02:00) 基希纳乌",
        content: 2,
        windowsValue: "E. Europe Standard Time",
        unixText: "(UTC+02:00) 欧洲/基希纳乌",
        unixValue: "Europe/Chisinau"
    }, {
        windowsText: "(UTC+02:00) 加沙, 希伯伦",
        content: 2,
        windowsValue: "West Bank Standard Time",
        unixText: "(UTC+02:00) 亚洲/希伯伦",
        unixValue: "Asia/Hebron"
    }, {
        windowsText: "(UTC+02:00) 哈拉雷、比勒陀利亚",
        content: 2,
        windowsValue: "South Africa Standard Time",
        unixText: "(UTC+02:00) 非洲/约翰尼斯堡",
        unixValue: "Africa/Johannesburg"
    }, {
        windowsText: "(UTC+02:00) 赫尔辛基，里加，保加利亚，基辅，塔林，维尔纽斯",
        content: 2,
        windowsValue: "FLE Standard Time",
        unixText: "(UTC+02:00) 欧洲/基辅",
        unixValue: "Europe/Kiev"
    }, {
        windowsText: "(UTC+02:00) 伊斯坦布尔",
        content: 2,
        windowsValue: "Turkey Standard Time",
        unixText: "(UTC+02:00) 欧洲/伊斯坦布尔",
        unixValue: "Europe/Istanbul"
    }, {
        windowsText: "(UTC+02:00) 耶路撒冷",
        content: 2,
        windowsValue: "Israel Standard Time",
        unixText: "(UTC+02:00) 亚洲/耶路撒冷",
        unixValue: "Asia/Jerusalem"
    }, {
        windowsText: "(UTC+02:00) 加里宁格勒",
        content: 2,
        windowsValue: "Kaliningrad Standard Time",
        unixText: "(UTC+02:00) 欧洲/加里宁格勒",
        unixValue: "Europe/Kaliningrad"
    }, {
        windowsText: "(UTC+02:00) 的黎波里",
        content: 2,
        windowsValue: "Libya Standard Time",
        unixText: "(UTC+02:00) 非洲/的黎波里",
        unixValue: "Africa/Tripoli"
    }, {
        windowsText: "(UTC+03:00) 巴格达",
        content: 3,
        windowsValue: "Arabic Standard Time",
        unixText: "(UTC+03:00) 亚洲/巴格达",
        unixValue: "Asia/Baghdad"
    }, {
        windowsText: "(UTC+03:00) 科威特、利雅得",
        content: 3,
        windowsValue: "Arab Standard Time",
        unixText: "(UTC+03:00) 亚洲/利雅得",
        unixValue: "Asia/Riyadh"
    }, {
        windowsText: "(UTC+03:00) 明斯克",
        content: 3,
        windowsValue: "Belarus Standard Time",
        unixText: "(UTC+03:00) 欧洲/明斯克",
        unixValue: "Europe/Minsk"
    }, {
        windowsText: "(UTC+03:00) 莫斯科、圣彼得堡、伏尔加格勒",
        content: 3,
        windowsValue: "Russian Standard Time",
        unixText: "(UTC+03:00) 欧洲/莫斯科",
        unixValue: "Europe/Moscow"
    }, {
        windowsText: "(UTC+03:00) 内罗毕",
        content: 3,
        windowsValue: "E. Africa Standard Time",
        unixText: "(UTC+03:00) 非洲/内罗毕",
        unixValue: "Africa/Nairobi"
    }, {
        windowsText: "(UTC+03:30) 德黑兰",
        content: 3,
        windowsValue: "Iran Standard Time",
        unixText: "(UTC+03:30) 亚洲/德黑兰",
        unixValue: "Asia/Tehran"
    }, {
        windowsText: "(UTC+04:00) 阿斯特拉罕、乌里扬诺夫斯克",
        content: 4,
        windowsValue: "Astrakhan Standard Time",
        unixText: "(UTC+04:00) 欧洲/阿斯特拉罕",
        unixValue: "Europe/Astrakhan"
    }, {
        windowsText: "(UTC+04:00) 阿布扎比, 马斯喀特",
        content: 4,
        windowsValue: "Arabian Standard Time",
        unixText: "(UTC+04:00) 亚洲/迪拜",
        unixValue: "Asia/Dubai"
    }, {
        windowsText: "(UTC+04:00) 巴库",
        content: 4,
        windowsValue: "Azerbaijan Standard Time",
        unixText: "(UTC+04:00) 亚洲/巴库",
        unixValue: "Asia/Baku"
    }, {
        windowsText: "(UTC+04:00) 伊热夫斯克，萨马拉",
        content: 4,
        windowsValue: "Russia Time Zone 3",
        unixText: "(UTC+04:00) 欧洲/萨马拉",
        unixValue: "Europe/Samara"
    }, {
        windowsText: "(UTC+04:00) 路易斯港",
        content: 4,
        windowsValue: "Mauritius Standard Time",
        unixText: "(UTC+04:00) 印度/毛里求斯",
        unixValue: "Indian/Mauritius"
    }, {
        windowsText: "(UTC+04:00) 第比利斯",
        content: 4,
        windowsValue: "Georgian Standard Time",
        unixText: "(UTC+04:00) 亚洲/第比利斯",
        unixValue: "Asia/Tbilisi"
    }, {
        windowsText: "(UTC+04:00) 埃里温",
        content: 4,
        windowsValue: "Caucasus Standard Time",
        unixText: "(UTC+04:00) 亚洲/埃里温",
        unixValue: "Asia/Yerevan"
    }, {
        windowsText: "(UTC+04:30) 喀布尔",
        content: 4,
        windowsValue: "Afghanistan Standard Time",
        unixText: "(UTC+04:30) 亚洲/喀布尔",
        unixValue: "Asia/Kabul"
    }, {
        windowsText: "(UTC+05:00) 阿什哈巴德，塔什干",
        content: 5,
        windowsValue: "West Asia Standard Time",
        unixText: "(UTC+05:00) 亚洲/塔什干",
        unixValue: "Asia/Tashkent"
    }, {
        windowsText: "(UTC+05:00) 叶卡特琳堡",
        content: 5,
        windowsValue: "Ekaterinburg Standard Time",
        unixText: "(UTC+05:00) 亚洲/叶卡特琳堡",
        unixValue: "Asia/Yekaterinburg"
    }, {
        windowsText: "(UTC+05:00) 伊斯兰堡，卡拉奇",
        content: 5,
        windowsValue: "Pakistan Standard Time",
        unixText: "(UTC+05:00) 亚洲/卡拉奇",
        unixValue: "Asia/Karachi"
    }, {
        windowsText: "(UTC+05:30) 钦奈，加尔各答，孟买，新德里",
        content: 5,
        windowsValue: "India Standard Time",
        unixText: "(UTC+05:30) 亚洲/加尔各答",
        unixValue: "Asia/Calcutta"
    }, {
        windowsText: "(UTC+05:30) 斯里加亚渥登普拉",
        content: 5,
        windowsValue: "Sri Lanka Standard Time",
        unixText: "(UTC+05:30) 亚洲/科伦坡",
        unixValue: "Asia/Colombo"
    }, {
        windowsText: "(UTC+05:45) 加德满都",
        content: 5,
        windowsValue: "Nepal Standard Time",
        unixText: "(UTC+05:45) 亚洲/加德满都",
        unixValue: "Asia/Katmandu"
    }, {
        windowsText: "(UTC+06:00) 阿斯塔纳",
        content: 6,
        windowsValue: "Central Asia Standard Time",
        unixText: "(UTC+06:00) 亚洲/阿拉木图",
        unixValue: "Asia/Almaty"
    }, {
        windowsText: "(UTC+06:00) 达卡",
        content: 6,
        windowsValue: "Bangladesh Standard Time",
        unixText: "(UTC+06:00) 亚洲/达卡",
        unixValue: "Asia/Dhaka"
    }, {
        windowsText: "(UTC+06:00) 新西伯利亚",
        content: 6,
        windowsValue: "N. Central Asia Standard Time",
        unixText: "(UTC+06:00) 亚洲/新西伯利亚",
        unixValue: "Asia/Novosibirsk"
    }, {
        windowsText: "(UTC+06:30) 仰光",
        content: 6,
        windowsValue: "Myanmar Standard Time",
        unixText: "(UTC+06:30) 亚洲/仰光",
        unixValue: "Asia/Rangoon"
    }, {
        windowsText: "(UTC+07:00) 曼谷，河内，雅加达",
        content: 7,
        windowsValue: "SE Asia Standard Time",
        unixText: "(UTC+07:00) 亚洲/曼谷",
        unixValue: "Asia/Bangkok"
    }, {
        windowsText: "(UTC+07:00) 巴尔瑙尔, 戈尔诺-阿尔泰斯克",
        content: 7,
        windowsValue: "Altai Standard Time",
        unixText: "(UTC+07:00) 亚洲/巴尔瑙尔",
        unixValue: "Asia/Barnaul"
    }, {
        windowsText: "(UTC+07:00) 科布多",
        content: 7,
        windowsValue: "W. Mongolia Standard Time",
        unixText: "(UTC+07:00) 亚洲/科布多",
        unixValue: "Asia/Hovd"
    }, {
        windowsText: "(UTC+07:00) 克拉斯诺亚尔斯克",
        content: 7,
        windowsValue: "North Asia Standard Time",
        unixText: "(UTC+07:00) 亚洲/克拉斯诺亚尔斯克",
        unixValue: "Asia/Krasnoyarsk"
    }, {
        windowsText: "(UTC+07:00) 托木斯克",
        content: 7,
        windowsValue: "Tomsk Standard Time",
        unixText: "(UTC+07:00) 亚洲/托木斯克",
        unixValue: "Asia/Tomsk"
    }, {
        windowsText: "(UTC+08:00) 北京，重庆，香港特别行政区，乌鲁木齐",
        content: 8,
        windowsValue: "China Standard Time",
        unixText: "(UTC+08:00) 亚洲/上海",
        unixValue: "Asia/Shanghai"
    }, {
        windowsText: "(UTC+08:00) 伊尔库茨克",
        content: 8,
        windowsValue: "North Asia East Standard Time",
        unixText: "(UTC+08:00) 亚洲/伊尔库茨克",
        unixValue: "Asia/Irkutsk"
    }, {
        windowsText: "(UTC+08:00) 吉隆坡、新加坡",
        content: 8,
        windowsValue: "Singapore Standard Time",
        unixText: "(UTC+08:00) 亚洲/新加坡",
        unixValue: "Asia/Singapore"
    }, {
        windowsText: "(UTC+08:00) 珀斯",
        content: 8,
        windowsValue: "W. Australia Standard Time",
        unixText: "(UTC+08:00) 澳洲/珀斯",
        unixValue: "Australia/Perth"
    }, {
        windowsText: "(UTC+08:00) 台北",
        content: 8,
        windowsValue: "Taipei Standard Time",
        unixText: "(UTC+08:00) 亚洲/台北",
        unixValue: "Asia/Taipei"
    }, {
        windowsText: "(UTC+08:00) 乌兰巴托",
        content: 8,
        windowsValue: "Ulaanbaatar Standard Time",
        unixText: "(UTC+08:00) 亚洲/乌兰巴托",
        unixValue: "Asia/Ulaanbaatar"
    }, {
        windowsText: "(UTC+08:30) 平壤",
        content: 8,
        windowsValue: "North Korea Standard Time",
        unixText: "(UTC+08:30) 亚洲/平壤",
        unixValue: "Asia/Pyongyang"
    }, {
        windowsText: "(UTC+08:45) 尤克拉",
        content: 8,
        windowsValue: "Aus Central W. Standard Time",
        unixText: "(UTC+08:45) 澳洲/尤克拉",
        unixValue: "Australia/Eucla"
    }, {
        windowsText: "(UTC+09:00) 大阪、札幌、东京",
        content: 9,
        windowsValue: "Tokyo Standard Time",
        unixText: "(UTC+09:00) 亚洲/东京",
        unixValue: "Asia/Tokyo"
    }, {
        windowsText: "(UTC+09:00) 赤塔",
        content: 9,
        windowsValue: "Transbaikal Standard Time",
        unixText: "(UTC+09:00) 亚洲/赤塔",
        unixValue: "Asia/Chita"
    }, {
        windowsText: "(UTC+09:00) 汉城",
        content: 9,
        windowsValue: "Korea Standard Time",
        unixText: "(UTC+09:00) 亚洲/汉城",
        unixValue: "Asia/Seoul"
    }, {
        windowsText: "(UTC+09:00) 雅库茨克",
        content: 9,
        windowsValue: "Yakutsk Standard Time",
        unixText: "(UTC+09:00) 亚洲/雅库茨克",
        unixValue: "Asia/Yakutsk"
    }, {
        windowsText: "(UTC+09:30) 阿德莱德",
        content: 9,
        windowsValue: "Cen. Australia Standard Time",
        unixText: "(UTC+09:30) 澳洲/阿德莱德",
        unixValue: "Australia/Adelaide"
    }, {
        windowsText: "(UTC+09:30) 达尔文",
        content: 9,
        windowsValue: "AUS Central Standard Time",
        unixText: "(UTC+09:30) 澳洲/达尔文",
        unixValue: "Australia/Darwin"
    }, {
        windowsText: "(UTC+10:00) 布里斯班",
        content: 10,
        windowsValue: "E. Australia Standard Time",
        unixText: "(UTC+10:00) 澳洲/布里斯班",
        unixValue: "Australia/Brisbane"
    }, {
        windowsText: "(UTC+10:00) 堪培拉，墨尔本，悉尼",
        content: 10,
        windowsValue: "AUS Eastern Standard Time",
        unixText: "(UTC+10:00) 澳洲/悉尼",
        unixValue: "Australia/Sydney"
    }, {
        windowsText: "(UTC+10:00) 关岛，莫尔兹比港",
        content: 10,
        windowsValue: "West Pacific Standard Time",
        unixText: "(UTC+10:00) 太平洋/莫尔兹比港",
        unixValue: "Pacific/Port_Moresby"
    }, {
        windowsText: "(UTC+10:00) 霍巴特",
        content: 10,
        windowsValue: "Tasmania Standard Time",
        unixText: "(UTC+10:00) 澳洲/霍巴特",
        unixValue: "Australia/Hobart"
    }, {
        windowsText: "(UTC+10:00) 马加丹",
        content: 10,
        windowsValue: "Magadan Standard Time",
        unixText: "(UTC+10:00) 亚洲/马加丹",
        unixValue: "Asia/Magadan"
    }, {
        windowsText: "(UTC+10:00) 符拉迪沃斯托克",
        content: 10,
        windowsValue: "Vladivostok Standard Time",
        unixText: "(UTC+10:00) 亚洲/符拉迪沃斯托克",
        unixValue: "Asia/Vladivostok"
    }, {
        windowsText: "(UTC+10:30) 洛特豪威岛",
        content: 10,
        windowsValue: "Lord Howe Standard Time",
        unixText: "(UTC+10:30) 澳洲/洛特豪威",
        unixValue: "Australia"
    }, {
        windowsText: "(UTC+11:00) 布干维尔岛",
        content: 11,
        windowsValue: "Bougainville Standard Time",
        unixText: "(UTC+11:00) 太平洋/布干维尔岛",
        unixValue: "Pacific/Bougainville"
    }, {
        windowsText: "(UTC+11:00) 萨哈林",
        content: 11,
        windowsValue: "Sakhalin Standard Time",
        unixText: "(UTC+11:00) 亚洲/萨哈林",
        unixValue: "Asia/Sakhalin"
    }, {
        windowsText: "(UTC+11:00) 乔库尔达赫",
        content: 11,
        windowsValue: "Russia Time Zone 10",
        unixText: "(UTC+11:00) 亚洲/中科雷姆斯克",
        unixValue: "Asia/Srednekolymsk"
    }, {
        windowsText: "(UTC+11:00) 诺福克岛",
        content: 11,
        windowsValue: "Norfolk Standard Time",
        unixText: "(UTC+11:00) 太平洋/诺福克",
        unixValue: "Pacific/Norfolk"
    }, {
        windowsText: "(UTC+11:00) 所罗门群岛，新喀里多尼亚",
        content: 11,
        windowsValue: "Central Pacific Standard Time",
        unixText: "(UTC+11:00) 太平洋/瓜达康纳尔岛",
        unixValue: "Pacific/Guadalcanal"
    }, {
        windowsText: "(UTC+12:00) 阿纳德尔，堪察加彼得罗巴甫洛夫斯克",
        content: 12,
        windowsValue: "Russia Time Zone 11",
        unixText: "(UTC+12:00) 亚洲/堪察加半岛",
        unixValue: "Asia/Kamchatka"
    }, {
        windowsText: "(UTC+12:00) 奥克兰，惠灵顿",
        content: 12,
        windowsValue: "New Zealand Standard Time",
        unixText: "(UTC+12:00) 太平洋/奥克兰",
        unixValue: "Pacific/Auckland"
    }, {
        windowsText: "(UTC+12:00) 协调世界时+12",
        content: 12,
        windowsValue: "UTC+12",
        unixText: "(UTC+12:00) 太平洋/塔拉瓦",
        unixValue: "Pacific/Tarawa"
    }, {
        windowsText: "(UTC+12:00) 塔拉瓦",
        content: 12,
        windowsValue: "Fiji Standard Time",
        unixText: "(UTC+12:00) 太平洋/塔拉瓦",
        unixValue: "Pacific/Fiji"
    }, {
        windowsText: "(UTC+12:45) 查塔姆群岛",
        content: 12,
        windowsValue: "Chatham Islands Standard Time",
        unixText: "(UTC+12:45) 太平洋/查塔姆群岛",
        unixValue: "Pacific/Chatham"
    }, {
        windowsText: "(UTC+13:00) 努库阿洛法",
        content: 13,
        windowsValue: "Tonga Standard Time",
        unixText: "(UTC+13:00) 太平洋/汤加塔布岛",
        unixValue: "Pacific/Tongatapu"
    }, {
        windowsText: "(UTC+13:00) 萨摩亚群岛",
        content: 13,
        windowsValue: "Samoa Standard Time",
        unixText: "(UTC+13:00) 太平洋/阿皮亚",
        unixValue: "Pacific/Apia"
    }, {
        windowsText: "(UTC+14:00) 基里蒂马蒂岛",
        content: 14,
        windowsValue: "Line Islands Standard Time",
        unixText: "(UTC+14:00) 太平洋/基里蒂马蒂岛",
        unixValue: "Pacific/Kiritimati"
    }],
    VideoMeeting: {
        JoinMeetingTitle: '加入会议',
        EnterPwdTip: '输入会议密码或链接加入会议',
        EmptyTips: "请输入会议密码或链接",
        JoinMeetingBtn: '加入会议',
        JoiningMeetingTips: "正在入会",
        MyMeetingList: '我的视频会议',
        InviteJoin: '邀请开会',
        CreateMeetingTip1: '你还没有会议安排<br/>点击“邀请开会”立即安排',
        InviteCopy: '复制邀请信息',
        InviteWechat: '微信',
        InviteContacts: "联系人",
        InviteLink: '复制链接',
        InviteQQ: 'QQ邀请',
        MeetingEdit: '编辑会议',
        MeetingCancel: '取消会议',
        MeetingReOpen: '再开一场',
        ApprovalRoom: "预约会议室",
        MyPcode: '我的固定会议密码',
        Pre12Meeting: '已为你显示前12小时内的会议',
        Loading: '加载中，请稍后…',
        NoMore: '没有更多了',
        Joining: '入会中',
        MeetingHoverBtn: '入会',
        MeetingOverBtn: '已结束',
        MonthAndDay: "{1}月{2}日",
        YearAndMonthAndDay: "{1}年{2}月{3}日",
        Refresh: "刷新",
        MeetingSetting: "会前设置",
        MeetingControl: "进会管控",
        MeetingSettingTitle: "若会议人数多或重要性高，请提前准备及设置",
        MeetingSettingDesc: "还未进行会前设置，是否先去设置？",
        CloudMCUTips: "需主持人在会中呼叫入会，请提前联系管理员设置好硬件视频",
        ToSetting: "去设置",
        Tabs: {
            List: "列表",
            Day: "日",
            Week: "周"
        },
        AddMeetingTips: "随时随地发起和参与会议",
        BtnAddMeeting: "约视频会议",
        BtnAddMeetingByRoom: "预定会议室",
        JoinInputPlaceHolder: "输入会议密码 / 链接加入会议",
        NoHistoryMeeting: "暂无历史会议～",
        HistoryMeetingLine: "以上为历史会议",
        ViewHistoryMeeting: "查看历史会议",
        NextDay: "次日",
        PrevDay: "昨日",
        JoinMeeting: ' 入会 ',
        JoiningMeeting: "入会中",
        MeetingPassword: "会议密码",
        CopyPassword: "复制密码",
        All: "全部",
        Accept: "接受",
        Reject: "拒绝",
        AllAttendees: "全部参会人",
        Rejected: "已拒绝",
        Accepted: "已接受",
        Pending: "待定",
        PendingStatus: "接受/拒绝",
        InviteAttendee: "邀请参会人",
        MeetingControlTips: "点击进行会议管控：",
        ApprovalStatus: {
            0: "待审批",
            1: "已拒绝",
            2: "已批准",
            3: "已取消"
        },
        HostRoom: '(主持人会场)',
        Host: "主持人",
        Attendees: "参会人",
        Detail: "详情",
        MeetingRoom: "会议室",
        HostRooms: "主持人会场",
        AttendeeRooms: "参会人会场",
        InviteTo: "请至",
        ReCommitMeeting: "重新申请",
        LiveTitle: "直播入会",
        CopyLiveInfo: "复制直播信息",
        HardVideoTitle: "H.323/SIP",
        HardVideoInputTips: "拨入地址  ",
        InviteTips1: "请各位准时到各会议室参加会议",
        InviteTips2: "如果不在会议室开会，可加入视频会议",
        NoAcceptMember: "暂无参会人接受",
        NoRejectMember: "暂无参会人拒绝",
        NoPendingMember: "暂无参会人待定",
        LiveTips: '使用主持人帐号登录网页直播即可参与管理直播讨论',
        MeetingView: {
            CanNotCreateBeforeTime: "不能安排早于当前时间的日程",
            CanNotBeforeTime: "只能将时间修改到当前时间之后",
            SaveSuccessTelToAttend: "保存成功，请通知参会人",
            LastWeek: "上一周",
            NextWeek: "下一周",
            SelectDateFormat: "yyyy年mm月",
            DragMeetingConfirmText: "确定要将会议时间修改至",
            HasTimeConflict: "有时间冲突",
            TheTimeAttendFree: "以下时间参会人都空闲",
            IgnoreAndChangeTime: "忽略并修改时间",
            Etc: "等人",
            CanNotDragMeetingInWeekView: "周视图下不允许拖拽周期会议"
        },
        NoMeetings: "暂未安排会议",
        NoSearchContacts: '未搜索到联系人',
        NoMessages: '暂无新消息',
        NoData: '无数据',
        ToTalRooms: "共{1}个会议室",
        AuthorCalendarTitle: "{1}的日程",
        MeetingDetail: "会议详情",
        CopyJoinPassword: "复制参会密码",
        CopySucceed: "复制成功，可以粘贴分享了",
        StandardMeeting: "标准会议",
        PrivacyMeeting: "保密会议",
        MeetingDetails: {
            End: "已结束",
            SafeMeeting: "保密会议",
            MeetingTime: "会议时间",
            HostPwd: "主持人密码",
            AttendeePwd: "参会人密码",
            Live: "直播入会",
            LiveCopy: "复制直播信息",
            Box: "盒子入会",
            BoxTips: '打开手机客户端 - 选择本场会议 - 选择 "盒子入会" ',
            BoxMore: "了解更多",
            HardVideo: "硬件视频入会",
            HardVideoTips: "输入 {1}",
            Remark: "备注",
            BtnIn: "加入会议",
            MeetingRoom: "会议室",
            LocalMeeting: "现场会议",
            GnetMeeting: "视频会议",
            repeatCycle: "重复周期",
            ShareType: '选择邀请方式',
            InviteSuccess: "邀请成功",
            Forward: "邀请"
        },
        Cancel: {
            Title: "提示",
            Desc: "你确定要取消本场会议吗？",
            OK: "取消会议",
            Cancel: "暂不取消",
            OnlyNow: "仅本次会议",
            AllMeeting: "全部会议"
        },
        CycleMeetingEditTips1: "这是一个周期会议",
        CycleMeetingEditTips2: "请选择生效范围",
        CycleMeetingForwardTips1: "这是一个周期会议",
        CycleMeetingForwardTips2: "请选择转发的会议范围",
        JoinUrl: "加入视频会议",
        ShareSuccess: "分享成功",
        ShareFailed: "分享失败",
        BackToHome: "回顶部",
        ServiceTips: '会议效果不好？我可以帮你',
        ServiceSubmit: '立即求助',
        ApprovalSuccess: '预约成功',
        NotInstall: "分享失败，请检查程序是否安装",
        TimeConflict: "参会人有时间冲突，是否仍然预定  {1}",
        ToChangeTime: "去更换时间",
        MeetingPromptTitle: "你没有召开会议的权限，请联系管理员升级权限",
    },
    CopyMeetingInfo: {
        CopySucceed: "复制成功，可以粘贴分享了",
        InvitedToJoinMeeting: "{1}请你参加会议，请各地区同事去相应会议室开会",
        MeetingSubject: "主题",
        MeetingTimeForCopy: "时间",
        MeetingRooms: "会议室",
        JoinUrl: "请各位准时到各会议室参加视频会议，如果不在会议室开会，可加入视频会议",
        JoinTips: "请各位准时到各会议室参加会议",
        JoinAttendeePassword: "参会密码",
    },
    MessageBubble: {
        MessageType: [
            '会议邀请',
            '会议变更',
            '会议取消',
            '入会提醒',
            '会议室审批',
            '会议室预约'
        ],
        ApprovalAccept: '管理员批准了你对“{1}”的预约',
        ApprovalReject: '管理员拒绝了你对“{1}”的预约',
        ApprovalUpdate: '主持人变更了会议，你原预定的“{1}”需要重新预约',
        ViewMeetingDetail: '查看会议详情',
        ReChoiceRoom: '重新预约',
    },
    MessageList: {
        ProductMessage: "产品消息",
        MeetingMessage: "会议消息",
        MeetingHasCancel: "会议已取消",
        Date: "时间",
        Host: "主持人",
        NoNewMessage: "暂无新消息",
        InviteMessage: "邀请你加入会议",
        UpdateMessage: "变更了会议",
        CanCelMessage: "取消了会议",
        OtherMessage: "有新消息，可打开全时空间查看",
        Approve: "审批",
        HasApprove: "已通过",
        HasReject: "已拒绝",
        HasLose: "已失效",
        HasCancel: "已取消",
    },
    CreateOrEditEvent: {
        Subject: '活动主题',
        SubjectError: '请输入活动主题',
        SubjectPlace: '输入活动主题，主题不能超过50个字',
        StartTime: '活动时间',
        StartTimeError1: '活动时间不能早于当前时间',
        StartTimeError2: '最长可预约23小时',
        StartTimeError3: '活动时长不能为0',
        Start: '开始',
        Duration: '时长',
        Mode: '活动模式',
        ModeVideo: '视频互动直播',
        ModeVoice: '语音+ppt直播',
        Introduction: '活动简介',
        IntroductionPlace: '输入活动简介，简介不能超过500个字',
        Create: '立即创建',
        Cover: '活动间封面图',
        CoverTip1: '建议尺寸998x560px',
        CoverTip2: '图片小于2MB（jpg、png）',
        CoverError1: '上传不成功，仅支持jpg、png格式的文件',
        CoverError2: '上传不成功，图片需要小于2MB',
        Delete: '删除',
        Reset: '重置',
        HostLabel: '指定主持人',
        HostChoose: '选择主持人',
        HostChooseTip: '请选择主持人',
        CreateSuccessTip: '活动创建成功',
        UpdateSuccessTip: '活动更新成功',
        UpdateSuccessTip1: '活动更新成功，请重新编辑海报',
        LeavePageTip: '确定取消创建活动吗？'
    },
    Invite: {
        PosterTitle: '设计宣传海报',
        GuestInviteLink: '嘉宾邀请链接',
        GuestViewLink: '嘉宾观看链接',
        GuestCopyLink: '复制嘉宾链接',
        GuestCopyLinkSuccess: '嘉宾链接复制成功',
        AudienceInviteLink: '观众邀请链接',
        AudienceViewLink: '观众观看链接',
        AudienceCopyLink: '复制观众链接',
        AudienceCopyLinkSuccess: '观众链接复制成功',
        ChatShare: '微信分享',
    },
    Notice: {
        Title: '公告设置',
        PlaceHolder: '输入活动公告，公告不能超过200个字',
        Save: '保存',
        Err: '请输入活动公告',
    },
    Assistant: {
        Title: '联席主持人设置',
        Host: '主持人',
        Subject: '活动主题',
        ID: '活动ID',
        StartTime: '活动时间',
        Link: '联席主持人链接',
        Copy: '复制',
        CopySuccess: '联席主持人邀请信息复制成功',
    },
    Replay: {
        Title: '回放有效期设置',
        Label: '回放时效',
        Status0: '永不失效',
        Status1: '3个月内有效',
        Status2: '1个月内有效',
        Status3: '不允许回放',
        Status4: '自定义失效时间',
    },
    Menus: {
        MyEvent: '我的活动',
        BroadCast: '内容平台',
        CreateEvent: '创建活动',
        CreateCycleEvent: '创建周期活动',
        EditEvent: '编辑活动',
        Invite: '邀请嘉宾及观众',
        EventDetail: '活动详情',
        EventSetting: '活动设置',
        ViewThem: '活动观看页风格',
        PreventScreen: '防录屏设置',
        ViewerProcess: '观众入会流程设置',
        ChatSetting: '聊天设置',
        NoticeSetting: '公告设置',
        AssistantSetting: '联席主持人设置',
        PlaybackSetting: '回放设置',
        LiveDeliverySettting: '直播带货',
        OtherSetting: '其他设置',
        EventData: '活动数据',
        EventPlayBack: '录播回放',
        ViewerProcessSetting: {
            Public: '公开',
            WhiteList: '白名单',
            Encript: '加密',
            Pay: '付费',
        },
        GoodsLibrary: '商品管理',
        GoodsLibraryAdd: '新增商品',
        GoodsLibraryEdit: '编辑商品',
        ApproveEvent: '活动审批',
        ProductSetting: "产品设置",
        PosterTemplate: "上传企业海报模版",
        PosterDesign: "设计宣传海报",
    },
    EmptyMessage: {
        EventEmptyTips: '暂无活动，快去创建吧',
    },
    ViewerProcessSetting: {
        EnterTitle: '报名',
        PublicTips: '无需任何验证，即可观看活动',
        WhiteListChooseTitle: '请选择白名单范围',
        WhiteListAttendeeTitle: '白名单参会人',
        TeamAttendeeTitle: '临时邀请参会人',
        ViewTitle: '点此查看({1}人）',
        ViewPassword: '观看密码',
        PasswordInputTips: '请输入4-12位数字或字母',
        AddTempContactTitle: "添加临时参会人",
        UpdateTempContactTitle: "更新临时参会人"
    },
    Others: {
        Title: '其他设置',
        Sponsor: '主办方',
        SponsorTitle: '主办方设置',
        SponsorPlace: '请输入主办方名称',
        Edit: '编辑',
        Watch: '累计观看人数',
        WatchTitle: '观看人数设置',
        Like: '累计点赞人数',
        LikeTitle: '点赞设置',
        LikeFunc: '点赞功能',
        LikeDisplay: '显示点赞数',
        Display: '默认显示人数',
        Display1: '默认显示点赞数',
        DisplayErr: '请输入正确的人数',
        DisplayPlace: '请输入大于1的整数',
        DeleteContactTitle: '删除联系人',
        DeleteContactSingleTips: '删除后联系人将无法参加贵公司的活动',
        DeleteContactMultiTips: '确定删除选中的{1}个联系人？',
        AddFailed: '添加失败',
        AddGroupExistTips: '当前分组名称已存在，请重新输入',
        AddContactExistTips: '已存在手机号相同的用户，请填写新的手机号',
        DeleteGroupTitle: '删除分组',
        DeleteGroupTips1: '删除“{1}”分组,将删除此分组下所有联系人',
        DeleteGroupTips2: '确定删除分组？',
        ChooseWhiteListTitle: '选择白名单参会人',
        NOWhiteListMembers: '管理员还未添加企业白名单，请联系管理员添加',
        ChooseContactTips: '请选择参会人员'
    },
    EventList: {
        EventTypeVideo: '视频互动直播',
        EventTypeAudio: '语音+PPT直播',
        JoinLiveRoom: '进入活动',
        ForwardEvent: '转播活动',
        EventSetting: '活动设置',
        EditEvent: '编辑活动',
        InviteEvent: '活动邀请',
        More: '更多操作',
        RejectTitle: '拒绝人：',
        RejectReason: '拒绝理由：',
        ApprovalStatus: {
            1: "审批中",
            2: "已通过",
            3: "已拒绝"
        },
        LimitState: {
            0: '公开',
            1: '白名单',
            2: '加密'
        }
    },
    LiveDelivery: {
        Title: '直播带货',
        Add: '新增商品',
        Num: '序号',
        ID: '商品ID',
        Name: '商品封面/名称',
        Price: '价格',
        Operation: '操作',
        Search: '输入商品名称回车搜索',
        Confirm: '确定添加',
        NoData0: '暂无商品，快去添加吧',
        NoData1: '当前商品库中暂无商品，快去添加吧',
        GoNow: '立即前往',
        DelTitle: '删除商品',
        DelTitleTip: '你确定要删除当前商品吗？',
        AddErrTip: '请选择需要添加的商品'
    },
    AddGoods: {
        Library: '商品库管理',
        Title: '填写商品信息',
        Name: '商品名称',
        NamePlace: '输入商品名称',
        Describe: '商品描述',
        DescribePlace: '输入商品描述',
        Image: '商品封面',
        ImageTip: '支持jpg、png尺寸90x90px',
        ImagePlace: '上传商品封面',
        PricePlace: '输入商品价格',
        PriceSuffix: '元',
        BuyLink: '商品购买链接',
        BuyLinkPlace: '输入商品购买链接',
        AddSuccess: "商品新建成功",
        EditSuccess: "商品更新成功",
        DelSuccess: "商品删除成功",
    },
    ApproveEvent: {
        OneClickPass: '一键通过',
        Pass: '通过',
        CreateTime: '申请时间',
        Creator: '申请人',
        Name: '活动主题',
        StartTime: '活动时间',
        Type: '活动形式',
        Reject: '拒绝',
        RejectReason: '拒绝理由',
        RejectReasonTitle: '填写拒绝理由',
        Search: '输入申请人姓名、活动名称回车搜索',
        PassTitle: '活动通过',
        PassTip: '你确定要通过当前活动吗？',
        RejectTitle: '填写拒绝理由',
        RejectLabel: '拒绝理由',
        RejectPlace: '请输入拒绝理由',
    }
}

export default lang
