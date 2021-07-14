import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { image: 0, clock: true };
    this.images = this.props.images;
    this.handleClick = this.handleClick.bind(this);
    this.next = this.next.bind(this);

    this.clock = setInterval(this.next, 3000);
  }

  handleClick(event) {
    this.clearClock();

    if (this.images[event.target.id]) {
      this.setState({ image: parseInt(event.target.id) });
    } else if (event.target.id === 'right') {
      if (this.state.image === this.images.length - 1) {
        this.setState({ image: 0 });
      } else {
        this.setState({ image: this.state.image + 1 });
      }
    } else if (event.target.id === 'left') {
      if (this.state.image === 0) {
        this.setState({ image: this.images.length - 1 });
      } else {
        this.setState({ image: this.state.image - 1 });
      }
    }
  }

  clearClock() {
    clearInterval(this.clock);
    this.clock = setInterval(this.next, 3000);
  }

  next() {
    if (this.state.image === this.images.length - 1) {
      this.setState({ image: 0 });
    } else {
      this.setState({ image: this.state.image + 1 });
    }
  }

  render() {
    const dotList = [];

    for (let i = 0; i < this.images.length; i++) {
      if (i === this.state.image) {
        dotList[i] = <div id={i} className="dot select" onClick={this.handleClick}></div>;
      } else {
        dotList[i] = <div id={i} className="dot" onClick={this.handleClick}></div>;
      }
    }

    return (
      <div className="carouselContainer">
      <div id="left" className="arrowContainer" onClick={this.handleClick}>
        <img id="left" className="icon" src="../media/left.png" />
      </div>
      <div>
        <div className="imageContainer">
          <img className="image" src={`../images/${this.images[this.state.image]}`} />
        </div>
        <div className="dots">
          <div className="dotContainer">
            {dotList}
          </div>
        </div>
      </div>
      <div id="right" className="arrowContainer" onClick={this.handleClick}>
        <img id="right" className="icon" src="../media/right.png" />
      </div>
    </div>
    );
  }
}

export default Carousel;
