export async function getAllEvents() {
    const response = await fetch(
      "https://next-events-603ac-default-rtdb.firebaseio.com/events.json"
    );
    const data = await response.json();
  
    const events = Object.entries(data).map(([id, value]) => {
      return {
        id,
        ...value,
      };
    });
  
    return events
  }


  export async function getFeaturedEvents() {
    const events = await getAllEvents()
    return events.filter((event) => event.isFeatured);
  }


  export async function getFilteredEvents(dateFilter) {

    const { numYear, numMonth } = dateFilter;
    const events = await getAllEvents()
    let filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1
      );
    });
  
    return filteredEvents;
  }
  
  export async function getEventById(id) {
    const events = await getAllEvents()
    return events.find((event) => event.id === id);
  }