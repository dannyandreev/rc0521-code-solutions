import React from 'react';

class Password extends React.Component {

  constructor(props) {
    super(props);
    this.state = { password: '', valid: false, error: 'A password is required' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value }, () => {
      const passLength = event.target.value.length;

      if (passLength === 0) {
        this.setState({ valid: false, error: 'A password is required' });
      } else if (passLength < 8) {
        this.setState({ valid: false, error: 'Your password is too short' });
      } else {
        this.setState({ valid: true, error: '' });
      }
    });
  }

  render() {

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
            <input type="password" value={this.state.value} onChange={this.handleChange}/>
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
