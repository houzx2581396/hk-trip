import React, { useState, useEffect } from 'react';
import {
  MapPin, Clock, Plane, Home, Utensils, Camera, Moon,
  Navigation, Sun, Ticket, Coffee, Ship, Mountain,
  IceCream, ExternalLink, HelpCircle, ChevronDown,
  CreditCard, ClipboardList, CloudSun, Shirt,
  Cloud, CloudRain, CloudDrizzle, CheckCircle2,
  MessageCircle, Volume2, ShoppingBag, Milestone
} from 'lucide-react';

// 行程資料定義
const itineraryData = {
  "3/6": [
    {
      id: "1-1",
      time: "14:50",
      title: "台北桃園機場登機",
      location: "桃園國際機場 (TPE)",
      description: "於登機門集合並準備登機，展開 2026 前往香港的美食之旅。",
      icon: <Ticket className="w-6 h-6" />,
      color: "bg-sky-500",
      link: "https://www.google.com/maps/search/?api=1&query=Taiwan+Taoyuan+International+Airport"
    },
    {
      id: "1-2",
      time: "16:55",
      title: "抵達香港國際機場",
      location: "香港國際機場 (HKG)",
      description: "順利降落香港。辦理入境手續、領取行李並準備入境。",
      icon: <Plane className="w-6 h-6" />,
      color: "bg-blue-600",
      link: "https://www.google.com/maps/search/?api=1&query=Hong+Kong+International+Airport"
    },
    {
      id: "1-3",
      time: "17:00 - 18:00",
      title: "移動至住宿地點",
      location: "香港住宿",
      description: "前往預訂的飯店辦理 Check-in，稍作休息。",
      icon: <Home className="w-6 h-6" />,
      color: "bg-indigo-500",
      link: "https://maps.app.goo.gl/rmFEbKMeeH2AMX4A9?g_st=ic"
    },
    {
      id: "1-4",
      time: "18:00 - 19:30",
      title: "晚餐 - 一點心",
      location: "一點心 One Dim Sum",
      description: "品嚐道地的米其林一星點心，推薦炸兩與鳳爪。",
      icon: <Utensils className="w-6 h-6" />,
      color: "bg-orange-500",
      link: "https://maps.app.goo.gl/z3cEJUq7w7TkwSrM7?g_st=ic"
    },
    {
      id: "1-5",
      time: "19:30 - 21:30",
      title: "廟街夜市與佳佳甜品",
      location: "廟街夜市 / 佳佳甜品",
      description: "感受道地的香港夜市氣氛，並品嚐連續多年獲得米其林推薦的佳佳甜品（芝麻糊、核桃露）。",
      icon: <Camera className="w-6 h-6" />,
      color: "bg-purple-500",
      link: "https://maps.app.goo.gl/7d3p22cf31H1Ksia9?g_st=ic",
      secondaryLink: "https://maps.app.goo.gl/PzZgcBK4FgiUQwNX8?g_st=ic",
      secondaryTitle: "查看佳佳甜品位置"
    },
    {
      id: "1-6",
      time: "深夜時段",
      title: "宵夜 - 華星冰室",
      location: "華星冰室 Capital Café",
      description: "經典的港式冰室，推薦炒蛋吐司與奶茶，感受濃濃的懷舊氣息。",
      icon: <Moon className="w-6 h-6" />,
      color: "bg-rose-500",
      link: "https://maps.app.goo.gl/kxMC78WAdUyDzBY6A?g_st=ic"
    }
  ],
  "3/7": [
    {
      id: "2-1",
      time: "08:30",
      title: "早餐 - 六安居",
      location: "六安居 Luk On Kui",
      description: "傳統推車飲茶體驗，感受老香港的早茶時光。",
      icon: <Utensils className="w-6 h-6" />,
      color: "bg-emerald-600",
      link: "https://maps.app.goo.gl/VTbXX3a3m4cH6sPh9?g_st=ic"
    },
    {
      id: "2-2",
      time: "上午時段",
      title: "甜點時刻",
      location: "Venchi Ice Cream",
      description: "在上環漫步時來一份義式冰淇淋，享受愜意早晨。",
      icon: <IceCream className="w-6 h-6" />,
      color: "bg-yellow-600",
      link: "https://maps.app.goo.gl/qvKfEt7qUxi8rWxSA?g_st=ic"
    },
    {
      id: "2-3",
      time: "上午時段",
      title: "點心 - 生記粥品",
      location: "生記粥品專家",
      description: "必吃的鮮魚粥，火候十足，口感綿密。",
      icon: <Coffee className="w-6 h-6" />,
      color: "bg-amber-500",
      link: "https://maps.app.goo.gl/5ixaaQz9RDfbzfeFA?g_st=ic"
    },
    {
      id: "2-4",
      time: "景點漫遊",
      title: "上環至中環文化巡禮",
      location: "古董街-半山電梯-大館",
      description: "走訪古董街、感受全球最長戶外電梯，並參觀古蹟大館。",
      icon: <Camera className="w-6 h-6" />,
      color: "bg-blue-400",
      link: "https://www.google.com/maps/search/?api=1&query=Tai+Kwun+Hong+Kong"
    },
    {
      id: "2-5",
      time: "午後飲品",
      title: "蘭芳園絲襪奶茶",
      location: "蘭芳園 Lan Fong Yuen",
      description: "絲襪奶茶的始祖，感受懷舊茶餐廳魅力。",
      icon: <Coffee className="w-6 h-6" />,
      color: "bg-teal-600",
      link: "https://maps.app.goo.gl/UU4CYE3niYLGXrZ19?g_st=ic"
    },
    {
      id: "2-6",
      time: "13:30",
      title: "午餐 - 一樂燒鵝",
      location: "一樂燒鵝 Yat Lok",
      description: "米其林推薦燒鵝，皮脆肉嫩汁香。",
      icon: <Utensils className="w-6 h-6" />,
      color: "bg-orange-600",
      link: "https://maps.app.goo.gl/4nvAWQPP9hupicSA7?g_st=ic"
    },
    {
      id: "2-7",
      time: "15:00",
      title: "長洲島海島體驗",
      location: "中環碼頭 -> 長洲",
      description: "搭船前往長洲，環島散步、吃大魚蛋與新鮮海鮮。",
      icon: <Ship className="w-6 h-6" />,
      color: "bg-cyan-600",
      link: "https://www.google.com/maps/search/?api=1&query=Cheung+Chau+Ferry+Pier"
    },
    {
      id: "2-8",
      time: "18:30",
      title: "太平山百萬夜景",
      location: "太平山頂 Victoria Peak",
      description: "搭船回中環後轉乘山頂纜車，飽覽震撼的香港夜色。",
      icon: <Mountain className="w-6 h-6" />,
      color: "bg-indigo-700",
      link: "https://www.google.com/maps/search/?api=1&query=Victoria+Peak+The+Peak+Tower"
    },
    {
      id: "2-9",
      time: "20:30",
      title: "維多利亞港漫步",
      location: "維多利亞港 Victoria Harbour",
      description: "下山前往海濱，欣賞璀璨的海港燈火。",
      icon: <Moon className="w-6 h-6" />,
      color: "bg-purple-700",
      link: "https://www.google.com/maps/search/?api=1&query=Victoria+Harbour"
    }
  ],
  "3/8": [
    {
      id: "3-1",
      time: "09:00",
      title: "早餐 - 金華冰室",
      location: "金華冰室 Kam Wah Cafe",
      description: "必吃金牌菠蘿油，外皮酥脆內裡鬆軟，搭配厚切牛油是完美組合。",
      icon: <Utensils className="w-6 h-6" />,
      color: "bg-emerald-600",
      link: "https://maps.app.goo.gl/ovtjUScNvUG8Uvdy7?g_st=ic"
    },
    {
      id: "3-2",
      time: "上午時段",
      title: "旺角街頭散策與小食",
      location: "金魚街 - 通菜街 - 女人街",
      description: "走訪旺角獨特的街道地標，品嚐肥姐小食與椰汁大王。",
      icon: <Camera className="w-6 h-6" />,
      color: "bg-purple-500",
      link: "https://maps.app.goo.gl/FZgApAdhSieZitho6?g_st=ic",
      secondaryLink: "https://maps.app.goo.gl/sy2JFbKXXPkjSmpt5?g_st=ic",
      secondaryTitle: "查看椰汁大王位置"
    },
    {
      id: "3-3",
      time: "11:00",
      title: "伴手禮 - 嘉多娜麵包",
      location: "嘉多娜麵包店 Kadorar Bakery",
      description: "人氣爆棚的法式布丁包，外層脆口、內餡濃郁。",
      icon: <Coffee className="w-6 h-6" />,
      color: "bg-amber-500",
      link: "https://maps.app.goo.gl/cJHL9PNppxqbbXJj8?g_st=ic"
    },
    {
      id: "3-4",
      time: "12:30",
      title: "午餐 - 榕哥陳皮燒鵝",
      location: "榕哥陳皮燒鵝 (砵蘭街店)",
      description: "獨特的陳皮香氣燒鵝，皮脆肉美，是油麻地一帶的高人氣名物。",
      icon: <Utensils className="w-6 h-6" />,
      color: "bg-orange-600",
      link: "https://maps.app.goo.gl/AWDK3GcBwKf9udDv7?g_st=ic"
    },
    {
      id: "3-5",
      time: "14:00",
      title: "點心 - 澳洲牛奶公司",
      location: "澳洲牛奶公司 Australia Dairy Co.",
      description: "經典的蛋白燉鮮奶與炒蛋，感受全港最速服務與地道港味。",
      icon: <IceCream className="w-6 h-6" />,
      color: "bg-yellow-600",
      link: "https://maps.app.goo.gl/xr6mLAtQPsckJ3DH8?g_st=ic"
    },
    {
      id: "3-6",
      time: "下午時段",
      title: "超人氣蛋撻 - Hashtag B",
      location: "Hashtag B (尖沙咀)",
      description: "近期最夯的花形蛋撻，千層酥皮酥脆無比，層次感豐富。",
      icon: <Coffee className="w-6 h-6" />,
      color: "bg-teal-600",
      link: "https://maps.app.goo.gl/LKL91EtLZGbiZBzD6?g_st=ic"
    },
    {
      id: "3-7",
      time: "15:00",
      title: "維港漫步 - 星光大道",
      location: "尖沙咀星光大道 Avenue of Stars",
      description: "在返程前漫步於維多利亞港海旁，與電影巨星的手印合影。",
      icon: <Camera className="w-6 h-6" />,
      color: "bg-blue-400",
      link: "https://maps.app.goo.gl/CkbCPeZa6pvBELGW8?g_st=ic"
    },
    {
      id: "3-8",
      time: "16:00",
      title: "移動至機場",
      location: "香港國際機場",
      description: "搭乘機場快線或巴士前往機場，準備辦理登機。建議提前三小時抵達。",
      icon: <Plane className="w-6 h-6" />,
      color: "bg-indigo-500",
      link: "https://www.google.com/maps/search/?api=1&query=Hong+Kong+International+Airport"
    },
    {
      id: "3-9",
      time: "18:50",
      title: "起飛返回台北",
      location: "香港國際機場 (HKG)",
      description: "結束充實的香港美食之旅，帶著滿滿回憶與伴手禮平安返國。",
      icon: <Ticket className="w-6 h-6" />,
      color: "bg-sky-500",
      link: "https://www.google.com/maps/search/?api=1&query=Hong+Kong+International+Airport"
    }
  ]
};

// 備案行程資料
const backupData = [
  {
    id: "b1",
    category: "藝術文化",
    title: "西九文化區 (WKCD)",
    location: "M+ 博物館 / 香港故宮 / 藝術公園",
    description: "全港最適合看夕陽的海濱草坪，更有世界級的 M+ 當代藝術館。若行程提早結束，來這裡散步非常愜意。",
    icon: <Camera className="w-5 h-5" />,
    color: "bg-indigo-600",
    link: "https://www.google.com/maps/search/?api=1&query=West+Kowloon+Cultural+District"
  },
  {
    id: "b2",
    category: "血拚購物",
    title: "銅鑼灣中心地帶",
    location: "時代廣場 / 崇光百貨 / 希慎廣場",
    description: "相較於尖沙咀，銅鑼灣的零售品牌更集中且多樣。必逛誠品書店與各類潮流選品店。",
    icon: <ShoppingBag className="w-5 h-5" />,
    color: "bg-pink-600",
    link: "https://www.google.com/maps/search/?api=1&query=Causeway+Bay+Times+Square"
  },
  {
    id: "b3",
    category: "必吃甜點",
    title: "Bakehouse",
    location: "中環 / 尖沙咀 / 銅鑼灣",
    description: "超人氣酸種蛋撻，酥皮層次極多且香濃，通常在下午前就會售罄，路過有開一定要買。",
    icon: <Coffee className="w-5 h-5" />,
    color: "bg-amber-600",
    link: "https://www.google.com/maps/search/?api=1&query=Bakehouse+Hong+Kong"
  },
  {
    id: "b4",
    category: "宗教建築",
    title: "黃大仙祠",
    location: "九龍黃大仙",
    description: "香港最富盛名的廟宇，以「有求必應」著稱。傳統的中式建築與求籤文化非常值得一訪。",
    icon: <Milestone className="w-5 h-5" />,
    color: "bg-red-600",
    link: "https://www.google.com/maps/search/?api=1&query=Wong+Tai+Sin+Temple"
  },
  {
    id: "b5",
    category: "高空美景",
    title: "昂坪 360 & 大佛",
    location: "大嶼山昂坪",
    description: "搭乘底部透明的水晶纜車，俯瞰大嶼山海景與機場。抵達後可參觀宏偉的天壇大佛。",
    icon: <Mountain className="w-5 h-5" />,
    color: "bg-emerald-600",
    link: "https://www.google.com/maps/search/?api=1&query=Tian+Tan+Buddha"
  },
  {
    id: "b6",
    category: "精品藝術",
    title: "K11 MUSEA",
    location: "尖沙咀海濱",
    description: "被譽為「維港邊的矽谷文化藝術設計館」，不僅好逛，建築設計本身就是一件藝術品。",
    icon: <ShoppingBag className="w-5 h-5" />,
    color: "bg-stone-800",
    link: "https://maps.app.goo.gl/rmFEbKMeeH2AMX4A9?g_st=ic"
  },
  {
    id: "b7",
    category: "繽紛夜生活",
    title: "蘭桂坊 (LKF)",
    location: "中環德己立街",
    description: "香港夜生活的靈魂，滿街的特色酒吧與餐酒館。若晚上還有體力，來這裡感受異國風情與狂歡氣氛非常合適。",
    icon: <Moon className="w-5 h-5" />,
    color: "bg-fuchsia-600",
    link: "https://www.google.com/maps/search/?api=1&query=Lan+Kwai+Fong"
  },
  {
    id: "b8",
    category: "攝影地標",
    title: "鰂魚涌怪獸大廈",
    location: "鰂魚涌海山樓",
    description: "《變形金剛》取景地，極度密集的建築呈現出震撼的視覺壓迫感，是體驗老香港居住密度的經典地標。",
    icon: <Camera className="w-5 h-5" />,
    color: "bg-slate-600",
    link: "https://www.google.com/maps/search/?api=1&query=Yick+Cheong+Building"
  },
  {
    id: "b9",
    category: "經典體驗",
    title: "天星小輪 (中環-尖沙咀)",
    location: "維多利亞港碼頭",
    description: "最便宜卻最奢華的海景交通工具。若不想走路，搭一趟小輪穿越維港，吹著海風欣賞兩岸天際線是絕佳享受。",
    icon: <Ship className="w-5 h-5" />,
    color: "bg-cyan-700",
    link: "https://www.google.com/maps/search/?api=1&query=Star+Ferry+Pier"
  }
];

const riddles = [
  { question: "什麼東西越洗越髒？", answer: "水", acceptedAnswers: ["水", "清水"] },
  { question: "什麼老鼠用兩隻腳走路？", answer: "米老鼠", acceptedAnswers: ["米奇", "米老鼠", "mickey", "mickey mouse"] },
  { question: "什麼鴨子用兩隻腳走路？", answer: "所有的鴨子", acceptedAnswers: ["所有鴨子", "鴨子", "所有的", "每隻鴨子", "唐老鴨"] },
  { question: "誰一年只上一天班？", answer: "聖誕老人", acceptedAnswers: ["聖誕老公公", "聖誕老人", "santa", "聖誕爺爺"] },
  { question: "什麼布不能做衣服？", answer: "瀑布", acceptedAnswers: ["瀑布", "抹布", "帆布", "尿布"] },
  { question: "什麼雞沒有翅膀？", answer: "田雞", acceptedAnswers: ["田雞", "青蛙", "火雞"] },
  { question: "一加一等於多少？（猜一字）", answer: "王", acceptedAnswers: ["王", "丰"] },
  { question: "哪裡的海不產魚？", answer: "辭海", acceptedAnswers: ["辭海", "死海", "人海", "火海"] },
  { question: "什麼門永遠關不上？", answer: "球門", acceptedAnswers: ["球門", "鬼門", "嗓門"] },
  { question: "小白加小白等於什麼？", answer: "小白兔", acceptedAnswers: ["小白兔", "小白two"] },
  { question: "什麼東西有頭無腳？", answer: "蝌蚪", acceptedAnswers: ["蝌蚪", "蛇", "魚", "火車"] },
  { question: "什麼車沒有輪子？", answer: "風車", acceptedAnswers: ["風車", "水車", "纜車"] },
  { question: "什麼動物最喜歡問為什麼？", answer: "豬", acceptedAnswers: ["豬", "小豬"] },
  { question: "什麼字全世界通用？", answer: "阿拉伯數字", acceptedAnswers: ["數字", "阿拉伯數字", "笑", "微笑"] },
  { question: "什麼東西破了才有用？", answer: "雞蛋", acceptedAnswers: ["蛋", "雞蛋"] },
  { question: "什麼人不怕冷？", answer: "雪人", acceptedAnswers: ["雪人", "冰人"] },
  { question: "什麼瓜不能吃？", answer: "傻瓜", acceptedAnswers: ["傻瓜", "苦瓜", "頂呱呱"] },
  { question: "什麼東西最容易打破？", answer: "紀錄", acceptedAnswers: ["紀錄", "記錄", "沉默", "玻璃"] },
  { question: "什麼花不能摸？", answer: "火花", acceptedAnswers: ["火花", "眼花", "浪花", "雪花", "水花"] },
  { question: "什麼時候1+1不等於2？", answer: "算錯的時候", acceptedAnswers: ["算錯的時候", "算錯時", "算錯", "錯的時候"] },
  { question: "又小又大是什麼字？", answer: "尖", acceptedAnswers: ["尖"] },
  { question: "把大象裝進冰箱需要幾步？", answer: "三步", acceptedAnswers: ["三步", "3步", "3", "三", "三步驟"] },
  { question: "透明的劍是什麼劍？", answer: "看不見", acceptedAnswers: ["看不見", "隱形劍"] },
  { question: "猴子最討厭什麼線？", answer: "平行線", acceptedAnswers: ["平行線", "因為沒有相交", "沒有相交"] },
  { question: "什麼冰沒有水？", answer: "乾冰", acceptedAnswers: ["乾冰"] },
  { question: "綠豆撞到頭變成什麼？", answer: "紅豆", acceptedAnswers: ["紅豆", "流血的綠豆"] },
  { question: "什麼東西晚上才長出來，白天就掉光？", answer: "星星", acceptedAnswers: ["星星", "月亮"] },
  { question: "哪個月有28天？", answer: "每個月", acceptedAnswers: ["每個月", "都有", "全部", "每個", "12個月"] },
  { question: "兩對父子去買帽子，為什麼只買了三頂？", answer: "祖孫三代", acceptedAnswers: ["祖孫三代", "爺爺爸爸兒子", "他們是祖孫", "爺爺爸爸和兒子", "三代同堂"] },
  { question: "黑人吃白巧克力？(猜一四字成語)", answer: "黑白通吃", acceptedAnswers: ["黑白通吃"] },
  { question: "什麼時候四減一會等於五？", answer: "四邊形剪去一個角", acceptedAnswers: ["四邊形", "剪去一個角", "正方形剪掉一個角", "折角", "四邊形剪掉一個角", "剪掉一個角"] },
  { question: "什麼事你絕對無法用一隻手完成？", answer: "拍手", acceptedAnswers: ["拍手", "鼓掌"] },
  { question: "什麼袋子裝不滿？", answer: "口袋", acceptedAnswers: ["口袋", "腦袋", "垃圾袋"] },
  { question: "有什麼東西比大象還大，卻沒有重量？", answer: "大象的影子", acceptedAnswers: ["大象的影子", "影子", "象影"] },
  { question: "什麼東西有嘴不說話？", answer: "茶壺", acceptedAnswers: ["茶壺", "水壺", "花瓶"] },
  { question: "狼來了（猜一水果）", answer: "楊桃", acceptedAnswers: ["楊桃", "羊逃", "羊桃"] },
  { question: "羊來了（猜一水果）", answer: "草莓", acceptedAnswers: ["草莓", "草沒"] },
  { question: "哪種動物最沒有方向感？", answer: "麋鹿", acceptedAnswers: ["麋鹿", "迷路"] },
  { question: "什麼龍最輕？", answer: "保麗龍", acceptedAnswers: ["保麗龍", "馬卡龍"] },
  { question: "胖子從12樓掉下來變什麼？", answer: "死胖子", acceptedAnswers: ["死胖子"] },
  { question: "身穿綠衣裳，肚裡水汪汪，生的子兒多，個個黑臉膛。（猜一水果）", answer: "西瓜", acceptedAnswers: ["西瓜"] },
  { question: "五個兄弟，住在一起，名字不同，高矮不齊。（猜一人體器官）", answer: "手指", acceptedAnswers: ["手指", "手指頭", "手"] },
  { question: "有水可養魚，有土可種菜，有人不是你，有馬跑得快。（猜一字）", answer: "也", acceptedAnswers: ["也", "池地他馳"] },
  { question: "黃包袱，包黑豆，嘗一口，甜水流。（猜一水果）", answer: "木瓜", acceptedAnswers: ["木瓜", "百香果"] },
  { question: "哪一種昆蟲最節儉？", answer: "蠶", acceptedAnswers: ["蠶", "蠶寶寶", "因為會結繭", "結繭"] },
  { question: "蜘蛛俠是什麼顏色？", answer: "白色", acceptedAnswers: ["白色", "白", "因為失敗的man", "失敗的man"] },
  { question: "超人保護地球，那誰保護城市？", answer: "螢幕", acceptedAnswers: ["螢幕", "屏幕", "螢幕保護程式"] },
  { question: "什麼書在書店買不到？", answer: "秘書", acceptedAnswers: ["秘書", "遺書", "血書", "辭書"] },
  { question: "打狗要看主人，那打老虎要看什麼？", answer: "看醫生", acceptedAnswers: ["看醫生", "看你有沒有種", "看有沒有種", "看命", "看你有沒有命"] },
  { question: "一個人有三根頭髮，為什麼他還要剪去一根？", answer: "他想梳中分", acceptedAnswers: ["想梳中分", "他想梳中分", "梳中分", "中分"] }
];

const TimelineItem = ({ item, isLast, completed, onToggle }) => {
  return (
    <div
      className={`relative flex flex-col mb-10 group cursor-pointer transition-opacity duration-300 ${completed ? 'opacity-60' : ''}`}
      onClick={() => window.location.href = item.link}
    >
      {!isLast && (
        <span
          className={`absolute left-6 top-12 h-full w-0.5 ${completed ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gray-200 dark:bg-gray-700'}`}
          aria-hidden="true"
        />
      )}

      <div className="flex items-start gap-5">
        <button
          onClick={(e) => { e.stopPropagation(); onToggle(item.id); }}
          className={`relative z-10 flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${completed ? 'bg-gray-400 dark:bg-gray-600' : item.color}`}
          aria-label={completed ? '標記為未完成' : '標記為已完成'}
        >
          {completed ? <CheckCircle2 className="w-6 h-6" /> : item.icon}
        </button>

        <div className={`flex-1 p-5 rounded-2xl shadow-md border transition-all ${completed ? 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700' : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-800'}`}>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
              <span className="text-xs font-bold text-gray-700 dark:text-gray-200">
                {item.time}
              </span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); onToggle(item.id); }}
              className={`p-2 rounded-full transition-colors ${completed ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-green-50 hover:text-green-500'}`}
              aria-label={completed ? '標記為未完成' : '標記為已完成'}
            >
              {completed ? <CheckCircle2 className="w-4 h-4" /> : <Navigation className="w-4 h-4" />}
            </button>
          </div>

          <h3 className={`text-lg font-bold mb-1 leading-tight ${completed ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-gray-900 dark:text-white'}`}>
            {item.title}
          </h3>

          <div className={`flex items-center text-sm mb-3 font-medium ${completed ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-gray-500 dark:text-gray-400'}`}>
            <MapPin className={`w-3.5 h-3.5 mr-1 ${completed ? 'text-gray-400' : 'text-red-500'}`} />
            {item.location}
          </div>

          <p className={`text-sm leading-relaxed mb-2 ${completed ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-gray-600 dark:text-gray-300'}`}>
            {item.description}
          </p>

          {item.secondaryLink && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = item.secondaryLink;
              }}
              className="inline-flex items-center text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <MapPin className="w-3 h-3 mr-1" />
              {item.secondaryTitle || "查看相關位置"}
              <ExternalLink className="w-3 h-3 ml-1" />
            </button>
          )}

          <div className="mt-4 pt-3 border-t border-gray-50 dark:border-gray-700 flex justify-end items-center">
            <span className={`text-xs font-semibold group-hover:translate-x-1 transition-transform ${completed ? 'text-gray-400' : 'text-blue-500'}`}>
              點擊查看地圖 →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    id: "faq-1",
    icon: <CloudSun className="w-5 h-5" />,
    question: "天氣預報（3/6 - 3/9）",
    customRender: true,
    weather: [
      { date: "03/06（五）", low: 17, high: 24, label: "多雲偶晴", icon: <CloudSun className="w-8 h-8 text-gray-500 dark:text-gray-300" /> },
      { date: "03/07（六）", low: 16, high: 23, label: "多雲", icon: <Cloud className="w-8 h-8 text-gray-500 dark:text-gray-300" /> },
      { date: "03/08（日）", low: 17, high: 22, label: "多雲偶陣雨", icon: <CloudDrizzle className="w-8 h-8 text-blue-500" /> },
      { date: "03/09（一）", low: 15, high: 23, label: "多雲轉晴", icon: <CloudSun className="w-8 h-8 text-yellow-500" /> },
    ],
    tips: `• 平均濕度約 80%，體感偏潮濕
• 三月平均有 10 天降雨，建議隨身攜帶雨具
• 早晚溫差約 6-8°C，注意保暖`
  },
  {
    id: "faq-2",
    icon: <Shirt className="w-5 h-5" />,
    question: "建議穿著",
    answer: `【日間（22-24°C）】
• 短袖或薄長袖上衣
• 薄長褲或牛仔褲
• 舒適的運動鞋或走路鞋（長洲島、太平山需步行較多）

【傍晚 / 山上（15-17°C）】
• 薄外套或連帽衫（太平山頂風大偏涼）
• 長袖上衣搭配方便穿脫

【防雨準備】
• 輕便防風防水外套
• 摺疊傘（隨身攜帶）

【Tips】
• 採「洋蔥式穿搭」，方便隨時增減
• 室內冷氣偏強，薄外套可隨身帶
• 長洲島碼頭風大，建議帶防風外套`
  },
  {
    id: "faq-3",
    icon: <CreditCard className="w-5 h-5" />,
    question: "如何添加八達通？",
    answer: `【iPhone / Apple Watch】
1. 開啟「錢包」App → 點擊右上角「+」
2. 選擇「交通卡」→「八達通」
3. 選擇儲值金額（最低 HK$100），完成加卡
4. 將 iPhone 或 Apple Watch 靠近讀卡器即可使用

【Android / Google Pay】
1. 開啟 Google Pay → 點擊「交通」
2. 搜尋「八達通」並新增
3. 選擇儲值金額，完成設定

【實體卡】
• 抵達香港機場後，於客務中心或便利商店購買「遊客八達通」（售價 HK$39，不可退還）
• 可用於地鐵、巴士、渡輪、便利商店、餐廳等
• 建議儲值 HK$300–500 足夠四天使用`
  },
  {
    id: "faq-4",
    icon: <ClipboardList className="w-5 h-5" />,
    question: "行前準備清單",
    answer: `【證件與文件】
□ 護照（效期需超過 6 個月）
□ 來回機票確認信
□ 飯店訂房確認信
□ 旅遊平安險保單

【電子設備】
□ 手機充電器 & 行動電源
□ 轉接頭（香港使用英規三腳插頭）
□ eSIM 或 WiFi 分享器（建議提前購買香港上網卡）

【金錢】
□ 港幣現金（建議先換 HK$2,000–3,000）
□ 信用卡（Visa/Mastercard 通用）
□ 八達通卡（可到港後購買或手機加卡）

【個人物品】
□ 舒適好走的鞋子（行程走路多）
□ 輕便雨具 / 摺疊傘
□ 個人藥品 & 防曬乳`
  },
  {
    id: "faq-5",
    icon: <MessageCircle className="w-5 h-5" />,
    question: "廣東話點餐萬用句",
    customRender: true,
    cantonese: true,
    phrases: [
      {
        category: "入座", items: [
          { text: "搭檯", roman: "daap toi", meaning: "併桌／拼桌", tip: "茶餐廳人多時，店員會問「搭檯得唔得？」（可以併桌嗎？），回答「得」即可" },
          { text: "幾多位？", roman: "gei do wai", meaning: "幾位？", tip: "店員會在門口問你，直接比手指或說數字即可" },
        ]
      },
      {
        category: "點餐", items: [
          { text: "唔該，我想要", roman: "m goi, ngo soeng jiu", meaning: "請問，我想要⋯⋯", tip: "萬用開場白，後面接餐點名稱" },
          { text: "例牌", roman: "lai paai", meaning: "正常份量", tip: "「例牌乾炒牛河」= 一份正常份量的乾炒牛河" },
          { text: "走冰", roman: "zau bing", meaning: "去冰", tip: "「凍檸茶走冰」= 冰檸檬茶去冰" },
          { text: "少甜", roman: "siu tim", meaning: "少糖", tip: "「少甜唔該」= 少糖，謝謝" },
          { text: "加底", roman: "gaa dai", meaning: "加飯 / 加麵", tip: "飯量不夠時使用" },
        ]
      },
      {
        category: "飲茶專用（如六安居）", items: [
          { text: "點心紙", roman: "dim sam zi", meaning: "點心單", tip: "用筆在點心紙上剔選想吃的品項" },
          { text: "加水", roman: "gaa seoi", meaning: "加熱水（續茶）", tip: "把茶壺蓋打開放著，服務員就會來加水" },
          { text: "蝦餃", roman: "haa gaau", meaning: "蝦餃" },
          { text: "燒賣", roman: "siu maai", meaning: "燒賣" },
          { text: "叉燒包", roman: "caa siu baau", meaning: "叉燒包" },
          { text: "腸粉", roman: "coeng fan", meaning: "腸粉" },
        ]
      },
      {
        category: "結帳", items: [
          { text: "唔該，埋單", roman: "m goi, maai daan", meaning: "結帳 / 買單", tip: "最常用！舉手喊「唔該，埋單！」即可" },
          { text: "唔該", roman: "m goi", meaning: "謝謝 / 請問 / 不好意思", tip: "萬用禮貌詞，叫人、道謝都可以用" },
          { text: "多謝", roman: "do ze", meaning: "謝謝（收到東西時用）", tip: "收到餐點或找零時說" },
        ]
      },
      {
        category: "冰室/茶餐廳專用（如華星冰室）", items: [
          { text: "凍檸茶", roman: "dung ning caa", meaning: "冰檸檬茶" },
          { text: "絲襪奶茶", roman: "si mat naai caa", meaning: "絲襪奶茶" },
          { text: "菠蘿油", roman: "bo lo jau", meaning: "菠蘿包夾牛油" },
          { text: "炒蛋多士", roman: "caau daan do si", meaning: "炒蛋吐司" },
          { text: "走甜", roman: "zau tim", meaning: "完全不加糖" },
        ]
      },
    ],
    tips: `• 「唔該」是最實用的一個詞，幾乎所有場合都能用
• 不確定時，指著菜單說「呢個」(ni go，這個) 也完全 OK
• 大部分餐廳服務員都能聽懂普通話，別太緊張！`
  }
];

const SpeakButton = ({ text }) => {
  const [speaking, setSpeaking] = useState(false);

  const speak = (e) => {
    e.stopPropagation();
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-HK';
    utterance.rate = 0.8;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  return (
    <button
      onClick={speak}
      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${speaking ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50'}`}
      aria-label={`播放「${text}」的廣東話發音`}
    >
      <Volume2 className="w-4 h-4" />
    </button>
  );
};

const CantonesePhrasesRenderer = ({ phrases, tips }) => (
  <div className="space-y-4">
    {phrases.map((group, gi) => (
      <div key={gi}>
        <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
          {group.category}
        </h4>
        <div className="space-y-2">
          {group.items.map((phrase, pi) => (
            <div key={pi} className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <SpeakButton text={phrase.text} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-base font-bold text-gray-900 dark:text-white">{phrase.text}</span>
                    <span className="text-xs text-blue-500 dark:text-blue-400 font-mono">{phrase.roman}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{phrase.meaning}</p>
                </div>
              </div>
              {phrase.tip && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 ml-11">
                  {phrase.tip}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    ))}
    {tips && (
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">Tips</h4>
        <pre className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
          {tips}
        </pre>
      </div>
    )}
  </div>
);

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-800 transition-all text-left"
      >
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          {item.icon}
        </div>
        <span className="flex-1 font-bold text-gray-900 dark:text-white text-sm">
          {item.question}
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="mt-1 mx-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
          {item.customRender && item.cantonese && item.phrases ? (
            <CantonesePhrasesRenderer phrases={item.phrases} tips={item.tips} />
          ) : item.customRender && item.weather ? (
            <>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {item.weather.map((w, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 text-center">
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-2">{w.date}</p>
                    <div className="flex justify-center mb-2">{w.icon}</div>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{w.low}°C - {w.high}°C</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{w.label}</p>
                  </div>
                ))}
              </div>
              <pre className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
                {item.tips}
              </pre>
            </>
          ) : (
            <pre className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
              {item.answer}
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

const BackupItem = ({ item }) => (
  <div
    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer hover:border-blue-300 dark:hover:border-blue-800 transition-all"
    onClick={() => window.location.href = item.link}
  >
    <div className="p-5">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2.5 rounded-xl text-white shadow-md ${item.color}`}>
          {item.icon}
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded-md">
          {item.category}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {item.title}
      </h3>
      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">
        <MapPin className="w-3 h-3 mr-1 text-red-500" />
        {item.location}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {item.description}
      </p>
      <div className="mt-4 pt-4 border-t border-gray-50 dark:border-gray-700 flex justify-between items-center text-[11px] font-bold">
        <span className="text-blue-500 uppercase tracking-tight">查看地圖</span>
        <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-blue-500 transition-colors" />
      </div>
    </div>
  </div>
);

const QuizModal = ({ quizState, setQuizState, onSubmit, onSkip, onClose }) => {
  if (!quizState.activeItemId) return null;

  const { riddle, mistakes, showAnswer, userInput } = quizState;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-sm p-6 overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
          <span className="sr-only">關閉</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 text-center">
          ⛩️ 猜燈謎挑戰
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
          答對才能打卡景點！(最多猜錯3次)
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-5 mb-6">
          <p className="text-lg font-bold text-blue-900 dark:text-blue-100 text-center leading-relaxed">
            {riddle.question}
          </p>
        </div>

        {showAnswer ? (
          <div className="mb-6 text-center">
            <p className="text-red-500 font-bold mb-2">哎呀！錯了三次啦 😅</p>
            <p className="text-gray-700 dark:text-gray-300">正確答案是：</p>
            <p className="text-2xl font-black text-green-600 dark:text-green-400 my-2">{riddle.answer}</p>
            <button
              onClick={onSkip}
              className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors"
            >
              打卡完成景點
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setQuizState(prev => ({ ...prev, userInput: e.target.value }))}
              placeholder="請輸入你的答案..."
              className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-center text-lg font-bold text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
              onKeyDown={(e) => { if (e.key === 'Enter') onSubmit(); }}
              autoFocus
            />
            {mistakes > 0 && (
              <p className="text-red-500 text-sm text-center font-bold animate-pulse">
                答錯了！還有 {3 - mistakes} 次機會
              </p>
            )}
            <button
              onClick={onSubmit}
              disabled={!userInput.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-200 dark:shadow-none"
            >
              提交答案
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [activeDay, setActiveDay] = useState("3/6");
  const [activeTab, setActiveTab] = useState("itinerary"); // "itinerary" | "faq"
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [completedItems, setCompletedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('hk-trip-completed');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  const [usedRiddles, setUsedRiddles] = useState(() => {
    try {
      const saved = localStorage.getItem('hk-trip-used-riddles');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [quizState, setQuizState] = useState({
    activeItemId: null,
    riddle: null,
    mistakes: 0,
    userInput: "",
    showAnswer: false
  });

  useEffect(() => {
    localStorage.setItem('hk-trip-completed', JSON.stringify(completedItems));
  }, [completedItems]);

  useEffect(() => {
    localStorage.setItem('hk-trip-used-riddles', JSON.stringify(usedRiddles));
  }, [usedRiddles]);

  const toggleComplete = (id) => {
    if (completedItems[id]) {
      setCompletedItems(prev => ({ ...prev, [id]: false }));
      return;
    }

    let availableRiddles = riddles.filter(r => !usedRiddles.includes(r.question));
    if (availableRiddles.length === 0) {
      availableRiddles = riddles;
      setUsedRiddles([]); // 重置已出過的題目
    }

    const randomRiddle = availableRiddles[Math.floor(Math.random() * availableRiddles.length)];
    setQuizState({
      activeItemId: id,
      riddle: randomRiddle,
      mistakes: 0,
      userInput: "",
      showAnswer: false
    });
  };

  const handleQuizSubmit = () => {
    const { riddle, mistakes, userInput, activeItemId } = quizState;
    const input = userInput.trim().toLowerCase();
    const isCorrect = input === riddle.answer.toLowerCase() ||
      (riddle.acceptedAnswers && riddle.acceptedAnswers.map(a => a.toLowerCase()).includes(input));

    if (isCorrect) {
      setCompletedItems(prev => ({ ...prev, [activeItemId]: true }));
      setUsedRiddles(prev => [...prev, riddle.question]);
      setQuizState({ activeItemId: null, riddle: null, mistakes: 0, userInput: "", showAnswer: false });
    } else {
      const newMistakes = mistakes + 1;
      if (newMistakes >= 3) {
        setQuizState(prev => ({ ...prev, mistakes: newMistakes, showAnswer: true }));
      } else {
        setQuizState(prev => ({ ...prev, mistakes: newMistakes, userInput: "" }));
      }
    }
  };

  const handleQuizSkip = () => {
    const { activeItemId, riddle } = quizState;
    setCompletedItems(prev => ({ ...prev, [activeItemId]: true }));
    setUsedRiddles(prev => [...prev, riddle.question]);
    setQuizState({ activeItemId: null, riddle: null, mistakes: 0, userInput: "", showAnswer: false });
  };

  const handleQuizClose = () => {
    setQuizState({ activeItemId: null, riddle: null, mistakes: 0, userInput: "", showAnswer: false });
  };

  const getProgress = (day) => {
    const items = itineraryData[day];
    const done = items.filter(item => completedItems[item.id]).length;
    return { done, total: items.length, percent: Math.round((done / items.length) * 100) };
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-950' : 'bg-gray-50'}`}>
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg font-black tracking-tighter text-gray-900 dark:text-white uppercase">
              HK <span className="text-blue-600 text-sm italic">Trip 2026</span>
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 日期切換 Tab */}
        <div className="max-w-xl mx-auto px-6 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
          {Object.keys(itineraryData).map((day, index) => (
            <button
              key={day}
              onClick={() => { setActiveDay(day); setActiveTab("itinerary"); }}
              className={`flex-none px-4 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === "itinerary" && activeDay === day
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none'
                : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                }`}
            >
              Day {index + 1}
            </button>
          ))}
          <button
            onClick={() => setActiveTab("faq")}
            className={`flex-none px-4 py-3 text-sm font-bold rounded-xl transition-all flex items-center gap-1.5 ${activeTab === "faq"
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none'
              : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
              }`}
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </button>
          <button
            onClick={() => setActiveTab("backup")}
            className={`flex-none px-4 py-3 text-sm font-bold rounded-xl transition-all flex items-center gap-1.5 ${activeTab === "backup"
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 dark:shadow-none'
              : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
              }`}
          >
            <Milestone className="w-4 h-4" />
            備案
          </button>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 pt-10 pb-24">
        {activeTab === "itinerary" ? (
          <>
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
                {activeDay === "3/6" ? "首日抵港：美食與夜市" :
                  activeDay === "3/7" ? "次日探索：海島與夜景" :
                    "末日巡禮：旺角小食與歸途"}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {activeDay === "3/6" ? "從台北啟程，直奔九龍心臟地帶體驗道地港味與霓虹夜色。" :
                  activeDay === "3/7" ? "穿越上環舊時光，搭船出海，迎接太平山頂之巔。" :
                    "最後衝刺旺角伴手禮與小食，帶著滿分驚喜前往機場。"}
              </p>

              {/* 行程進度追蹤 */}
              {(() => {
                const { done, total, percent } = getProgress(activeDay);
                return (
                  <div className="mt-5 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
                        行程進度
                      </span>
                      <span className={`text-sm font-bold ${percent === 100 ? 'text-green-500' : 'text-blue-600 dark:text-blue-400'}`}>
                        {done}/{total} 已完成 ({percent}%)
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ease-out ${percent === 100 ? 'bg-green-500' : 'bg-blue-600'}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    {percent === 100 && (
                      <p className="text-xs text-green-500 font-bold mt-2 text-center">
                        All Clear! 今日行程全部完成!
                      </p>
                    )}
                  </div>
                );
              })()}
            </div>

            <div className="relative">
              {itineraryData[activeDay].map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLast={index === itineraryData[activeDay].length - 1}
                  completed={!!completedItems[item.id]}
                  onToggle={toggleComplete}
                />
              ))}
            </div>
          </>
        ) : activeTab === "faq" ? (
          <>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <HelpCircle className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  常用問題 FAQ
                </h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                行前須知、天氣穿著、八達通等常見問題一次解答。
              </p>
            </div>
            {faqData.map(item => (
              <FAQItem key={item.id} item={item} />
            ))}
          </>
        ) : (
          <>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <Milestone className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  行程備案庫
                </h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                若行程提前結束或想臨時更換景點，這裡有香港最值得一探的遺珠選項。
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {backupData.map(item => (
                <BackupItem key={item.id} item={item} />
              ))}
            </div>
          </>
        )}

        <footer className="mt-16 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600 font-medium">
            2026 Itinerary Engine v4.1 • Senior Frontend Developer
          </p>
        </footer>
      </main>

      <QuizModal
        quizState={quizState}
        setQuizState={setQuizState}
        onSubmit={handleQuizSubmit}
        onSkip={handleQuizSkip}
        onClose={handleQuizClose}
      />
    </div>
  );
}