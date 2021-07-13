import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.entries = props.entries;
    let id = 0;

    for (const entry of this.entries) {
      entry.id = id;
      id++;
    }

    this.state = { open: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({ open: id });
  }

  render() {

    const entryElements = this.entries.map(entry =>
      <div key={entry.id} className="entry">
        <div className="titleBox" onClick={() => this.handleClick(entry.id)}>
          <div className="titleText">
            {entry.titleText}
          </div>
        </div>
        {
          entry.id === this.state.open
            ? (
            <div className="contentBox">
              <div className="contentText">
                {entry.contentText}
              </div>
            </div>
              )
            : ('')
        }
      </div>
    );

    return (
       <div>{entryElements}</div>
    );
  }
}

export default Accordion;
