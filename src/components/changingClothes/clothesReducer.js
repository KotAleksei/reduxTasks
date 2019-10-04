const ORDER = 'ORDER';
const SET_VALUE = 'SET_VALUE';

export const orderClothes = (itemChooses, index) => {
  // console.log(index, itemChooses);
  return {type: 'ORDER', itemChooses, index}
}
export const setValue = (value, itemChooses, clothes) => {
  const newClothe = [...clothes];
  const index = newClothe.indexOf(itemChooses);
  newClothe[index] = value;
  return {type: SET_VALUE, value, setClothes: newClothe}
}

const clothesReducer = (state = {}, action) => {
  // console.log(action)
  switch (action.type){
    case ORDER:
      return {
        ...state,
        index: action.index,
        itemChooses: action.itemChooses
      }
    case SET_VALUE:
      return {
        ...state,
        newItem: action.value,
        clothes: action.setClothes
      }
    default:
      return state;
  }
}

export default clothesReducer;