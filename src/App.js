import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Food from './components/orderingFood/Food';
import Clothes from './components/changingClothes/Clothes';
import ToDo from './components/toDoApp/ToDo';


function App() {
  return (
    <Router >
      <nav>
        <ul className='navPanel'>
          <li>
            <NavLink to='/reduxTasks' exact >Home</NavLink>
          </li>
          <li>
            <NavLink to='/reduxTasks/food' >Ordering Food</NavLink>
          </li>
          <li>
            <NavLink to='/reduxTasks/clothes' >Changing Clothes</NavLink>
          </li>
          <li>
            <NavLink to='/reduxTasks/todo' >ToDo App</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
          <Route path='/reduxTasks' exact component={HomePage} />
          <Route path='/reduxTasks/food' component={Food}/>
          <Route path='/reduxTasks/clothes' component={Clothes} />
          <Route path='/reduxTasks/todo' component={ToDo}/>
      </Switch>
    </Router>
  );
}

const HomePage = () => <h1 className="homePage">Home Page</h1>


export default App;
