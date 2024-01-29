import EventList from '@/components/events/EventList'
import React from 'react'
import { getAllEvents } from '../../../dummy-data'
import EventSearch from '@/components/events/EventSearch';
import { useRouter } from 'next/router';

const Events = () => {
    const allEvents = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year,month) => {
      const fullPath = `/events/${year}/${month}`
      router.push(fullPath)
    }
  return (
    <div><h1>
        All Events
    </h1>
    <EventSearch onSearch={findEventsHandler}/>
    <EventList items={allEvents} />
    </div>
  )
}

export default Events