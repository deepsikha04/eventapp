'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEvents } from '../context/EventsContext';
import { format } from 'date-fns';
import Link from 'next/link';

const EventCalendarPage = () => {
  const { events } = useEvents();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const eventsOnSelectedDate = selectedDate
    ? events.filter(
        (event) => format(new Date(event.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
      )
    : [];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/events" className="text-pink-600 underline mb-4 block">
        ← Back to Event List
      </Link>

      <h1 className="text-2xl font-bold mb-4">Event Calendar View</h1>

      <Calendar
        onClickDay={(value) => setSelectedDate(value)}
        value={selectedDate}
      />

      {selectedDate && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">
            Events on {format(selectedDate, 'MMMM dd, yyyy')}:
          </h2>
          {eventsOnSelectedDate.length > 0 ? (
            <ul className="list-disc pl-6 text-gray-700">
              {eventsOnSelectedDate.map((event) => (
                <li key={event.id}>
                  <strong>{event.title}</strong> at {event.venue}
                </li>
              ))}
            </ul>
          ) : (
            <p>No events on this day.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EventCalendarPage;
