// Write your code here
import './index.css'

const EventItem = props => {
  const {EventDetail, ClickOneEvent} = props
  const {imageUrl, name, location, id} = EventDetail

  const ClickEvent = () => {
    ClickOneEvent(id)
  }

  return (
    <li className="listes">
      <div className="card">
        <img
          src={imageUrl}
          className="image-design"
          alt="event"
          onClick={ClickEvent}
        />
        <h1 className="name">{name}</h1>
        <p className="location">{location}</p>
      </div>
    </li>
  )
}

export default EventItem
