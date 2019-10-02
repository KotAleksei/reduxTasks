import { createStore, combineReducers } from 'redux';
import foodReducer from './orderingFood/foodReducer';


export const getFoods = state => state.foods.foods;
export const getItemMove = state => state.foods.itemMove;
export const getIndex = state => state.foods.index;

const reducer = combineReducers({
  foods: foodReducer
})

const initialState = {
  foods: {
    foods: ['Apple', 'Bread', 'Carrot', 'Dumplings', 'Eggs', 'Fish', 'Carlic', 'Honey', 'Ice Cream', 'Jam'],
    itemMove: '',
    index: null,
  }
};
const store = createStore(reducer, initialState);

export default store;