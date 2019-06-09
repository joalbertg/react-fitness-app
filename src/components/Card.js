import React from 'react';

import './styles/Card.css';

// assets
import circlesImg from '../images/circles.png';

// class Card extends React.Component {
//   render() {
//     return <h1>Test</h1>
//   }
// }

const Card = ({title, description, img, leftColor, rightColor}) => (
  <div className="card mx-auto Fitness-Card"
    style={{
      backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`,
    }}
  >
    <div className="card-body">
      <div className="row center">
        <div className="col-6">
          <img src={img} className="float-right"/>
        </div>
        <div className="col-6 Fitness-Card-Info">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Card;
