import React from 'react';

const CountdownTimer = React.createClass({

  getInitialState(){
    return {
      countdown: '00:00'
    }
  },

  componentDidMount(){
    let interval = this.props.interval;
    let currentDate = new Date();
    let endDate = new Date(this.props.end);
    let remaining = Math.abs(endDate.getTime() - currentDate.getTime());
    console.log(this.state);
    this.timeInterval = setInterval(() => {
      this.setState({
        countdown: this.getFormattedTime(remaining)
      })
      remaining -= interval;
    }, interval);
  },

  getFormattedTime(milliseconds) {

    var totalSeconds = Math.round(milliseconds / 1000);

    var seconds = parseInt(totalSeconds % 60, 10);
    var minutes = parseInt(totalSeconds / 60, 10) % 60;
    var hours = parseInt(totalSeconds / 3600, 10);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    return hours + ':' + minutes + ':' + seconds;
  },

  componentWillUnmount(){
    clearInterval(this.timeInterval);
  },

  render(){
    return <span>{this.state.countdown}</span>
  }
})

export default CountdownTimer;
