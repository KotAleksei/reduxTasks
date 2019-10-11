import React from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../store';
import { changeDone, removeTodo, changeToDo } from './todoReducer';
import  { Header, Main, Footer }  from './todoComponents';


const ToDo = ({todos, changeDone, removeTodo, setTodoValue}) => {
  return (
    <div>
      <Header />
      <main>
          <ul>
            { todos.map(todo => {
                
                return (
                  <li key={todo.id}>
                      <input 
                        type="checkbox" 
                        checked={todo.done}
                        onChange={() => {
                          changeDone(todo.id, todos);
                        }} />
                      <input 
                        type="text"
                        value={todo.value}
                        onChange={e => setTodoValue(e.target.value, todo.id, todos)}
                        onKeyDown={e => e.key === 'Enter' ? e.target.blur() : null }
                        />
                      <button onClick={() => removeTodo(todo.id, todos)} >Kill</button>
                   </li>
                )
              })}
          </ul>
      </main>
      <footer>
        <span>
          items left
        </span>
        <ul>
          <li>
            All
          </li>
          <li>
            Active
          </li>
          <li>
            Done
          </li>
        </ul>
        <button>Clear Completed</button>
      </footer>
    </div>
  )
}



const getData = state => ({
  todos: getTodos(state),
});

const getMethods = dispatch => ({
  changeDone: (id, todos) => dispatch(changeDone(id, todos)),
  removeTodo: (id, todos) => dispatch(removeTodo(id, todos)),
  setTodoValue: (inputValue, id, todos) => dispatch(changeToDo(inputValue, id, todos)),
})

export default connect(
  getData,
  getMethods
)(ToDo);