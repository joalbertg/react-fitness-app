import React from 'react';

import ExerciseNew from './ExerciseNew';
import Loading from '../components/Loading';
import FatalError from './500';

// assets
import '../components/styles/ExerciseNew.css';

class ExerciseNewContainer extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      img: "",
      leftColor: "",
      rightColor: ""
    },
    error: false,
    loading: false
  }

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = async (event) => {
    this.setState({
      loading: true
    });

    event.preventDefault();
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.form)
      }

      await fetch('http://localhost:8000/api/exercises', config);
      // let json = await res.json();

      this.setState({
        loading: false
      });

      this.props.history.push('/exercise');
    } catch(error) {
      this.setState({
        error: true,
        loading: false
      });
    }
  }

  render = () => (
    this.state.loading ?
      <Loading />
    :
      this.state.error ?
        <FatalError />
      :
        <ExerciseNew
          form={this.state.form}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
  )
}

export default ExerciseNewContainer;
