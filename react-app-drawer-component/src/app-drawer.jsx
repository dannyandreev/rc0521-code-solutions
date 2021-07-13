import React from 'react';

class AppDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let menuContainerClass = 'menuContainer';
    let dimClass = 'dim';

    if (this.state.open) {
      menuContainerClass = 'menuContainer open';
      dimClass = 'dim open';
    }
    //
    return (
      <div>
        <div className="icon" onClick = {event => { this.handleClick(); }}>
          <img className="icon" src="../media/menu.png"/>
        </div>
        <div className={dimClass}></div>
        <div onClick = {event => { this.handleClick(); }} id="menuContainer" className={menuContainerClass}>
          <div className="menuTextContainer">
            <div className="title">
              Menu
            </div>
            <div>
              <div className="entry">
                About
              </div>
              <div className="entry">
                Get Started
              </div>
              <div className="entry">
                Sign In
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
