'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Event {
  id: number;
  title: string;
  description: string;
  venue: string;
  date: string;
}

interface EventsContextType {
  events: Event[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  deleteEvent: (id: number) => void;
  updateEvent: (event: Event) => void;
}

const EventsContext = createContext<EventsContextType | undefined>(undefined);

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const addEvent = (event: Omit<Event, 'id'>) => {
    setEvents(prev => [...prev, { ...event, id: prev.length ? prev[prev.length - 1].id + 1 : 1 }]);
  };

  const deleteEvent = (id: number) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const updateEvent = (updated: Event) => {
    setEvents(prev => prev.map(e => (e.id === updated.id ? updated : e)));
  };

  return (
    <EventsContext.Provider value={{ events, addEvent, deleteEvent, updateEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventsContext);
  if (!context) throw new Error('useEvents must be used within EventsProvider');
  return context;
};
