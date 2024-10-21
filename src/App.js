import React, { useState } from 'react';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';
import format from 'date-fns/format';
import './index.css'; // Tailwind CSS styles

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');

const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tues', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thur', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
];

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">Flight Schedule</h1>
        <p className="text-lg text-gray-600 mt-2">
          Select a date to view available flights.
        </p>
      </header>

      <BpkCalendar
        id="calendar"
        onDateSelect={handleDateSelect}
        formatMonth={formatMonth}
        formatDateFull={formatDateFull}
        daysOfWeek={daysOfWeek}
        weekStartsOn={0}
        changeMonthLabel="Change month"
        nextMonthLabel="Next month"
        previousMonthLabel="Previous month"
        selectionConfiguration={{
          type: CALENDAR_SELECTION_TYPE.single,
          date: selectedDate,
        }}
      />

      <button
        className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => alert(`Selected Date: ${formatDateFull(selectedDate)}`)}
      >
        Continue
      </button>
    </div>
  );
};

export default App;

