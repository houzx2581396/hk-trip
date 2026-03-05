import React, { useState, useEffect } from 'react';
import {
  MapPin, Clock, Plane, Home, Utensils, Camera, Moon,
  Navigation, Sun, Ticket, Coffee, Ship, Mountain,
  IceCream, ExternalLink, HelpCircle, ChevronDown,
  CreditCard, ClipboardList, CloudSun, Shirt,
  Cloud, CloudRain, CloudDrizzle, CheckCircle2,
  MessageCircle
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
      secondaryLink: "https://maps.app.goo.gl/PzZgcBK4FgiUQwNX8?g_st=ic"
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
  ]
};

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
              查看佳佳甜品位置
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
      { date: "03/06（四）", low: 17, high: 24, label: "多雲偶晴", icon: <CloudSun className="w-8 h-8 text-gray-500 dark:text-gray-300" /> },
      { date: "03/07（五）", low: 16, high: 23, label: "多雲", icon: <Cloud className="w-8 h-8 text-gray-500 dark:text-gray-300" /> },
      { date: "03/08（六）", low: 17, high: 22, label: "多雲偶陣雨", icon: <CloudDrizzle className="w-8 h-8 text-blue-500" /> },
      { date: "03/09（日）", low: 15, high: 23, label: "多雲轉晴", icon: <CloudSun className="w-8 h-8 text-yellow-500" /> },
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
    answer: `【入座】
• 搭檯 (daap toi) — 併桌／拼桌
  → 用法：茶餐廳人多時，店員會問「搭檯得唔得？」（可以併桌嗎？），回答「得」即可
• 幾多位？(gei do wai) — 幾位？
  → 店員會在門口問你，直接比手指或說數字即可

【點餐】
• 唔該，我想要⋯⋯ (m goi, ngo soeng jiu) — 請問，我想要⋯⋯
  → 萬用開場白，後面接餐點名稱
• 例牌 (lai paai) — 正常份量
  → 「例牌乾炒牛河」= 一份正常份量的乾炒牛河
• 走冰 (zau bing) — 去冰
  → 「凍檸茶走冰」= 冰檸檬茶去冰
• 少甜 (siu tim) — 少糖
  → 「少甜唔該」= 少糖，謝謝
• 加底 (gaa dai) — 加飯 / 加麵
  → 飯量不夠時使用

【飲茶專用（如六安居）】
• 點心紙 (dim sam zi) — 點心單
  → 用筆在點心紙上剔選想吃的品項
• 加水 (gaa seoi) — 加熱水（續茶）
  → 把茶壺蓋打開放著，服務員就會來加水
• 蝦餃 (haa gaau) — 蝦餃
• 燒賣 (siu maai) — 燒賣
• 叉燒包 (caa siu baau) — 叉燒包
• 腸粉 (coeng fan) — 腸粉

【結帳】
• 埋單 (maai daan) — 結帳 / 買單
  → 最常用！舉手喊「唔該，埋單！」即可
• 唔該 (m goi) — 謝謝 / 請問 / 不好意思
  → 萬用禮貌詞，叫人、道謝都可以用
• 多謝 (do ze) — 謝謝（收到東西時用）
  → 收到餐點或找零時說

【冰室/茶餐廳專用（如華星冰室）】
• 凍檸茶 (dung ning caa) — 冰檸檬茶
• 絲襪奶茶 (si mat naai caa) — 絲襪奶茶
• 菠蘿油 (bo lo jau) — 菠蘿包夾牛油
• 炒蛋多士 (caau daan do si) — 炒蛋吐司
• 走甜 (zau tim) — 完全不加糖

【Tips】
• 「唔該」是最實用的一個詞，幾乎所有場合都能用
• 不確定時，指著菜單說「呢個」(ni go，這個) 也完全 OK
• 大部分餐廳服務員都能聽懂普通話，別太緊張！`
  }
];

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
          {item.customRender && item.weather ? (
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

  useEffect(() => {
    localStorage.setItem('hk-trip-completed', JSON.stringify(completedItems));
  }, [completedItems]);

  const toggleComplete = (id) => {
    setCompletedItems(prev => ({ ...prev, [id]: !prev[id] }));
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
        <div className="max-w-xl mx-auto px-6 pb-2 flex gap-3">
          {Object.keys(itineraryData).map(day => (
            <button
              key={day}
              onClick={() => { setActiveDay(day); setActiveTab("itinerary"); }}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === "itinerary" && activeDay === day
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none'
                : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                }`}
            >
              Day {day === "3/6" ? "1" : "2"} ({day})
            </button>
          ))}
          <button
            onClick={() => setActiveTab("faq")}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${activeTab === "faq"
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none'
              : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
              }`}
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </button>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 pt-10 pb-24">
        {activeTab === "itinerary" ? (
          <>
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
                {activeDay === "3/6" ? "首日抵港：美食與夜市" : "次日探索：海島與夜景"}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {activeDay === "3/6"
                  ? "從台北啟程，直奔九龍心臟地帶體驗道地港味與霓虹夜色。"
                  : "穿越上環舊時光，搭船出海，迎接太平山頂之巔。"}
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
        ) : (
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
        )}

        <footer className="mt-16 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600 font-medium">
            2026 Itinerary Engine v4.1 • Senior Frontend Developer
          </p>
        </footer>
      </main>
    </div>
  );
}