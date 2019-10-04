import React from 'react';
import { connect } from 'react-redux'; 
import { getClothes, getClothesIndex, getClothesItem } from '../store';
import { setValue, orderClothes, handleSubmit } from './clothesReducer';

const Clothes = ({clothes, index, setValue, orderClothes, newItem, handleSubmit}) => {
  return (
    <div>
      <ul>
        { clothes.map((cloth, idx) => (
            <li key={cloth + index}>
            { clothes.indexOf(cloth) === index 
              ? <input 
                  type="text" 
                  value={newItem ? newItem : cloth} 
                  autoFocus 
                  onChange={e => setValue(e.target.value, index, clothes)} 
                  onKeyDown={e => e.key === 'Enter' ? handleSubmit( index, clothes) : null} />
              : <>
                  <span>{cloth}</span> 
                  <button onClick={() => orderClothes(idx)}>Edit</button>
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
  newItem: getClothesItem(state)
});

const getMethods = dispatch => ({
  setValue: (value, index, clothes) => dispatch( setValue(value, index, clothes)),
  orderClothes: index => dispatch( orderClothes(index)),
  handleSubmit: (index, clothes) => dispatch( handleSubmit(index, clothes))
})

export default connect(
  getData,
  getMethods
)(Clothes);