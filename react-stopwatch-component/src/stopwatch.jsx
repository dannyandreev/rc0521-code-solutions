import React from 'react'

class StopWatch extends React.Component {
  constructor(props){
    super(props);
    this.state = { isPaused: true, time: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(typeOfClick) {
    if(typeOfClick === 'startStop') {
      if(this.state.isPaused) {
        this.setState({ isPaused: false });
        this.interval = setInterval(() => this.tick(), 1000);
      } else {
        this.setState({ isPaused: true });
        clearInterval(this.interval)
      }
    } else if (typeOfClick === 'restart') {
      if(this.state.isPaused){
        this.setState({time: 0})
      }
    }
  }

  tick() {
    this.setState({time: this.state.time + 1})
  }

  render() {
    let url = "../media/play.png"
    let text = this.state.time

    if(this.state.isPaused) {
      url = "../media/play.png"
    } else {
      url = "../media/pause.png"
    }

    return(
      <div className = "container">
        <div onClick = {(event)=>{this.handleClick('restart')}} className = "stopWatchContainer">
          <div>{text}</div>
        </div>
        <div className = "center">
          <img onClick = {(event)=>{this.handleClick('startStop')}} src={url}></img>
        </div>
      </div>
    );
  }
}

export default StopWatch
