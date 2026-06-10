import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock, Tag } from 'lucide-react';

export default function Events() {
  // Current date states
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Hardcoded mockup data for events
  const eventsData = [
    {
      id: 1,
      date: "2026-06-12",
      title: "MERN Stack Codealong Hackathon",
      time: "10:00 AM - 04:00 PM",
      location: "Main Lab, Block C",
      type: "Workshop"
    },
    {
      id: 2,
      date: "2026-06-18",
      title: "Next.js 15 & SSR Seminar",
      time: "02:00 PM - 05:00 PM",
      location: "Auditorium 2",
      type: "Seminar"
    },
    {
      id: 3,
      date: "2026-06-25",
      title: "Annual Tech Innovation Expo",
      time: "09:00 AM - 06:00 PM",
      location: "Exhibition Hall",
      type: "Exhibition"
    },
    {
      id: 4,
      date: "2026-07-05",
      title: "UI/UX Portfolio Review Session",
      time: "11:30 AM - 02:30 PM",
      location: "Online (Zoom)",
      type: "Webinar"
    }
  ];

  // Calendar Engine Core Logic
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Total days in the current month
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  // Finding the first day index of the month (e.g., 0 for Sunday, 1 for Monday)
  const firstDayIndex = new Date(year, month, 1).getDay();

  // Array to hold full days grid mapping
  const calendarCells = [];
  
  // Fill empty slots for previous month offset
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(null);
  }

  // Fill actual dates of the current month
  for (let day = 1; day <= totalDaysInMonth; day++) {
    calendarCells.push(new Date(year, month, day));
  }

  // Navigation Handlers
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Helper to match formatted date string
  const formatDateString = (dateObj) => {
    if (!dateObj) return '';
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  // Filter events based on selected date
  const selectedDateStr = formatDateString(selectedDate);
  const filteredEvents = eventsData.filter(event => event.date === selectedDateStr);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
            Campus Life
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Interactive Events Calendar
          </h1>
          <p className="text-slate-600 mt-3 text-base">
            Stay sync'ed with active events. Select any date on the calendar grid below to fetch targeted schedule logs.
          </p>
        </div>

        {/* Dashboard Grid split into Calendar and Events List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT: JS CALENDAR CONTROLLER GRID */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-slate-100 p-6">
            
            {/* Month Header Controller */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {monthNames[month]} <span className="text-indigo-600 font-medium">{year}</span>
              </h2>
              <div className="flex space-x-2">
                <button onClick={prevMonth} className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextMonth} className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Calendar Grid Header (Days names row) */}
            <div className="grid grid-cols-7 text-center font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="py-2">{day}</div>
              ))}
            </div>

            {/* Calendar Grid Core Matrix mapping */}
            <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold">
              {calendarCells.map((dateItem, index) => {
                if (!dateItem) {
                  return <div key={`empty-${index}`} className="aspect-square bg-slate-50/50 rounded-xl" />;
                }

                const currentCellStr = formatDateString(dateItem);
                const isSelected = currentCellStr === selectedDateStr;
                const hasEvents = eventsData.some(event => event.date === currentCellStr);
                const isToday = new Date().toDateString() === dateItem.toDateString();

                return (
                  <button
                    key={currentCellStr}
                    onClick={() => setSelectedDate(dateItem)}
                    className={`aspect-square flex flex-col items-center justify-center relative rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-105'
                        : isToday 
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-600'
                        : 'bg-white border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 text-slate-700'
                    }`}
                  >
                    <span>{dateItem.getDate()}</span>
                    {/* Event Alert Dot Indicator */}
                    {hasEvents && (
                      <span className={`absolute bottom-2 w-1.5 h-1.5 rounded-full ${
                        isSelected ? 'bg-white' : 'bg-indigo-500 animate-pulse'
                      }`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: REALTIME FILTERED EVENTS LIST VIEW */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 lg:h-[460px] flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center space-x-2 shrink-0">
              <CalendarIcon className="w-5 h-5 text-indigo-600" />
              <span>Schedule for {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]}</span>
            </h3>

            {/* Dynamic Rendering List block */}
            <div className="space-y-4 overflow-y-auto flex-grow pr-1 custom-scrollbar">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <div key={event.id} className="p-4 bg-indigo-50/50 border border-indigo-100/50 rounded-xl space-y-3 hover:shadow-sm transition-all">
                    <span className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-600 uppercase bg-indigo-100/60 px-2.5 py-1 rounded-md">
                      <Tag className="w-3 h-3 mr-1" />
                      {event.type}
                    </span>
                    <h4 className="font-bold text-slate-900 leading-snug">{event.title}</h4>
                    <div className="space-y-1.5 text-xs font-medium text-slate-500">
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 my-auto">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 text-slate-300">
                    <CalendarIcon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium">No schedule mapped for this date.</p>
                  <p className="text-xs text-slate-400 mt-1">Try clicking dates with active indigo dot indicator.</p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}