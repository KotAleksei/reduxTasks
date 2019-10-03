import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux'; 
import { getFoods, getIndex, getItemMove } from '../store';
import { order, moveUp, moveDown } from './foodReducer';

const Food = ({foods, index, itemMove, order, moveUp, moveDown}) => {
  const disabledMoveUpBtn = itemMove && index > 0 ? false : true;
  const disabledMoveDownBtn = itemMove && index < foods.length - 1 ? false : true;
  const foodRef = useRef(null);
  const loseFocus = (event) => { 
    const foodsAppElement = event.target.parentElement;
    return foodsAppElement === foodRef.current ? null : order('');
  }

  useEffect(() => {
    document.addEventListener('click', loseFocus);
    return () => {
      document.removeEventListener('click', loseFocus);
    }
  })
 
  return (
    <div className='foodsApp' ref={foodRef} >
      <h2 className="foodsTittle">Ordering food</h2>
      <button disabled={disabledMoveUpBtn} onClick={() => moveUp(foods, index)} className="moveUpBtn">
        Move Up
      </button>
        { foods.map((food, idx) => (
            <div 
              key={food}
              onClick={() => order(food)}
              className={food === itemMove ? `${food} selectedFood` : `${food}`}
            >
              
              { idx + 1 } { food }
            </div>
          )) }
      <button disabled={disabledMoveDownBtn} onClick={() => moveDown(foods, index)} className="moveDownBtn"> 
          Move Down
      </button>
      </div>
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