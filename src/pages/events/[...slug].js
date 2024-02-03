import { useRouter } from 'next/router'
import React from 'react'
import { getFilteredEvents, getAllEvents } from '@/helpers/api-utils'
import EventList from '@/components/events/EventList'
import ResultTitle from '@/components/events/ResultTitle'
import Button from '@/components/ui/Button'
import ErrorAlert from '@/components/ui/ErrorAlert'

const FilteredEvents = (props) => {
  const router = useRouter()
  if (!router.query.slug) {
    return <h1>Loading...</h1>
  } 



  const {filteredEvents,dateFilter} = props
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

  const date = new Date(dateFilter.numYear,dateFilter.numMonth-1)

  return (
    <div>
      <ResultTitle date={date}/>
      <EventList items={filteredEvents}/>
    </div>
  )
}

export default FilteredEvents


export async function getServerSideProps(context) {
  const {params} = context
  const [year,month] = params.slug
  console.log(year,month)
  const numYear = +year;
  const numMonth = +month;

  const dateFilter = {numYear,numMonth}
  const events = await getFilteredEvents(dateFilter)

  return {
    props: { filteredEvents:events, dateFilter },
  };
}
