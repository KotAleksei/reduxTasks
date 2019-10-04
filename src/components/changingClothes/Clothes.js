import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux'; 
import { getClothes, getClothesIndex, getClothesItemChooses, getClothesItem } from '../store';
import { setValue, orderClothes } from './clothesReducer';


const Clothes = ({clothes, itemChooses, index, setValue, orderClothes, newItem}) => {
  
  const inputRef = useRef(null);
  const someFunc = e => console.log('e :', e);
  // useEffect(() => {
  //   if(inputRef.current)
  //     inputRef.current.addEventListener('keydown', someFunc);
  //   return () => {
  //     if(inputRef.current)
  //       inputRef.current.removeEventListener('kedown', someFunc);
  //   }
  // })
  // console.log(clothes);
  return (
    <div>
      <ul>
        {
          
          clothes.map((cloth, idx) => (
            <li key={cloth}>
              {/* {console.log(' 1:', clothes.indexOf(cloth) === index  )} */}
            {  clothes.indexOf(cloth) === index 
              ? <input 
                  ref={inputRef}
                  type="text" 
                  value={newItem ? newItem : cloth} 
                  autoFocus 
                  onChange={e => {
                    // console.log(e.nativeEvent);
                    setValue(e.target.value, itemChooses, clothes)
                  }} 
                  onKeyDown={(e) => console.log(e.key)}
                  />
              : <>
                  <span>{cloth}</span> 
                  <button onClick={() => orderClothes(cloth, idx)}>Edit</button>
                </>
            }
            </li>
          ))
        }
      </ul>
    </div>
  )
}


const getData = state => ({
  clothes: getClothes(state),
  itemChooses: getClothesItemChooses(state),
  index: getClothesIndex(state),
  newItem: getClothesItem(state)
});

const getMethods = dispatch => ({
  setValue: (value,itemChooses ,clothes) => dispatch(setValue(value,itemChooses, clothes)),
  orderClothes: (cloth, index) => dispatch(orderClothes(cloth, index))
})

export default connect(
  getData,
  getMethods
)(Clothes);