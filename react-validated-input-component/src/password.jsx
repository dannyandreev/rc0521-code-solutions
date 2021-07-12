import React from 'react'

class Password extends React.Component {
constructor(props) {
    super(props);
    this.state = { password: "", valid: false, error: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    event.
    this.setState({password: event.target.value})
    console.log(this.state)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    console.log(this.state)

    return (
      <div>
        <div className="title">
          Password
        </div>
        <div className="flex">
          <form className = "center">
            <input type="password" value={this.state.value} onChange={this.handleInput}/>
            <input type="submit" value="Submit" />
          </form>
          <div className="center">
            <img className="icon"src = "../media/check.png"/>
          </div>
        </div>
        <div className="errorText">
          {errorMessage}
        </div>
      </div>
    )
  }
}

export default Password
