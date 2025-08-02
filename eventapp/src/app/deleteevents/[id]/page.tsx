'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useEvents } from '@/app/context/EventsContext';
import { Button } from '@mui/material';

const DeleteEventPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { events, deleteEvent } = useEvents();

  const eventId = Number(id);
  const event = events.find(e => e.id === eventId);

  const handleDelete = () => {
    deleteEvent(eventId);
    router.push('/events');
  };

  if (!event) return <p>Event not found</p>;

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Delete Event</h1>
      <p className="mb-6">Are you sure you want to delete <strong>{event.title}</strong>?</p>
      <div className="flex justify-center gap-4">
        <Button variant="contained" color="error" onClick={handleDelete}>Confirm Delete</Button>
        <Button variant="outlined" onClick={() => router.push('/events')}>Cancel</Button>
      </div>
    </div>
  );
};

export default DeleteEventPage;
