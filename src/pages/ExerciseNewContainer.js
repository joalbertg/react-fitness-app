import React, { useState } from 'react';

import asyncPost from '../httpClient/asyncPost';
import ExerciseNew from './ExerciseNew';
import Loading from '../components/Loading';
import FatalError from './500';

// assets
import '../components/styles/ExerciseNew.css';

const ExerciseNewContainer = props => {
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

  const [state, setState] = useState({ form: { ...obj }, ...stateInit });

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
    const { loading, error } = await asyncPost('/exercises', state.form);
    setState({
      ...state,
      loading: loading,
      error: error
    });

    if(!error) {
      props.history.push('/exercise');
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
