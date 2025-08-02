'use client';
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useEvents } from '@/app/context/EventsContext';
import { TextField, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  title: string;
  description: string;
  venue: string;
  date: string;
}

const UpdateEventPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { events, updateEvent } = useEvents();
  const eventId = Number(id);
  const event = events.find(e => e.id === eventId);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInput>();

  useEffect(() => {
    if (event) {
      setValue('title', event.title);
      setValue('description', event.description);
      setValue('venue', event.venue);
      setValue('date', event.date);
    }
  }, [event, setValue]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    updateEvent({ ...data, id: eventId });
    router.push('/events');
  };

  if (!event) return <p>Event not found</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Event</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField label="Title" fullWidth margin="normal" {...register('title', { required: 'Title is required' })} error={!!errors.title} helperText={errors.title?.message} />
        <TextField label="Description" fullWidth multiline rows={4} margin="normal" {...register('description', { required: 'Description is required' })} error={!!errors.description} helperText={errors.description?.message} />
        <TextField label="Venue" fullWidth margin="normal" {...register('venue', { required: 'Venue is required' })} error={!!errors.venue} helperText={errors.venue?.message} />
        <TextField label="Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} {...register('date', { required: 'Date is required' })} error={!!errors.date} helperText={errors.date?.message} />
        <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4">Update Event</Button>
      </form>
    </div>
  );
};

export default UpdateEventPage;
