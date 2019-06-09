import React from 'react';

import Card from './Card';

const ExerciseList = ({exerciseData}) => (
  <>
    {
      exerciseData.map((exercise, index) => {
        const {title, description, img, leftColor, rightColor} = exercise
        return (
          <Card
            key={index}
            title={title}
            description={description}
            img={img}
            leftColor={leftColor}
            rightColor={rightColor}
          />
        )}
      )
    }
  </>
)

export default ExerciseList;
