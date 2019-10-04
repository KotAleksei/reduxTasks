const ORDER = 'ORDER';
const SET_VALUE = 'SET_VALUE';
const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

export const orderClothes = (item, index) => {
  return ({type: 'ORDER', index, item})
};
export const setValue = (value, items) => {
  const newItems = [...items];
  return {
    type: SET_VALUE,
    newItem: value,
    items: newItems
  }
}
export const handleSubmit = (index, items, inputValue) => {
  let newItems = [...items];
  newItems[index] = inputValue; 
  if(newItems[index].trim() === ''){
    newItems = [
      ...newItems.slice(0, index),
      ...newItems.slice(index + 1)
    ];
  }
  return {
    type: HANDLE_SUBMIT,
    inputValue: '',
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
        inputValue: action.item
      }
    case SET_VALUE:
      return {
        ...state,
        inputValue: action.newItem,
        clothes: action.items
      }
    case HANDLE_SUBMIT:
      return {
        ...state,
        inputValue: action.inputValue,
        index: action.index,
        clothes: action.items
      }
    default:
      return state;
  }
}

export default clothesReducer;