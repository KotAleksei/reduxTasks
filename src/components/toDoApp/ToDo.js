import React from 'react';

const ToDo = () => {
  return (
    <div>
      <header>
        <h1>ToDo App</h1>
        <form>
          <input type="text" placeholder="What needs to be done" />
        </form>
      </header>
      <main>
          <ul>
            <li>
              <input type="checkbox" />
              <input type="text" />
              <button>Kill</button>
            </li>
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

export default ToDo;