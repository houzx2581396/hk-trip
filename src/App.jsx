import React, { useState } from 'react';
import { Moon, Sun, Menu, Compass, Plane, MapPin } from 'lucide-react';
import HistoryDrawer from './components/HistoryDrawer.jsx';
import HKTripPage from './pages/HKTripPage.jsx';
import { tripMeta } from './trips/hk-trip-data.jsx';

const allTrips = [tripMeta];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTripId, setActiveTripId] = useState(null);

  if (activeTripId === 'hk-2026') {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-950' : 'bg-gray-50'}`}>
        <HKTripPage
          onBack={() => setActiveTripId(null)}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-950' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-black tracking-tighter text-gray-900 dark:text-white uppercase">
              Travel <span className="text-blue-600 text-sm italic">Journal</span>
            </h1>
          </div>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Empty State Homepage */}
      <main className="max-w-xl mx-auto px-6 flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        <div className="flex flex-col items-center text-center py-20">
          {/* Decorative icon cluster */}
          <div className="relative mb-8">
            <div className="w-28 h-28 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
              <Compass className="w-14 h-14 text-blue-300 dark:text-blue-700" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center">
              <Plane className="w-5 h-5 text-orange-300 dark:text-orange-700 -rotate-45" />
            </div>
            <div className="absolute -bottom-1 -left-3 w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-emerald-300 dark:text-emerald-700" />
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
            目前尚未有旅程
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-base leading-relaxed max-w-xs mb-8">
            期待下次旅程，新的冒險即將展開
          </p>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-200 dark:shadow-none transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Compass className="w-4 h-4" />
            查看歷史旅程
          </button>
        </div>

        <footer className="pb-8 text-center">
          <p className="text-xs text-gray-300 dark:text-gray-700 font-medium">
            2026 Itinerary Engine v4.1
          </p>
        </footer>
      </main>

      {/* History Drawer */}
      <HistoryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        trips={allTrips}
        onSelectTrip={(id) => setActiveTripId(id)}
      />
    </div>
  );
}
