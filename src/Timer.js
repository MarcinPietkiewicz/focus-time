import React from "react";
import styles from "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.incBreak = this.incBreak.bind(this);
    this.decBreak = this.decBreak.bind(this);
    this.incSess = this.incSess.bind(this);
    this.decSess = this.decSess.bind(this);
    this.state = { breakMins: 5, sessionMins: 25, isRunning: false, type: "session" };
  }
  // block changing session and break lengths when timer is running or outside 1-60 range
  limits(x) {
    return !this.state.isRunning && (x < 60 && x > 1 ? true : false);
  }

  incBreak() {
    if (this.limits(this.state.breakMins)) {
      this.setState({ breakMins: this.state.breakMins + 1 });
    }
  }
  decBreak() {
    if (this.limits(this.state.breakMins)) {
      this.setState({ breakMins: this.state.breakMins - 1 });
    }
  }
  incSess() {
    if (this.limits(this.state.sessionMins)) {
      this.setState({ sessionMins: this.state.sessionMins + 1 });
    }
  }
  decSess() {
    if (this.limits(this.state.sessionMins)) {
      this.setState({ sessionMins: this.state.sessionMins - 1 });
    }
  }

  startStop() {
    if (this.state.isRunning) {
      console.log("is running set to false");
      this.setState({ isRunning: false });
    } else {
      console.log("is running set to true");
      this.setState({ isRunning: true });
    }
  }

  reset() {
    this.setState({ isRunning: false, breakMins: 5, sessionMins: 25 });
  }

  formatTime(x) {
    let mins = Math.floor(x / 60);
    let minsFormat = mins < 10 ? "0" + mins : mins;
    let secs = x % 60;
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
            <div id="break-increment" onClick={this.incBreak}>
              ⇧
            </div>
            <div id="break-length">{this.state.breakMins}</div>
            <div id="break-decrement" onClick={this.decBreak}>
              ⇩
            </div>
          </div>
          <div id="set-session">
            <div id="session-label">Session length</div>
            <div id="session-increment" onClick={this.incSess}>
              ⇧
            </div>
            <div id="session-length">{this.state.sessionMins}</div>
            <div id="session-decrement" onClick={this.decSess}>
              ⇩
            </div>
          </div>
        </div>
        <div id="session">
          <div id="timer-label">Session</div>
          <div id="time-left">{this.formatTime(this.state.sessionMins * 60)}</div>
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
