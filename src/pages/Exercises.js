import React from 'react';

import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import AddExercise from '../components/AddExercise';

const Exercises = ({exerciseData}) => (
  <>
    <Welcome username='Joalbert' />
    <ExerciseList exerciseData={exerciseData} />
    <AddExercise />
  </>
)

export default Exercises;
