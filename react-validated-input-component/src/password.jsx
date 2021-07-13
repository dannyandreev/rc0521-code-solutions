import React from 'react';

class Password extends React.Component {

  constructor(props) {
    super(props);
    this.state = { password: '', valid: false, error: 'A password is required' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ password: event.target.value });
    const passLength = this.state.password.length;
    // console.log(`handle: ${passLength}`)

    if (passLength === 0) {
      this.setState({ valid: false, error: 'A password is required' });
    } else if (passLength < 7) {
      this.setState({ valid: false, error: 'Your password is too short' });
    } else {
      this.setState({ valid: true, error: '' });
    }
    this.render();
  }

  render() {
    // console.log(`render: ${this.state.password.length}`)
    let url = '../media/cross.png';
    if (this.state.valid) {
      url = '../media/check.png';
    }

    return (
      <div>
        <div className="title">
          Password
        </div>
        <div className="flex">
          <form className="center">
            <input type="password" value={this.state.value} onChange={this.handleInput}/>
          </form>
          <div className="center">
            <img className="icon" src={url}/>
          </div>
        </div>
        <div className="errorText">
          {this.state.error}
        </div>
      </div>
    );
  }
}

export default Password;
