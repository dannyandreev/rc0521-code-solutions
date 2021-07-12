import React from "react"

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ""};
    this.handleClick = this.handleClick.bind(this);
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
      <form className = "flex">
        <span>Email</span>
        <input type="text"
          onChange={this.handleChange}
          />
        <button type="button"
          onSubmit={this.handleSubmit}
          >Sign Up</button>
      </form>
    );
  }
}

export default NewsletterForm
