import EventList from '@/components/events/EventList'
import React from 'react'
import { getAllEvents } from '@/helpers/api-utils'
import EventSearch from '@/components/events/EventSearch';
import { useRouter } from 'next/router';

const Events = (props) => {
    const allEvents = props.events
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

export async function getStaticProps() {
  const events = await getAllEvents()
  return {
    props: { events },
    revalidate:60
  };
}