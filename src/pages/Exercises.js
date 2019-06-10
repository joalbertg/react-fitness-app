import React from 'react';

import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import AddExercise from '../components/AddExercise';

// info faker
import exerciseData from '../faker/exercises.json';

class Exercises extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     exerciseData
  //   }
  // }

  // by Babel, without constructor method
  state = { exerciseData }
  render = () => (
    <>
      <Welcome
        username='Joalbert'
      />
      <ExerciseList
        exerciseData={this.state.exerciseData}
      />
      <AddExercise />
    </>
  )
}

export default Exercises;
