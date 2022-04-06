import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>calculator</h1>
      <form>
        <label>Choose a user type</label>
        <select htmlFor='userType'>
          <option id='userType' value=''>
            select here
          </option>

          <option id='userType' value='non company'>
            non company user
          </option>

          <option id='userType' value='company user'>
            company user
          </option>
        </select>
        <label>choose product type</label>
        <select>
          <option>select here</option>
          <option value='new product'>new product</option>
          <option value='old product'>old product</option>
        </select>
      </form>
    </div>
  );
}

export default App;
