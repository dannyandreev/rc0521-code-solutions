import React from 'react'
import ReactDOM from 'react-dom'

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    const listItems = pokedex.map((card) => {
      return (<li>{card.name}</li>)
    })


    return <ul>{listItems}</ul>
  }
}

const element = (
  <div>
    <Pokedex/>
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
