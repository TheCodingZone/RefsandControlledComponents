import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isVaild, setIsVaild] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      
      setIsVaild(true);
    }
    else{
      setIsVaild(false);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsVaild(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isVaild ? 'red' : 'black' }}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} style={{ background : !isVaild ? '#fdd' : 'white' }}/>
      </div>
      <Button type="submit"  style={{ backgroundColor : !isVaild ? 'red' : 'white' }}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
