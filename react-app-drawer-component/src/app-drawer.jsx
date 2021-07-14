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

    );
  }
}

export default AppDrawer;
