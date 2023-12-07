// Write your code here
import './index.css'

const ActiveDetailStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveRegistration = props => {
  const {ActiveStatus} = props

  const NOActiveStatus = () => (
    <h1> Click on the event to view the Registration Details</h1>
  )
  const YetRegisterStatus = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      alt="event"
    />
  )

  const RgisteredStatus = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      alt="event"
    />
  )

  const RegistrationClosed = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      alt="event"
    />
  )

  const CheckREgistration = () => {
    switch (ActiveStatus) {
      case ActiveDetailStatus.yetToRegister:
        return YetRegisterStatus()
      case ActiveDetailStatus.registered:
        return RgisteredStatus
      case ActiveDetailStatus.registrationClosed:
        return RegistrationClosed
      default:
        return NOActiveStatus
    }
  }

  return <div>{CheckREgistration()}</div>
}

export default ActiveRegistration
