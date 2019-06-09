import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Card from './components/Card';

// assets
import exerciseImg from './images/exercise.png';

ReactDOM.render(
  <Card
    title='Technique Guides'
    description='Learn amazing street workout and calisthenics'
    img={exerciseImg}
    leftColor='#A74CF2'
    rightColor='#617BFB'
  />,
  document.getElementById('root')
);
