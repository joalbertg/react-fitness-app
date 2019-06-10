import React from 'react';

import Card from './Card';

const ExerciseList = ({exerciseData}) => (
  <>
    {
      exerciseData.map((exercise, index) =>
        <Card
          key={index}
          {...exercise}
        />
      )
    }
  </>
)

export default ExerciseList;
