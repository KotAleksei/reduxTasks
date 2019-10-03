const MOVE_UP = 'MOVE_UP';
const MOVE_DOWN = 'MOVE_DOWN';
const ORDER = 'ORDER';

Array.prototype.move = function (index, step) {
  const saveThis = [...this];
  let next = saveThis[index + step];
  saveThis[index + step] = saveThis[index];
  saveThis[index] = next;
  return saveThis;
}

export const order = (item) => ({type: ORDER, itemMove: item})
export const moveUp = (items, index) => {
  return ({
    type: MOVE_UP,
    items: items.move(index, -1),
    index: index - 1
  })
};
export const moveDown = (items, index) => ({
  type: MOVE_DOWN,
  items: items.move(index, 1),
  index: index + 1
});

 const foodReducer = (state = {}, action ) => {
   
  switch(action.type) {
    case ORDER: 
      return {
        ...state,
        itemMove: action.itemMove,
        index: state.foods.indexOf(action.itemMove)
      };
    case MOVE_DOWN: 
      return {
        ...state,
        foods: action.items,
        index: action.index
      };
    case MOVE_UP:
      return {
        ...state,
        foods: action.items,
        index: action.index
      };
    default:
      return state;
  }
}

export default foodReducer;