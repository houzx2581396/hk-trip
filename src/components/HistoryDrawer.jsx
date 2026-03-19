import React from 'react';
import { X, MapPin, ChevronRight, Plane } from 'lucide-react';

const HistoryDrawer = ({ isOpen, onClose, trips, onSelectTrip }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[85%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
              歷史旅程
            </h2>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
              {trips.length} 趟旅程
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Trip List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {trips.map((trip) => (
            <button
              key={trip.id}
              onClick={() => { onSelectTrip(trip.id); onClose(); }}
              className="w-full text-left group"
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${trip.coverColor} p-5 shadow-lg transition-all duration-200 group-hover:scale-[1.02] group-hover:shadow-xl group-active:scale-[0.98]`}>
                <div className="absolute top-3 right-3 text-4xl opacity-30">
                  {trip.emoji}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <Plane className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
                      {trip.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-1">
                    {trip.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-white/70 text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{trip.dates}</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-white/50 font-medium">
                      點擊查看完整行程
                    </span>
                    <ChevronRight className="w-4 h-4 text-white/50 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default HistoryDrawer;
