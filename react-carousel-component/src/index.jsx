import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './carousel';

const images = ['001.png', '004.png', '007.png', '025.png', '039.png'];

const element = (
  <div>
    <Carousel images={images} />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
