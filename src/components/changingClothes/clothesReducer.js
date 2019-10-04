const ORDER = 'ORDER';
const SET_VALUE = 'SET_VALUE';
const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

export const orderClothes = ( index) => ({type: 'ORDER', index});
export const setValue = (value, index, items) => {
  const newItems = [...items];
  newItems[index] = value; 
  return {
    type: SET_VALUE,
    newItem: value,
    items: newItems
  }
}
export const handleSubmit = (index, items) => {
  let newItems = [...items];
  if(newItems[index].trim() === ''){
    newItems = [
      ...newItems.slice(0, index),
      ...newItems.slice(index + 1)
    ];
  }
  return {
    type: HANDLE_SUBMIT,
    newItem: '',
    index: null,
    items: newItems
  }
}

const clothesReducer = (state = {}, action) => {
  switch (action.type){
    case ORDER:
      return {
        ...state,
        index: action.index,
      }
    case SET_VALUE:
      return {
        ...state,
        newItem: action.newItem,
        clothes: action.items
      }
    case HANDLE_SUBMIT:
      return {
        ...state,
        newItem: action.newItem,
        index: action.index,
        clothes: action.items
      }
    default:
      return state;
  }
}

export default clothesReducer;