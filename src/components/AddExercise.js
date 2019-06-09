import React from 'react';
import { Link as Anchor} from 'react-router-dom';

// assets
import add from '../images/add.png';
import './styles/AddButton.css';

const AddExercise = () => (
  <Anchor to="/exercise/new">
    <img className="Fitness-Add" src={add} alt="Add exercite" />
  </Anchor>
)

export default AddExercise;
