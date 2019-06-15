import React, { useState, useEffect } from 'react';

import Exercises from './Exercises';
import Loading from '../components/Loading';
import FatalError from './500';

// info faker
// import exerciseData from '../faker/exercises.json';

const ExercisesContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [exerciseData, setExerciseData] = useState([]);

  const fetchExercises = async () => {
      let res = await fetch('http://localhost:8000/api/exercises');
  
      setLoading(false);
      setExerciseData(await res.json());
  }

  useEffect(() => {
    try {
      fetchExercises()
    } catch(error) {
      setLoading(false);
      setError(true);
    }}, []);
  return (
    loading ?
      <Loading />
    :
      error ?
        <FatalError />
      :
        <Exercises exerciseData={exerciseData} />
  )
}

export default ExercisesContainer;
