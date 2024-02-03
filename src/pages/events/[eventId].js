import React, { Fragment } from 'react'
import { getEventById, getFeaturedEvents } from '@/helpers/api-utils'
import EventSummary from '@/components/event-detail/event-summary'
import EventLogistics from '@/components/event-detail/event-logistics'
import EventContent from '@/components/event-detail/event-content'
import ErrorAlert from '@/components/ui/ErrorAlert'


const EventPage = (props) => {
    const {loadedEvent} = props

    if (!loadedEvent) {
        return <ErrorAlert>No event Found!</ErrorAlert>
    }

  return (
    <Fragment>
        <EventSummary title={loadedEvent.title}/>
        <EventLogistics date={loadedEvent.date} address={loadedEvent.location} image={loadedEvent.image} imageAlt={loadedEvent.title}/>
        <EventContent>
            <p>{loadedEvent.description}</p>
        </EventContent>
    </Fragment> 
  )
}

export default EventPage



export async function getStaticProps(context) {
  const {params} = context
  const eventId = params.eventId
  const event = await getEventById(eventId)

  if(!event){
    return {
      props: {
        loadedEvent: null,
      },
      revalidate:30
    }
  }
  return {
    props: { loadedEvent:event },
    revalidate:30
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents()
  const ids = events.map(event => event.id)
  const pathWithParams = ids.map(id => ({params:{eventId:id}}))

  return {
    paths:pathWithParams,
    fallback:'blocking'
  }
}