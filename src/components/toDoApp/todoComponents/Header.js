import React from 'react';
import { connect } from 'react-redux';
import { getTodos, getInputCreateValue } from '../../store';
import { addTodo, setGreatedValue } from '../todoReducer';

const Header = ({inputCreateValue, todos, addTodo, setGreatedValue}) => {
  return (
    <header>
    <h1>ToDo App</h1>
    <form onSubmit={e => {
      e.preventDefault();
      addTodo(inputCreateValue, todos);
    }}>
      <input 
        type="text" 
        placeholder="What needs to be done"
        value={inputCreateValue}
        onChange={e => 
          setGreatedValue(e.target.value)}
        />
    </form>
  </header>
  )
}

const getData = state => ({
  todos: getTodos(state),
  inputCreateValue: getInputCreateValue(state)
});

const getMethods = dispatch => ({
  addTodo: (inputValue, todos) => dispatch(addTodo(inputValue, todos)),
  setGreatedValue: inputValue => dispatch(setGreatedValue(inputValue)),
})

export default connect(
  getData,
  getMethods
)(Header);