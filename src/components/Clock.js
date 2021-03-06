import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: Date.now()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let time = new Date(this.state.time).toLocaleTimeString();
    return (
      <div>
        <span><i>Current time: { time }</i></span>
      </div>
    )
  }
}
