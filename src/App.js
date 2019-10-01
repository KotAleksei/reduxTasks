import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Food from './components/orderingFood/Food';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to='/' exact >Home</NavLink>
          </li>
          <li>
            <NavLink to='/food' >Food</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/food' component={Food}/>
      </Switch>
    </Router>
  );
}

const HomePage = () => <h1>Home Page</h1>
// const Food = () => <h2>Food Page</h2>

export default App;
