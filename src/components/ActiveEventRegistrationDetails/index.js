// Write your code here
import {Component} from 'react'
import './index.css'

const statusConstants = {
  initialStatus: 'initial',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  getYetToRegisteredEvents = () => (
    <div className="status-item-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p className="yet-des">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall in love with this beautiful
        art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  getRegisteredEvent = () => (
    <div className="status-item-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="register-image"
      />
      <h1 className="registered-des">
        You have already registered for the event
      </h1>
    </div>
  )

  getRegistrationsClosed = () => (
    <div className="status-item-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="already-registered-image"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-des">
        Stay tuned. We will reopen the registrations soon
      </p>
    </div>
  )

  render() {
    const {activeStatus} = this.props
    switch (activeStatus) {
      case statusConstants.yetToRegister:
        return this.getYetToRegisteredEvents()
      case statusConstants.registered:
        return this.getRegisteredEvent()
      case statusConstants.registrationsClosed:
        return this.getRegistrationsClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
