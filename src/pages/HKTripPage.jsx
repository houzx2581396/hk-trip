import React, { useState, useEffect } from 'react';
import {
  MapPin, Clock, Plane, Home, Utensils, Camera, Moon,
  Navigation, Sun, Ticket, Coffee, Ship, Mountain,
  IceCream, ExternalLink, HelpCircle, ChevronDown,
  CheckCircle2, Volume2, ShoppingBag, Milestone,
  ArrowLeft
} from 'lucide-react';
import { itineraryData, backupData, faqData, riddles } from '../trips/hk-trip-data.jsx';

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

export default function HKTripPage({ onBack, isDarkMode, setIsDarkMode }) {
  const [activeDay, setActiveDay] = useState("3/6");
  const [activeTab, setActiveTab] = useState("itinerary");
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
      setUsedRiddles([]);
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
    <>
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex flex-col">
              <h1 className="text-lg font-black tracking-tighter text-gray-900 dark:text-white uppercase">
                HK <span className="text-blue-600 text-sm italic">Trip 2026</span>
              </h1>
            </div>
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
    </>
  );
}
