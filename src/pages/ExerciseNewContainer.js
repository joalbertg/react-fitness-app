import React, {useState} from 'react';

import ExerciseNew from './ExerciseNew';
import Loading from '../components/Loading';
import FatalError from './500';

// assets
import '../components/styles/ExerciseNew.css';

const ExerciseNewContainer = (props) => {
  const obj = {
    title: "",
    description: "",
    img: "",
    leftColor: "",
    rightColor: ""
  }

  const stateInit = {
    loading: false,
    error: false
  }

  const [state, setState] = useState({form: {...obj}, ...stateInit});

  const handleChange = (event) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [event.target.name]: event.target.value
      } 
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.form)
      }

      await fetch('http://localhost:8000/api/exercises', config);
      setState({
        ...state,
        loading: false
      });
      props.history.push('/exercise');
    } catch(error) {
      setState({
        ...state,
        loading: false,
        error: true
      });
    }
  }

  return (
    state.loading ?
      <Loading />
    :
      state.error ?
        <FatalError />
      :
        <ExerciseNew
          form={state.form}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
  )
}

export default ExerciseNewContainer;
