import React from "react";
import styles from "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { break: 5, session: 5, curSession: 25 };
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
  }

  startStop() {
    console.log("hello2");
  }

  reset() {
    console.log("hello");
  }

  render() {
    let date = new Date(null);
    date.setSeconds(this.state.curSession*60)
    return (
      <React.Fragment>
        <div id="title">Focus timer</div>
        <div id="break-label">Break length</div>
        <div id="break-length">5</div>
        <div id="break-decrement"></div>
        <div id="break-increment"></div>
        <div id="session-label">Session length</div>
        <div id="session-length">25</div>
        <div id="session-decrement"></div>
        <div id="session-increment"></div>
        <div id="timer-label">Session</div>
        <div id="time-left">{date.toISOString().substr(14,5)}</div>
        <div id="start_stop" onClick={this.startStop}>
          start/stop
        </div>
        <div id="reset" onClick={this.reset}>
          reset
        </div>
      </React.Fragment>
    );
  }
}

export default Timer;
