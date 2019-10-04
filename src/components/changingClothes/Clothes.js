import React from 'react';
import { connect } from 'react-redux'; 
import { getClothes, getClothesIndex, getClothesItem } from '../store';
import { setValue, orderClothes, handleSubmit } from './clothesReducer';
import './style.css';

const Clothes = ({clothes, index, setValue, orderClothes, inputValue, handleSubmit}) => {
  const arrOfIndex = clothes.map((cloth, idx) => ({ [idx]: cloth}));
  return (
    <div>
      <ul className="clothesList">
        { clothes.map((cloth, idx) => (
            <li key={idx} className="clothesItem" >
            {
              arrOfIndex.indexOf(arrOfIndex[idx]) === index 
              ? <input 
                  type="text" 
                  value={inputValue} 
                  autoFocus 
                  onChange={e => {
                    setValue(e.target.value, clothes)}} 
                  onKeyDown={e => e.key === 'Enter' ? handleSubmit( index, clothes, inputValue) : null}
                  />
              : <>
                  <span className="clotheName">{cloth}</span> 
                  <button onClick={() => orderClothes(cloth, idx)} className="closeBtn">Edit</button>
                </>
            }
            </li>
          )) }
      </ul>
    </div>
  )
}

const getData = state => ({
  clothes: getClothes(state),
  index: getClothesIndex(state),
  inputValue: getClothesItem(state)
});

const getMethods = dispatch => ({
  setValue: (value, clothes) => dispatch( setValue(value, clothes)),
  orderClothes: (cloth, index) => dispatch( orderClothes(cloth, index)),
  handleSubmit: (index, clothes, newItem) => dispatch( handleSubmit(index, clothes, newItem))
})

export default connect(
  getData,
  getMethods
)(Clothes);