import React from 'react';

import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import AddExercise from '../components/AddExercise';
import Loading from '../components/Loading';
import FatalError from './500';

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
  state = {
    exerciseData: [],
    error: false,
    loading: true
  }

  componentDidMount = async () => {
    await this.fetchExercises()
  }

  fetchExercises = async () => {
    try {
      let res = await fetch('http://localhost:8000/api/exercises');
      this.setState({
        exerciseData: await res.json(),
        loading: false
      })
    } catch(error) {
      this.setState({
        error: true,
        loading: false
      })
    }
  }

  render = () => (
    this.state.loading ?
      <Loading />
    :
      this.state.error ?
        <FatalError />
      :
        <>
          <Welcome username='Joalbert' />
          <ExerciseList exerciseData={this.state.exerciseData} />
          <AddExercise />
        </>
  )
}

export default Exercises;
