import React from 'react';
import ReactDOM from 'react-dom';

import ToggleSwitch from './toggle-switch';

const element = (
  <div>
    <ToggleSwitch/>
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
