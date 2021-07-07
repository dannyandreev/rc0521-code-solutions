import React from 'react'
import ReactDOM from 'react-dom'

let h1Elem = React.createElement(
  'h1',
  {},
  'Hello, React!'
)

ReactDOM.render(
  h1Elem,
  document.getElementById('root')
);
