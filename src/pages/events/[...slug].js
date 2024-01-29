import { useRouter } from 'next/router'
import React from 'react'
import { getFilteredEvents } from '../../../dummy-data'
import EventList from '@/components/events/EventList'
import ResultTitle from '@/components/events/ResultTitle'
import Button from '@/components/ui/Button'
import ErrorAlert from '@/components/ui/ErrorAlert'

const FilteredEvents = () => {
  const router = useRouter()
  if (!router.query.slug) {
    return <h1>Loading...</h1>
  } 

  const year = router.query.slug[0]
  const month = router.query.slug[1]

  const numYear = +year
  const numMonth = +month

  const filteredEvents = getFilteredEvents({
    year:numYear,
    month:numMonth
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return( 
    <>
      <ErrorAlert>
      <p>No events found with such filter!!</p>
      </ErrorAlert>
      <div className="center">
        <Button link='/events'>Show all Events</Button>
      </div>
    </>)
  }

  const date = new Date(numYear,numMonth-1)

  return (
    <div>
      <ResultTitle date={date}/>
      <EventList items={filteredEvents}/>
    </div>
  )
}

export default FilteredEvents