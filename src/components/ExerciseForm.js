import React from 'react';

import { leftColor as DefaultLC, rightColor as DefaultRC} from '../consts/exercise';

const ExerciseForm = ({ onChange, onSubmit, form }) => (
  <div className="container">
    <form 
        onSubmit={onSubmit}
    >
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="title" 
          name="title"
          onChange={onChange}
          value={form.title}
        />
      </div>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="description" 
          name="description"
          onChange={onChange}
          value={form.description}
        />
      </div>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="img" 
          name="img"
          onChange={onChange}
          value={form.img}
        />
      </div>
      <div className="form-row">
        <div className="col">
          <input 
            type="color"
            className="form-control" 
            placeholder="leftColor" 
            name="leftColor"
            onChange={onChange}
            value={form.leftColor || DefaultLC}
          />
        </div>
        <div className="col">
          <input
            type="color"
            className="form-control"
            placeholder="rightColor" 
            name="rightColor"
            onChange={onChange}
            value={form.rightColor || DefaultRC}
          />    
        </div>
      </div>
      <button 
        type="submit" 
        className="btn btn-primary float-right"
      >
        Submit
      </button>
    </form>
  </div>
)

export default ExerciseForm;
