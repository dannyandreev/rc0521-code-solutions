import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0, color: 'grey' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
    if (this.state.clicks === 2) {
      this.setState({ color: 'purple' });
    } else if (this.state.clicks === 5) {
      this.setState({ color: 'lightPurple' });
    } else if (this.state.clicks === 8) {
      this.setState({ color: 'red' });
    } else if (this.state.clicks === 11) {
      this.setState({ color: 'orange' });
    } else if (this.state.clicks === 14) {
      this.setState({ color: 'yellow' });
    } else if (this.state.clicks === 17) {
      this.setState({ color: 'white' });
    }
    // console.log(`clicks: ${this.state.clicks} color: ${this.state.color}`)
  }

  render() {

    const text = 'Hot Button';
    return <button className = {this.state.color} onClick = {this.handleClick}>{text}</button>;
  }
}

export default HotButton;
