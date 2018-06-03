import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './style/app.css';
import cardData from './core/card-data';
import _ from 'lodash';

const tags = _.chain(cardData).flatMap('tags').uniq().value();
const numbers = _.map(cardData, 'number');

ReactDOM.render(
  <App 
    cards={_.sortBy(cardData, Math.random)}
    tags={tags}
  />, 
  document.getElementById('root')
);
