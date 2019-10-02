import React from 'react';
import { connect } from 'react-redux'; 
import { getFoods, getIndex, getItemMove } from '../store';
import { order, moveUp, moveDown } from './foodReducer';

const Food = ({foods, index, itemMove, order}) => {
  // console.log(itemMove, index);
  return (
    <>
      <button disabled={itemMove && index > 0 ? false : true} onClick={() => moveUp(foods, index)} >
        Move Up
      </button>
      <ul>
        { foods.map(food => (
            <li 
              key={food}
              onClick={() => order(food)}
            >
              { food }
            </li>
          )) }
      </ul>
      <button disabled={itemMove && index < foods.length - 1 ? false : true} onClick={() => moveDown(foods, index)}> 
          Move Down
      </button>
    </>
  )
}


const getData = state => ({
  foods: getFoods(state),
  index: getIndex(state),
  itemMove: getItemMove(state)
})

const getMethods = dispatch => ({
  order: (food) => dispatch(order(food)),
  moveUp: (foods, index) => dispatch(moveUp(foods, index)),
  moveDown: (foods, index) => dispatch(moveDown(foods, index))
});

export default connect(
  getData,
  getMethods
)(Food);