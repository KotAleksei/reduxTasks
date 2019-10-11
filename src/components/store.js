import { createStore, combineReducers } from 'redux';
import foodReducer from './orderingFood/foodReducer';
import clothesReducer from './changingClothes/clothesReducer';
import todoReducer from './toDoApp/todoReducer';
import foods from '../api/foods';
import clothes from '../api/clothes';

// for Foods App
export const getFoods = state => state.foods.foods;
export const getFoodItemMove = state => state.foods.itemMove;
export const getFoodIndex = state => state.foods.index;

// for Clothes App
export const getClothes = state => state.clothes.clothes;
export const getClothesIndex = state => state.clothes.index;
export const getClothesItem = state => state.clothes.inputValue;

// for ToDo App
export const getTodos = state => state.todo.todos;
export const getInputCreateValue = state => state.todo.inputCreateValue;

const reducer = combineReducers({
  foods: foodReducer,
  clothes: clothesReducer,
  todo: todoReducer
})

const initialState = {
  foods,
  clothes,
  todo: {
    todos: [],
    inputCreateValue: ''
  }
};
const store = createStore(reducer, initialState);

export default store;