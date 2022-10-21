import React from "react";
import styles from "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { breakMins: 5, sessionMins: 25, curSessionSecs: 1500, isRunning: false };
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  startStop() {}

  reset() {
    console.log("reset clicked");
    this.setState({ isRunning: false, breakMins: 5, sessionMins: 25, curSessionSecs: 1500 });
  }

  formatTime() {
    let mins = Math.floor(this.state.curSessionSecs / 60);
    let minsFormat = mins < 10 ? "0" + mins : mins;
    let secs = this.state.curSessionSecs % 60;
    let secsFormat = secs < 10 ? "0" + secs : secs;
    return `${minsFormat}:${secsFormat}`;
  }

  render() {
    let date = new Date(null);
    date.setSeconds(this.state.curSession * 60);
    return (
      <div id="timer">
        <div id="title">Focus timer</div>
        <div id="set">
          <div id="set-break">
            <div id="break-label">Break length</div>
            <div id="break-increment">⇧</div>
            <div id="break-length">{this.state.breakMins}</div>
            <div id="break-decrement">⇩</div>
          </div>
          <div id="set-session">
            <div id="session-label">Session length</div>
            <div id="session-increment">⇧</div>
            <div id="session-length">{this.state.sessionMins}</div>
            <div id="session-decrement">⇩</div>
          </div>
        </div>
        <div id="session">
          <div id="timer-label">Session</div>
          <div id="time-left">{this.formatTime()}</div>
        </div>
        <div id="controls">
          <div id="start_stop" onClick={this.startStop}>
            start/stop
          </div>
          <div id="reset" onClick={this.reset}>
            reset
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
