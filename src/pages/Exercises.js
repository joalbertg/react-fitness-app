import React from 'react';

import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import AddExercise from '../components/AddExercise';

// info faker
// import exerciseData from '../faker/exercises.json';

class Exercises extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     exerciseData
  //   }
  // }

  // by Babel, without constructor method
  // state = { exerciseData }
  state = { exerciseData: [], error: false }

  componentDidMount = async () => {
    await this.fetchExercises()
  }

  fetchExercises = async () => {
    try {
      let res = await fetch('http://localhost:8000/api/exercises');
      this.setState({
        exerciseData: await res.json()
      })
    } catch(error) {
      this.setState({
        error: true
      })
    }
  }

  render = () => {
    return (
    this.state.error ?
      <h1>Server Error!</h1>
    :
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
}

export default Exercises;
