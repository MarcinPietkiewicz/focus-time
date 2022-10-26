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
    this.timerRef = React.createRef();
    this.state = { breakMins: 5, sessionMins: 25, timer: 1500, isRunning: false, type: "session" };
  }

  incBreak() {
    if (!this.state.isRunning && this.state.breakMins < 60) {
      this.setState({ breakMins: this.state.breakMins + 1 });
    }
  }
  decBreak() {
    if (!this.state.isRunning && this.state.breakMins > 1) {
      this.setState({ breakMins: this.state.breakMins - 1 });
    }
  }
  incSess() {
    if (!this.state.isRunning && this.state.sessionMins < 60) {
      this.setState({ sessionMins: this.state.sessionMins + 1, timer: (this.state.sessionMins + 1) * 60 });
    }
  }
  decSess() {
    if (!this.state.isRunning && this.state.sessionMins > 1) {
      this.setState({ sessionMins: this.state.sessionMins - 1, timer: (this.state.sessionMins - 1) * 60 });
    }
  }

  startStop() {
    
    if (this.state.isRunning) {
      console.log("is running set to false");
      clearInterval(this.timerRef);
      this.setState({ isRunning: false });
    } else {
      console.log("is running set to true");
      this.setState({ isRunning: true });
      this.timerRef = setInterval(() => {
        this.setState({timer: this.state.timer-1})},1000)
    }
  }

  reset() {
    this.setState({ isRunning: false, breakMins: 5, sessionMins: 25, timer: 1500 });
  }

  formatTime(s) {
    let mins = Math.floor(s / 60);
    let minsFormat = mins < 10 ? "0" + mins : mins;
    let secs = s % 60;
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
          <div id="time-left">{this.formatTime(this.state.timer)}</div>
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
