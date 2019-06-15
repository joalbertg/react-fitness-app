import React from 'react';

import Exercises from './Exercises';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';
import FatalError from './500';

// info faker
// import exerciseData from '../faker/exercises.json';

const ExercisesContainer = () => {
  const { data, loading, error } = useFetch('http://localhost:8000/api/exercises');
  return (
    loading ?
      <Loading />
    :
      error ?
        <FatalError />
      :
        <Exercises exerciseData={data} />
  )
}

export default ExercisesContainer;
