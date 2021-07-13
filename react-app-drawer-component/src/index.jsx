import React from 'react';
import ReactDOM from 'react-dom';

import AppDrawer from './app-drawer';

const element = (
  <div>
    <AppDrawer/>
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
