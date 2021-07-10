import React from 'react'
import ReactDOM from 'react-dom'

import NewsletterForm from './NewsletterForm';

const element = (
  <div>
    <NewsletterForm/>
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
