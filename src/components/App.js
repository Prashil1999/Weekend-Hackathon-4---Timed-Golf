import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_started: false,
      class: { top: 0, left: 0 },
      time: 0,
      x: 0,
      y: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.intervalId = 0;
  }
  componentDidMount() {
    //if (this.state.is_started)
    // document.addEventListener("keydown", (event) => {
    //   let x = this.state.x;
    //   let y = this.state.y;
    //   if (event.keyCode === 37) {
    //     x -= 5;
    //   } else if (event.keyCode === 38) {
    //     y -= 5;
    //   } else if (event.keyCode === 39) {
    //     x += 5;
    //   } else if (event.keyCode === 40) {
    //     y += 5;
    //   }
    //   let stateCopy = this.state;
    //   stateCopy.x = x;
    //   stateCopy.y = y;
    //   this.setState(stateCopy, () => {
    //     let stateCopy = this.state;
    //     stateCopy.class = { top: this.state.y, left: this.state.x };
    //     this.setState(stateCopy);
    //   });
    // });
  }

  componentDidUpdate() {
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.intervalId);
    }
  }
  componentWillUnmount() {}

  handleClick() {
    let stateCopy = this.state;
    stateCopy.is_started = !this.state.is_started;
    this.setState(stateCopy, () => {
      if (this.state.is_started) {
        document.addEventListener("keydown", (event) => {
          let x = this.state.x;
          let y = this.state.y;
          if (event.keyCode === 37) {
            x -= 5;
          } else if (event.keyCode === 38) {
            y -= 5;
          } else if (event.keyCode === 39) {
            x += 5;
          } else if (event.keyCode === 40) {
            y += 5;
          }
          let stateCopy = this.state;
          stateCopy.x = x;
          stateCopy.y = y;
          this.setState(stateCopy, () => {
            let stateCopy = this.state;
            stateCopy.class = { top: this.state.y, left: this.state.x };
            this.setState(stateCopy);
          });
        });
        this.intervalId = setInterval(() => {
          let stateCopy = this.state;
          stateCopy.time++;
          this.setState(stateCopy);
        }, 1000);
      }
    });
  }

  render() {
    return (
      <>
        <div className="ball" style={this.state.class}></div>
        <div className="hole"></div>
        <div className="heading-timer">{this.state.time}</div>
        <button className="start" onClick={this.handleClick}>
          start
        </button>
      </>
    );
  }
}

export default Timer;
