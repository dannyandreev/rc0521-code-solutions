import React from 'react';
class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState({ isClicked: true });
    if (this.state.isClicked) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  }

  render() {
    let text = 'OFF';
    let nameOfClass = 'off';
    if (this.state.isClicked) {
      text = 'ON';
      nameOfClass = 'on';
    }

    return (
      <div className = {'buttonContainer'}>
        <div className = {'button ' + nameOfClass} onClick={this.handleClick}>
          <div className = {'switch'}>

          </div>
        </div>
        <div className = {'buttonTextContainer'}>
          <div className = {'buttonText'}>
          {text}
          </div>
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;
