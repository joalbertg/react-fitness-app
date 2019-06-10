import React from 'react';

import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';
import Loading from '../components/Loading';
import FatalError from './500';

// assets
import '../components/styles/ExerciseNew.css';

class ExerciseNew extends React.Component {
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

      let res = await fetch('http://localhost:8000/api/exercises', config);
      let json = await res.json();

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
        <div className="ExerciseNew_Lateral_Spaces row">
          <div className="col-sm ExerciseNew_Card_Space">
            <Card {...this.state.form} />
          </div>
          <div className="col-sm ExerciseNew_Form_Space">
            <ExerciseForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              form={this.state.form}
            />
          </div>
        </div>
  )
}

export default ExerciseNew;
