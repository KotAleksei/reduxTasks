import { createStore, combineReducers } from 'redux';
import foodReducer from './orderingFood/foodReducer';


export const getFoods = state => state.foods;

const reducer = combineReducers({
  foods: foodReducer
})

const initialState = {
  foods: ['Apple', 'Bread', 'Carrot', 'Dumplings', 'Eggs', 'Fish', 'Carlic', 'Honey', 'Ice Cream', 'Jam'],
  itemMove: '',
  index: null,
};
const store = createStore(reducer, initialState);
export default store;