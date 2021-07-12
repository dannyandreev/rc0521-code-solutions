import React from "react"

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ""};
  }

  handleChange = (event) => {
    this.setState({email: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className = "flex">
        <span>Email</span>
        <input type="text"
          onChange={this.handleChange}
          />
        <input type="submit"
          value="Sign Up"
          />
      </form>
    );
  }
}

export default NewsletterForm
