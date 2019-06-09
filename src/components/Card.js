import React from 'react';

import './styles/Card.css';

// assets
import circlesImg from '../images/circles.png';

class Card extends React.Component {
  constructor(props) {
    super(props);
    const {title, description, img, leftColor, rightColor} = props;

    this.state = {title, description, img, leftColor, rightColor};
  }

componentDidMount() {
  setTimeout(() => {
    this.setState({
      img: ""
    })
  }, 5000);
} 

  render() {
    return (
      <div className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${this.state.leftColor}, ${this.state.rightColor})`,
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={this.state.img} className="float-right"/>
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{this.state.title}</h1>
              <p>{this.state.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// const Card = ({title, description, img, leftColor, rightColor}) => (
//   <div className="card mx-auto Fitness-Card"
//     style={{
//       backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`,
//     }}
//   >
//     <div className="card-body">
//       <div className="row center">
//         <div className="col-6">
//           <img src={img} className="float-right"/>
//         </div>
//         <div className="col-6 Fitness-Card-Info">
//           <h1>{title}</h1>
//           <p>{description}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// )

export default Card;
