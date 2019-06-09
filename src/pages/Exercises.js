import React from 'react';

import Welcome from '../components/Welcome';
import Card from '../components/Card';

// assets
import exerciseImg from '../images/exercise.png';

const Exercises = () => (
  <>
    <Welcome username='Joalbert'/>
    <Card
      title='Technique Guides'
      description='Learn amazing street workout and calisthenics'
      img={exerciseImg}
      leftColor='#A74CF2'
      rightColor='#617BFB'
    />
  </>
)

export default Exercises;
