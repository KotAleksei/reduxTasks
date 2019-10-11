const ADD_TODO = 'ADD_TODO';
const SET_CREATED_VALUE = 'SET_CREATED_VALUE';
const CHANGE_TODO_VALUE = 'CHANGE_TODO_VALUE';
const CHANGE_DONE = 'CHANGE_DONE';
const REMOVE_TODO = 'REMOVE_TODO';

export const setGreatedValue = (inputValue) => {
  return {
    type: SET_CREATED_VALUE,
    inputCreateValue: inputValue,
  }
}
export const changeToDo = (inputValue, id, todos) => {
  const copyTodos = [ ...todos ];
  const itemIndex = copyTodos.findIndex(item => item.id === id);
  copyTodos[itemIndex] = {
    ...copyTodos[itemIndex],
    value: inputValue
  }
  return {
    type: CHANGE_TODO_VALUE,
    todos: copyTodos,
  }
}
export const addTodo = (inputValue, todos) => {
  return {
    type: ADD_TODO,
    todos: [
      ...todos,
      {
        id: Date.now(),
        value: inputValue,
        done: false
      }
    ],
    inputCreateValue: ''
  }
}
export const changeDone = (id, todos) => {
  const copyTodos = [ ...todos ];
  const itemIndex = copyTodos.findIndex(item => item.id === id);
  copyTodos[itemIndex] = {
    ...copyTodos[itemIndex],
    done: !copyTodos[itemIndex].done
  }
  return {
    type: CHANGE_DONE,
    todos: copyTodos
  }
}

export const removeTodo = (id, todos) => {
  const itemIndex = todos.findIndex(item => item.id === id);
  return {
    type: REMOVE_TODO,
    todos: [
      ...todos.slice(0, itemIndex),
      ...todos.slice(itemIndex + 1)
    ]
  }
}

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CREATED_VALUE:
      return {
        ...state,
        inputCreateValue: action.inputCreateValue,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: action.todos,
        inputCreateValue: action.inputCreateValue
      }
    case CHANGE_TODO_VALUE:
      return {
        ...state,
        todos: action.todos
      }
    case CHANGE_DONE: 
      return {
        ...state,
        todos: action.todos
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: action.todos
      }
    default:
        return state;
  }
}

export default todoReducer; 