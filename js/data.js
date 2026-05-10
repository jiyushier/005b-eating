/*
  作品数据说明

  freeWorks：免费作品库，只会参与首页默认随机。
  paidWorks：付费完整作品库，只会在完整作品专区展示和随机。

  如果某个字段没有内容，可以留空字符串 "" 或空数组 []，页面会自动隐藏对应区域。
*/

const freeWorks = [
  {
    "id": "free-001",
    "title": "在外面醉酒鬼混后，跑到了前男友家",
    "typeTags": [
      "吃醋"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [
      {
        "label": "",
        "url": "https://u.pcloud.link/publink/show?code=XZMOAO5Z5tUCMRi6VHBqc3D4ofEm18NoSMHk"
      }
    ],
    "pageLink": "",
    "isPublic": true,
    "audioLinks": [
      {
        "label": "",
        "url": "https://u.pcloud.link/publink/show?code=XZMOAO5Z5tUCMRi6VHBqc3D4ofEm18NoSMHk"
      }
    ]
  },
  {
    "id": "free-002",
    "title": "心跳失控：羞辱的秘密请求",
    "typeTags": [
      "纯爱粗口"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-003",
    "title": "家庭教师2",
    "typeTags": [
      "粗口羞辱"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-004",
    "title": "颤抖游戏1（温柔版）",
    "typeTags": [
      "寸止倒计时"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-005",
    "title": "颤抖游戏2（粗口羞辱）",
    "typeTags": [
      "寸止倒计时"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-006",
    "title": "颤抖游戏3（宿舍篇·双声道）",
    "typeTags": [
      "寸止倒计时"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-007",
    "title": "颤抖游戏3（宿舍篇）",
    "typeTags": [
      "寸止倒计时"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-008",
    "title": "颤抖游戏4（师生办公室篇）",
    "typeTags": [
      "寸止倒计时"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-009",
    "title": "汗透的响午：开门，送矿泉水的",
    "typeTags": [
      "方言"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-010",
    "title": "开心民员工",
    "typeTags": [
      "方言"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-011",
    "title": "我滴工地生活",
    "typeTags": [
      "方言"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-012",
    "title": "梦幻国",
    "typeTags": [
      "古风科幻"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-013",
    "title": "半夜被女友叫醒一起爱爱",
    "typeTags": [
      "即兴"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-014",
    "title": "和男友一起浴室爱爱",
    "typeTags": [
      "即兴"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-015",
    "title": "晨炮（小妈play）",
    "typeTags": [
      "快餐日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-016",
    "title": "和男友一起玩游戏",
    "typeTags": [
      "情侣日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-017",
    "title": "脸红心跳的飞行棋：惩罚与亲密盲盒挑战",
    "typeTags": [
      "情侣日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-018",
    "title": "淋雨被惩罚的小迷糊",
    "typeTags": [
      "情侣日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-019",
    "title": "海底三万里",
    "typeTags": [
      "人外触手"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-020",
    "title": "被你的照片弄到发情，邀请你一起自慰的男友",
    "typeTags": [
      "日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-021",
    "title": "边夸边操叫宝宝",
    "typeTags": [
      "日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-022",
    "title": "边夸边操叫宝宝（无H音效）",
    "typeTags": [
      "日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-023",
    "title": "边骂边操，操完再哄",
    "typeTags": [
      "日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-024",
    "title": "刚睡醒就要亲密贴贴",
    "typeTags": [
      "日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-025",
    "title": "勾引正在上班的女朋友，回家后爆操",
    "typeTags": [
      "日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-026",
    "title": "教训熬夜的女友",
    "typeTags": [
      "日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-027",
    "title": "我是你的小狗狗呀",
    "typeTags": [
      "日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-028",
    "title": "有你味道的香蕉更好吃",
    "typeTags": [
      "日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-029",
    "title": "为什么上？先把你给办了！",
    "typeTags": [
      "双声道-日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-030",
    "title": "嘘，隔壁有人",
    "typeTags": [
      "双声道-日常"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-031",
    "title": "刚睡醒就要亲密贴贴2.0 双声道版",
    "typeTags": [
      "双声道"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-032",
    "title": "洗香香求你玩弄的可爱小狗",
    "typeTags": [
      "四爱"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-033",
    "title": "众目之下",
    "typeTags": [
      "四爱"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-034",
    "title": "你的网恋男友1",
    "typeTags": [
      "语爱"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-035",
    "title": "你的网恋男友2",
    "typeTags": [
      "语爱"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-036",
    "title": "你的网恋男友3",
    "typeTags": [
      "语爱"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-037",
    "title": "采耳按摩店：从耳朵到身体的全面沦陷",
    "typeTags": [
      "ASMR"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-038",
    "title": "把被压扁的抱枕重新变得蓬松",
    "typeTags": [
      "未分类"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-039",
    "title": "高潮射精混剪",
    "typeTags": [
      "未分类"
    ],
    "period": "近期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-040",
    "title": "中秋特辑",
    "typeTags": [
      "纯爱"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-041",
    "title": "校医务室里的体育生",
    "typeTags": [
      "粗口"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-042",
    "title": "调教",
    "typeTags": [
      "短短"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-043",
    "title": "秋千play",
    "typeTags": [
      "户外"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-044",
    "title": "学姐竟然在摩天轮里对我",
    "typeTags": [
      "户外"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-045",
    "title": "雨天车震play",
    "typeTags": [
      "户外"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-046",
    "title": "我的姐姐",
    "typeTags": [
      "乱伦姐弟"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-047",
    "title": "我可爱的妹妹",
    "typeTags": [
      "乱伦兄妹"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-048",
    "title": "机器人男友（早期作品）",
    "typeTags": [
      "人外"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-049",
    "title": "来自吸血鬼的致命温柔",
    "typeTags": [
      "人外"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-050",
    "title": "快住手，我还只是颗桃子",
    "typeTags": [
      "人外可爱"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-051",
    "title": "醉酒男友",
    "typeTags": [
      "日常"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-052",
    "title": "颁奖礼的休息室",
    "typeTags": [
      "羞辱"
    ],
    "period": "远古作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-053",
    "title": "左右为男（3P纪余生&纪红豆）",
    "typeTags": [
      "3P粗口"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-054",
    "title": "监禁：心之孤岛",
    "typeTags": [
      "纯爱"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-055",
    "title": "监禁1-3我的心曾是一座孤岛 直到遇见你 它才冲破迷宫 拥抱永恒",
    "typeTags": [
      "纯爱"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-056",
    "title": "监禁2 心之迷宫",
    "typeTags": [
      "纯爱"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-057",
    "title": "监禁3 心之永恒",
    "typeTags": [
      "纯爱"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-058",
    "title": "你如星光",
    "typeTags": [
      "纯爱"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-059",
    "title": "中秋特辑（重置版）",
    "typeTags": [
      "纯爱"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-060",
    "title": "家教老师1",
    "typeTags": [
      "粗口羞辱"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-061",
    "title": "医务室重置版",
    "typeTags": [
      "粗口羞辱"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-062",
    "title": "男生宿舍1",
    "typeTags": [
      "粗口NTR"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-063",
    "title": "苞米地",
    "typeTags": [
      "方言"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-064",
    "title": "外卖小哥被勾引",
    "typeTags": [
      "方言"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-065",
    "title": "猛虎与蔷薇",
    "typeTags": [
      "古代架空"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-066",
    "title": "坦泰尼克号",
    "typeTags": [
      "户外"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-067",
    "title": "下一站是你心里",
    "typeTags": [
      "户外"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-068",
    "title": "机场男厕所",
    "typeTags": [
      "户外粗口"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-069",
    "title": "只有我和你的星球",
    "typeTags": [
      "姐弟病娇"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-070",
    "title": "美梦成真",
    "typeTags": [
      "快餐"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-071",
    "title": "以爱之名",
    "typeTags": [
      "乱伦母子"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-072",
    "title": "暗之花2（好结局）",
    "typeTags": [
      "末日纯爱"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-073",
    "title": "暗之花2（坏结局）",
    "typeTags": [
      "末日纯爱"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-074",
    "title": "七夕灯会",
    "typeTags": [
      "清水"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-075",
    "title": "揭秘！某博主维持好身材的方法竟然是这个",
    "typeTags": [
      "清水日常"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-076",
    "title": "生理期的温柔甜宠男友",
    "typeTags": [
      "清水日常"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-077",
    "title": "和出差的男友语音爱爱",
    "typeTags": [
      "情侣日常"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-078",
    "title": "新年特别篇1-回家过年",
    "typeTags": [
      "情侣日常"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-079",
    "title": "震惊！因女友喜欢网购，男子竟然做出这种事！",
    "typeTags": [
      "情侣日常"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-080",
    "title": "机器人男友重置版（人声）",
    "typeTags": [
      "人外"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-081",
    "title": "机器人男友重置版（效果）",
    "typeTags": [
      "人外"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-082",
    "title": "狼崽下凡",
    "typeTags": [
      "人外"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-083",
    "title": "男仆网咖",
    "typeTags": [
      "伪四爱"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  },
  {
    "id": "free-084",
    "title": "储藏室",
    "typeTags": [
      "M"
    ],
    "period": "早期作品",
    "note": "",
    "cloudLinks": [],
    "pageLink": "",
    "isPublic": true
  }
];

const seriesLists = [
  {
    "id": "sleep-guide",
    "buttonLabel": "助眠哄睡",
    "title": "助眠哄睡",
    "description": "适合睡前慢慢放松，交给声音陪你入睡。",
    "items": [
      {
        "title": "【呼吸声】60min沉浸式助眠引导-山谷温泉的夜雾安眠"
      },
      {
        "title": "【气声耳语】60min沉浸式助眠引导-竹林小院的月夜静谧"
      },
      {
        "title": "【双声道气声】60min沉浸式助眠引导-雪山木屋的冬夜安眠"
      },
      {
        "title": "60min沉浸式助眠引导-山涧雨夜的温暖安眠"
      },
      {
        "title": "半小时纯呼吸声"
      },
      {
        "title": "哄睡ASMR（亲亲、跳跳糖、泡泡纸）"
      },
      {
        "title": "呼吸声哄睡"
      },
      {
        "title": "数羊哄睡（一小时版）"
      }
    ]
  },
  {
    "id": "hug-series",
    "buttonLabel": "给你一个抱抱",
    "title": "给你一个抱抱",
    "description": "如果最近有点累，可以先来这里被轻轻抱一下。",
    "items": [
      {
        "title": "安慰被体重和外貌困扰的你"
      },
      {
        "title": "安慰和重要的人分开的你"
      },
      {
        "title": "安慰在工作中感到焦虑的你"
      },
      {
        "title": "安慰在考试前感到不安的你"
      },
      {
        "title": "安慰在找工作路上迷茫的你"
      },
      {
        "title": "安慰最近诸事不顺的你"
      },
      {
        "title": "温暖那个好像被忽略的你"
      }
    ]
  }
];

const paidWorks = [
  {
    "id": "paid-001",
    "number": "001",
    "title": "牛郎体验",
    "typeTags": [],
    "duration": "",
    "intro": "时长：23分钟\n\n男主：财阀独子，曾桀骜不驯，冷酷无情\n\n女主：家境殷实，财务自由，纵情享乐的野蛮千金\n\n风光无限的财阀独子遭遇灭顶之灾， 被最亲密的人背叛， 被最信任的人出卖，家破人亡的他只能带着妹妹流亡异地。\n\n迫于生计的他只能委身泥泞，向女客人提供 “定制服务”，配合女客人癖好使用各种小道具进行“戏虐游戏”，这些他只能隐忍，曾经的骄傲也只能死死地压在内心最深处……\n\n谁能拒绝一个男人掩埋自己的骄傲发出的低沉嘶吼呢？\n\n⚠️注意事项：含有男主被道具玩弄、马眼棒、扇脸、跪在地上爬、 被命令羞辱等情节！",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-002",
    "number": "002",
    "title": "我的班长大人1",
    "typeTags": [],
    "duration": "",
    "intro": "时长：35分钟\n\n男主：爱逃课爱打架放荡不羁的痞子校霸\n\n女主：爱学习爱劳动品学兼优的漂亮班花\n\n理论上完全不会有交集的人，阴差阳错被安排在同一天值日；\n\n初夏放学后空无一人的教学楼，傍晚蜜色的阳光斜照进的安静教室；\n\n两个人会发生什么特别的故事？\n\n表面上看起来又凶又痞的男生内心其实……\n\n平日里自律克制的漂亮女生私底下却……\n\n让你回味那个会因为一个瞬间心动的年纪， 重温又甜又涩的青春悸动！\n\n💗心动时刻：\n\n让你回味那个会因为一个瞬间心动的年纪， 重温又甜又涩的青春悸动！",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-003",
    "number": "003",
    "title": "暗之花1",
    "typeTags": [],
    "duration": "",
    "intro": "时长：34分钟\n\n2102年，人类世界爆发了一种极其可怕的丧尸病毒，生存者寒寒无几。你是一名普通的女大学生，被同班同学所救，并跟着他踏上了末日求生之路。\n\n他看似冷酷毒舌，却有一颗温柔善良的心，虽然总嫌弃你是累赘，但一直没有抛下你，还总在危险时刻保护你。\n\n这一天，你们外出寻找物资，不幸被丧尸围困在了一个小超市的仓库里，黑暗的狭小空间拉近了你和他之间的距离，在那一刻，他终于对你吐露了隐藏已久的心声。\n\n⚠️注意事项：开头和结尾有少量丧尸元素（中间无）、少量虐心情节",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-004",
    "number": "004",
    "title": "反击游戏1",
    "typeTags": [],
    "duration": "",
    "intro": "时长：36分钟\n\n为了挽救生命垂危的妹妹，不惜出卖尊严，委身于手握资源的女导演，却在付出一切后遭到背叛。\n\n在绝望与愤怒的驱使下，他从顺从的玩物转变为复仇者，对曾经操控他命运的女人展开了激烈而残酷的反击。\n\n⚠️涉及元素：反差、 大量粗口、 侮辱性言语、 粗暴行为、QJ、扇脸及其他部位；窒息、 体内射尿、 强制喷尿、 三洞齐开 (全程1V1，有道具） 等等，介意者慎入！",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-005",
    "number": "005",
    "title": "你如星光2",
    "typeTags": [],
    "duration": "",
    "intro": "时长：44分钟\n\n你是否还记得那年夏天的那个少年，还有你和他之间未完待续的故事？\n\n当时的你们憎懂青涩，他在你的帐篷外守护着你，被蚊子叮了满身的包，你们还一起对流星许愿，然后一场大雨把你们之间的距离拉得更近………\n\n还记得那次露营发生了什么其他有趣的事情吗？这一次，你将重新回到那个夏天，继续谱写和他的故事……\n\n愿我们无论经历多少风雨，都能守护爱情最初的美好。\n\n如果你还未曾经历过，那祝福你，属于你的美好即将到来。\n\n💗纯爱纯爱纯爱！！",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-006",
    "number": "006",
    "title": "温泉之旅1",
    "typeTags": [],
    "duration": "",
    "intro": "时长：50分钟\n\n假期将至，你和男友计划已久的甜蜜浪漫温泉之旅却因为第三个人的加入变得意外连连，\n\n夜晚的房间里，男友化身小泰迪想跟你做点羞羞的事情，但旁边的床上还睡着另一个人，\n\n当男友睡着后，你决定独自前往温泉，却不知一场危险的角逐即将在水中拉开惟幕..…\n\n⚠️注意事项：涉及女主出轨、 粗口羞辱、水中做爱",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-007",
    "number": "007",
    "title": "我的班长大人2",
    "typeTags": [],
    "duration": "",
    "intro": "时长：47分钟\n\n图书馆自习的午后，校霸男友表面睡觉实则蓄谋已久。一道物理题成了赌注，输的人要乖乖听话。\n\n书本遮掩下，指尖在裙底肆意游走，喘息压抑在安静的书架之间。\n\n“不会的题，我教你……但这里的‘作业’，得由我亲自批改。”\n\n从讲台到书架，从挑衅到守护，这场甜蜜的“欺负”还在继续——因为喜欢你，才想占有你的全部。\n\n⚠️注意事项：图书馆（公共场合）、大量耳语/悄悄话、轻微粗口羞辱、指奸、强制",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-008",
    "number": "008",
    "title": "男生宿舍2",
    "typeTags": [],
    "duration": "",
    "intro": "时长：53分钟\n\n你独自来到KTV买醉，碰巧遇上了他，但他好像没认出你；\n\n你想起了在他宿舍度过的那个下午，酒壮怂人胆，不由自主地扑到他怀里；\n\n然后你把他带到了你的包间，那滋味比你记忆中的还要好，要不是中途你男友的电话突然打来….\n\n之后，你跟他去了那个熟悉的宿舍，今夜的缠绵注定要有第三人的存在！\n\n⚠️涉及元素：女主出轨 （有原因）、大量粗口羞辱、激烈行为；SP、强制、吃醋、耳语、三人共处一室 (过程1V1)",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-009",
    "number": "009",
    "title": "反击游戏2",
    "typeTags": [],
    "duration": "",
    "intro": "时长：44分钟\n\n「片场之上，他是任人拿捏的男演员，片场之下，他才是掌控一切的导演。」\n\n一场精心策划的“讲戏”，一杯动了手脚的奶茶，你落入他精心设下的情欲陷阱，昔日高高在上的女神，终将成为掌中玩物……\n\n⚠️涉及元素：粗口羞辱、3P、双龙、舔脚（男舔女）、下药、内射",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-010",
    "number": "010",
    "title": "温泉之旅2",
    "typeTags": [],
    "duration": "",
    "intro": "时长：88分钟\n\n「温泉私密双人行，却变成三人游戏。」\n\n白天他是体贴入微的忠犬男友，夜里却窥见最不堪的秘密——当兄弟的手抚上女友的腿，当谎言在缆车中无声蔓延……\n\n这一次的温泉，滚烫的不只是水。\n\n⚠️涉及元素：缆车play、指奸、粗口羞辱、灌肠、当众排泄、3P、肛交、水中窒息、双龙等！",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-011",
    "number": "011",
    "title": "男生宿舍3",
    "typeTags": [],
    "duration": "",
    "intro": "时长：45分钟\n\n「舞会化妆间里的偷情，藏着最汹涌的醋意与真相。」\n\n渣男捧着花在礼堂等待，他却把你拽进无人角落——\n\n你被捏着下巴转向镜子：\n\n“看清楚，现在操你的人是谁。”\n\n从报复到心动，从误会到真相，这一次，不再放手了。\n\n⚠️涉及元素：涉及：舌吻、舔B、蹭B、大量前戏、粗口羞辱；打屁股、耳语、吃醋、占有欲满分💯",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-012",
    "number": "012",
    "title": "微醺的告白",
    "typeTags": [],
    "duration": "",
    "intro": "时长：53分钟\n\n「醋意发酵的夜，他借酒壮胆敲开你的房门。」\n\n同窗的献殷勤让他灌醉自己，却终于在醉意中失控——\n\n从生涩表白到激烈交合，从颤抖的指尖到发烫的身体……\n\n当行李箱里的小玩具暴露在灯光下，今晚的“毕业考核”才刚刚开始。\n\n💗涉及元素：超长前戏， 超多夸夸，AFTERCARE!",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-013",
    "number": "013",
    "title": "欲望列车",
    "typeTags": [],
    "duration": "",
    "intro": "时长：33分钟\n\n白日的机场，喧嚣中隐藏着你们悄悄升起的欲火；深夜的列车，寂静中弥漫着无法抗拒的缠绵。\n\n你在人群中故意挑起男友的注意，明知众目睽睽，却无法抑制久别后的渴望。\n\n当你们偷偷溜进机场男厕所，紧张与刺激交织，每一次轻喘都像火焰，点燃他在隔壁低沉呼吸的渴望。\n\n夜幕下的火车上，男友沉睡疲惫，而他的靠近让你的心跳逐渐加速。从初见的悸动到被迫面对错位的刺激，你与身边每个人的存在都成为身体和心灵的催化剂……\n\n每一次耳语、每一次靠近，都在悄然撕开心理的防线，让你的欲望无可遏制地奔涌。\n\n⚠️涉及元素：轻微强制、耳语挑逗、公共场所、背德、人前",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-014",
    "number": "014",
    "title": "训犬师的专属调教",
    "typeTags": [],
    "duration": "",
    "intro": "时长：35分钟\n\n一通看似寻常的客户电话，一场精心伪装的咨询。\n\n你在电话里描述着一只“非常固执”、“需要被彻底管教”的狗狗，语气急切，甚至试探着询问“鞭子”和“特别结实的项圈”。训犬师耐心回应，心中却逐渐升起疑云——你所描述的细节，似乎超出了寻常宠物的范畴。\n\n直到你独自走进宠物店，直到他凝视着你：\n\n“难道…您说的‘它’，不是指的狗，而是您自己？”\n\n空气凝固。你的沉默、紧张、细微的颤抖，已经给出了回答。\n\n你亲口承认，渴望被调教，主动来到这里，请求他像训练一只绝对服从的狗一样训练你。\n\n安全词确立，游戏开始。\n\n羞耻与快感交织，每一次疼痛都是服从的证明。你的身体、意志、欲望，全部交付于他。最终，你完全成为他的宠物，归属与支配达到极致。\n\n⚠️涉及元素：SM、D/s、宠物扮演（人宠 / 犬化）、服从训练、心理调教、精神支配、道具玩弄、SP、疼痛调教、羞耻玩法、自愿强制（轻）、高潮控制、爬行",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-015",
    "number": "015",
    "title": "男友出差回来：快脱裤子，我忍不住了！",
    "typeTags": [],
    "duration": "",
    "intro": "时长：21分钟\n\n出差许久的男朋友终于回家啦。\n\n听到熟悉的声音，你迫不及待扑向他怀里，思念和欲望在一瞬间爆发。\n\n紧贴的身体、急切的吻，每一次触碰都点燃深埋的渴望。\n\n熟悉的气息、热烈的心跳，把压抑太久的思念和欲望彻底释放。\n\n这是一个简单的小日常作品，带你体验和男友久别重逢时，最自然、最直接的甜蜜时刻。",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-016",
    "number": "016",
    "title": "穿越进ABO世界发情期被Alpha捡回家",
    "typeTags": [],
    "duration": "",
    "intro": "时长：28分钟\n\n**【ABO】世界观简介（听前须知）**https://stupendous-cobweb-50f.notion.site/ABO-2f505c676dee804f9c46daf566d0a234?source=copy_link\n\n一觉醒来你穿越到与地球几乎无异的平行世界，唯一不同的是这里实行ABO性别体系。你并未察觉自己已成为Omega，更不知道正处于发情期来临的边缘。\n\n像往常一样，你出门买饭，却因发情期突然发作而在街头晕倒，信息素引来路人注目。经营书店的Alpha男主将你救回店中，试图为你注射抑制剂缓解症状。\n\n然而，你对这个世界一无所知，完全不了解ABO的生理规则，更不懂什么是发情期、抑制剂与标记。你以为男主给你打针是意图不轨，因此拼命抗拒，导致错过了使用抑制剂的最佳时机。\n\n随着信息素持续扩散与交织，男主也因长时间接触你的信息素而进入易感期，理智逐渐崩溃。最终在生理本能的驱动下，你们完成了永久标记，从陌生走向绑定，展开一段由误会、本能与责任交织的关系。\n\n⚠️涉及元素：ABO、强制爱",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-017",
    "number": "017",
    "title": "厨房捣乱，逃跑失败被狠狠爆操",
    "typeTags": [],
    "duration": "",
    "intro": "时长：26分钟\n\n看着正在厨房为你认真做饭的男友，你小心思一动，打算给男友做饭增加一点难度。\n\n手不安分地在他身上游走，在耳边吹气，喘息挑逗。\n\n恶作剧成功你正准备转身逃跑。\n\n却被一把抓住，直接拽回怀里。\n\n你心里非常清楚捣乱逃跑失败的后果。\n\n不狠狠挨一顿操，是绝对跑不掉了。\n\n⚠️涉及元素：舌吻、揉胸、蹭B、大量前戏",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-018",
    "number": "018",
    "title": "你喂的流浪狗找上门来了！",
    "typeTags": [],
    "duration": "",
    "intro": "时长：75分钟\n你住的小区里有一只可爱的小流浪狗。\n和别的狗狗不一样，它第一眼就认定了你。\n对别人总是凶巴巴的，只吃你喂的东西，也只会对你撒娇。\n每次见到你，尾巴都会摇得停不下来。\n你一直犹豫要不要把它带回家。\n一方面担心它更喜欢外面的自由，一方面又怕自己工作太忙，没办法好好陪它。\n直到有一天，下起了很大的雨。\n你一次又一次忍不住看向窗外，才发现自己对那只小狗的担心，早就超过了想象。\n就在你犹豫要不要出门去找它的时候——\n家门忽然被敲响了。\n门外那只浑身湿透、可怜巴巴看着你的“人”，居然说——\n他就是那只一直等着你的小流浪狗。\n等等…\n小狗怎么会说人话？\n谁不想拥有一只只对自己撒娇、又黏人又听话的小狗呢？\n更何况——\n它还可以变成你的男朋友。\n接下来，就和这只只认你一个主人的小狗，一起探索更多只属于你们之间的秘密吧。\n⚠️涉及元素：把小狗玩哭、舔胸、后入、女上、大量前戏、温馨日常",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-019",
    "number": "019",
    "title": "嫂子开门，我是我哥",
    "typeTags": [],
    "duration": "",
    "intro": "时长：77分钟\n\n“嫂子开门，我是我哥。”\n他用一句玩笑般的谎话，推开了那扇不该打开的门。\n他对你示好，关心你的生活，制造浪漫，\n一点一点填补你心里的空缺——\n除了那个名义上的身份，\n他似乎才是更懂你、更适合你的人……\n你不是没有拒绝过。\n只是每一次，他都能用更温柔、也更危险的方式让你动摇。\n直到那天——\n装病、示弱、靠近，\n他一步步逼近你，把你努力维持的冷静与克制彻底撕开，\n让你再也无法逃避自己真实的情绪。\n黑暗中，追逐、躲藏、呼吸交错——\n他一步步逼近，不再给你退路。\n分不清是主动还是被动，当你们靠近的那一刻，\n一切早已失控。\n\n⚠️涉及元素：强制、背德、引诱、偷窥、镜前、温馨日常",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-020",
    "number": "020",
    "title": "人鱼：深海标记",
    "typeTags": [],
    "duration": "",
    "intro": "时长：50分钟\n\n你本该死在那场风暴里。\n冰冷的海水灌入口鼻，意识一点点被吞没。\n就在你以为一切结束的时候，有人把你从死亡中拖了回来。\n他救了你。\n为你取暖，为你处理伤口，让你活下来。\n你以为他是个好人，可没想到他根本不是人类。\n当人鱼不再是传说中的生物，当你被拖入无尽的深海，你才会明白，活着的代价是什么……\n\n⚠️涉及元素：强制爱、人外（人鱼）、异形生殖器、深海交配、强制口 / 深喉、窒息、群体注视、强制顺从",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  },
  {
    "id": "paid-021",
    "number": "021",
    "title": "今天也是好乖的小狗",
    "typeTags": [],
    "duration": "",
    "intro": "时长：80分钟\n\n主人回家的时候，小狗就已经乖乖等着了。\n\n眼睛亮亮的，期待着主人的奖励。\n\n明明害羞得发抖，却还是会听话地张嘴、跪好，被主人一点点调教成最乖的小狗。\n\n舔手指、口交、深喉、蒙眼，在命令、夸奖和一记记巴掌里，被欺负到眼泪汪汪。\n\n你越乖，主人就越想狠狠疼爱你；\n\n你越骚，主人就越想把你操到不停撒娇求饶。\n\n抽红的地方会被亲亲，疼的地方会被揉一揉。\n\n哭花的小脸会被擦干净，再被主人抱进怀里，好好哄、好好夸、好好疼。\n\n今天也是好乖的小狗。\n\n今天，也要被主人疼爱到最后。\n\n⚠️涉及元素：主人×小狗、口交、深喉、舔胸、蒙眼、镜前、拍照记录、巴掌抽脸、鸡巴打脸；\n\n抽胸、抽屁股、皮带、边抽边操、后入、颜射、超长甜蜜 aftercare、各种亲亲哄哄夸夸",
    "recommendReason": "",
    "previewLink": "",
    "purchaseLink": "",
    "includedItems": [],
    "categoryTags": [
      "付费作品"
    ]
  }
];

const paidUnlockLinks = [
  {
    "label": "解锁完整版",
    "note": "",
    "url": "https://payhip.com/jiyu12"
  }
];
