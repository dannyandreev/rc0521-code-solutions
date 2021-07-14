import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const entries = [
  { titleText: 'Hypertext Markup Language', contentText: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web application. With Cascading Style Sheers (CSS) and Javascript, it forms a triad of conrnerstone technologies for the World Wide Web' },
  { titleText: 'Cascading Style Sheets', contentText: 'Cascading Style Sheers (CSS) is a style sheer language used for describing the presentatio nof a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript' },
  { titleText: 'JavaScript', contentText: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. Javascript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class function' }
];

const element = (
  <div>
    <Accordion entries={entries}/>
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
