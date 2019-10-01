import React from 'react';
import { connect } from 'react-redux'; 
import { getFoods } from '../store';

const Food = (props) => {
  console.log(props.foods);
  return (
    <>
      <button>Move Up</button>
      <ul>
        { props.foods.map(food => (
              <li key={food} >{food}</li>
            )) }
      </ul>
      <button>Move Down</button>
    </>
  )
}


const getData = state => ({
  foods: getFoods(state)
})

export default connect(
  getData
)(Food);