import React from 'react'
import ReactDOM from 'react-dom'

import StopWatch from './stopwatch'

const element = (
  <div>
    <StopWatch/>
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
