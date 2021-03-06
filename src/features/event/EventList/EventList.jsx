import React, { Component } from 'react'

//components
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {
    const { events, onEventOpen, deleteEvent } = this.props
    return (
      <div>
        <h3>Event List</h3>
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            onEventOpen={onEventOpen}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    )
  }
}

export default EventList
