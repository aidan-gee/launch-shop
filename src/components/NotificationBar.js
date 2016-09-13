import React, { PropTypes } from 'react';
import './NotificationBar.css';
import CountdownTimer from './CountdownTimer';

const NotificationBar = ({notification, countdown, show}) => {

	  return (
	  	<div className="notification-bar">
        <h2>{notification}</h2>
        <CountdownTimer interval={1000} end={countdown} />
      </div>
	  )

}

NotificationBar.propTypes = {
  notification: PropTypes.string.isRequired,
  countdown: PropTypes.string.isRequired
}

export default NotificationBar;
