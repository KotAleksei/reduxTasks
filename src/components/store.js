import { createStore, combineReducers } from 'redux';
import foodReducer from './orderingFood/foodReducer';
import clothesReducer from './changingClothes/clothesReducer';

// for Foods App
export const getFoods = state => state.foods.foods;
export const getFoodItemMove = state => state.foods.itemMove;
export const getFoodIndex = state => state.foods.index;

// for Clothes App
export const getClothes = state => state.clothes.clothes;
export const getClothesItemChooses = state => state.clothes.itemChooses;
export const getClothesIndex = state => state.clothes.index;
export const getClothesItem = state => state.clothes.newItem;

const reducer = combineReducers({
  foods: foodReducer,
  clothes: clothesReducer
})

const initialState = {
  foods: {
    foods: ['Apple', 'Bread', 'Carrot', 'Dumplings', 'Eggs', 'Fish', 'Carlic', 'Honey', 'Ice Cream', 'Jam'],
    itemMove: '',
    index: null,
  },
  clothes: {
    clothes: ['Apron', 'Belt', 'Cardigan', 'Dress', 'Earrings', 'Fur coat', 'Gloves', 'Hat'],
    index: null,
    itemChooses: '',
    newItem: ''
  }
};
const store = createStore(reducer, initialState);

export default store;