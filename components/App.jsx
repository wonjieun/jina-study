import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { time: null };
  }

  componentDidMount() {
    this.tick();
    this.interval = setInterval(this.tick.bind(this), 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ time: new Date().toLocaleString() });
  }

  render() {
    const { time } = this.state;

    return (
      <div>
        <h1>Sample Application</h1>
        <p>Current time is {time}</p>
      </div>
    )
  }
}
