'use client';
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex flex-col">
      
      
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent">
            Event Management
          </p>
          <div className="space-x-4">
            <Link
              href="/addevents"
              className="text-pink-600 hover:text-pink-800 font-medium px-3 py-2 rounded-md hover:bg-pink-50 transition-colors"
            >
              Add Events
            </Link>
            <Link
              href="/events"
              className="text-pink-600 hover:text-pink-800 font-medium px-3 py-2 rounded-md hover:bg-pink-50 transition-colors"
            >
              View Events
            </Link>
          </div>
        </div>
      </nav>

      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-pink-600">Event Management System</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            You can add, view, update, or delete events with just a few clicks.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/addevents"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow hover:shadow-lg"
            >
              Add New Event
            </Link>
            <Link
              href="/events"
              className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Browse Events
            </Link>
            <Link
                href="/eventcalender"
                  className="text-pink-600 hover:text-pink-800 font-medium px-3 py-2 rounded-md hover:bg-pink-50 transition-colors"
                >
                  Calendar View
                </Link>

          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
