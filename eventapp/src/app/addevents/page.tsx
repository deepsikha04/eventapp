'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEvents } from '../context/EventsContext';

interface IFormInput {
  title: string;
  description: string;
  venue: string;
  date: string;
}

const AddEventPage = () => {
  const { addEvent } = useEvents();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    addEvent(data);
    router.push('/events');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      
      <button
        onClick={() => router.push('/events')}
        className="text-blue-600 hover:underline mb-4 inline-block text-sm"
      >
        ← Go Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Add New Event</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          {...register('title', { required: 'Title is required' })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          {...register('description', { required: 'Description is required' })}
          error={!!errors.description}
          helperText={errors.description?.message}
        />

        <TextField
          label="Venue"
          fullWidth
          margin="normal"
          {...register('venue', { required: 'Venue is required' })}
          error={!!errors.venue}
          helperText={errors.venue?.message}
        />

        <TextField
          label="Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          {...register('date', { required: 'Date is required' })}
          error={!!errors.date}
          helperText={errors.date?.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
        >
          Add Event
        </Button>
      </form>
    </div>
  );
};

export default AddEventPage;
