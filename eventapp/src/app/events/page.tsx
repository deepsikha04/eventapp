'use client';

import React from 'react';
import { useEvents, Event } from '../context/EventsContext';
import { Table, Button, Space } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const isPastEvent = (dateStr: string) => {
  const today = new Date();
  const eventDate = new Date(dateStr);
  return eventDate < today;
};

const EventsPage = () => {
  const { events} = useEvents();
  const router = useRouter();

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Venue',
      dataIndex: 'venue',
      key: 'venue',
    },
    {
      title: 'Action',
      key: 'action',
   render: (_: unknown, record: Event) => (

        <Space>
         
          <Button onClick={() => router.push(`/updateevents/${record.id}`)}>Update</Button>
          <Button danger onClick={() => router.push(`/deleteevents/${record.id}`)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link href="/" className="text-blue-600 underline mb-4 block">← Go Back</Link>
      <h1 className="text-2xl font-bold mb-4">Event List</h1>
      {events.length === 0 ? (
        <p>No events added yet.</p>
      ) : (
        <Table
          dataSource={events}
          columns={columns}
          rowKey="id"
          rowClassName={(record) =>
            isPastEvent(record.date) ? 'bg-red-100' : 'bg-green-100'
          }
          pagination={false}
        />
      )}
    </div>
  );
};

export default EventsPage;
