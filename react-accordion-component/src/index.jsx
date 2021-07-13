import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const element = (
  <div>
    <Accordion/>
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
