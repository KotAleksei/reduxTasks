import { createStore, combineReducers } from 'redux';
import foodReducer from './orderingFood/foodReducer';
import clothesReducer from './changingClothes/clothesReducer';
import foods from '../api/foods';
import clothes from '../api/clothes';

// for Foods App
export const getFoods = state => state.foods.foods;
export const getFoodItemMove = state => state.foods.itemMove;
export const getFoodIndex = state => state.foods.index;

// for Clothes App
export const getClothes = state => state.clothes.clothes;
export const getClothesItemChooses = state => state.clothes.itemChooses;
export const getClothesIndex = state => state.clothes.index;
export const getClothesItem = state => state.clothes.inputValue;

const reducer = combineReducers({
  foods: foodReducer,
  clothes: clothesReducer
})

const initialState = {
  foods,
  clothes
};
const store = createStore(reducer, initialState);

export default store;