// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, eventClicked, activeEvent} = props
  const {id, imageUrl, name, location, registrationStatus} = eachEvent

  const onEventClicked = () => {
    eventClicked(registrationStatus, id)
  }

  const activeEventClass = activeEvent ? 'active-event-button' : ''

  return (
    <li className="each-item-container">
      <button type="button" className="event-button" onClick={onEventClicked}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-image ${activeEventClass}`}
        />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
