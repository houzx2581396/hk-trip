import React from 'react';
import {
  MapPin, Clock, Plane, Home, Utensils, Camera, Moon,
  Navigation, Sun, Ticket, Coffee, Ship, Mountain,
  IceCream, ExternalLink, HelpCircle, ChevronDown,
  CreditCard, ClipboardList, CloudSun, Shirt,
  Cloud, CloudRain, CloudDrizzle, CheckCircle2,
  MessageCircle, Volume2, ShoppingBag, Milestone
} from 'lucide-react';

export const tripMeta = {
  id: 'hk-2026',
  title: '香港美食之旅',
  subtitle: 'HK Trip 2026',
  dates: '2026/3/6 - 3/8',
  coverColor: 'from-blue-600 to-indigo-700',
  emoji: '🇭🇰',
};

export const itineraryData = {
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

export const backupData = [
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

export const faqData = [
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

export const riddles = [
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
