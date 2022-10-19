import './App.css';
import React from 'react'
import { useState } from 'react'

// Custom component
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Lastname: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = "John";
  const isNameShowing = true;
  const isLoggedIn = true;
  const [counter, setCounter] = useState(0); // If starts with use, it is a hook

  return (
    // JSX, not pure HTML. className = class in regular HTML. Can write javascript in the "HTML" section with curly brackets { CODE }
    <div className="App">
      {/* syntax: if_statement ? show_if_true : show_if_false */}
      <h1>React app, hello {isNameShowing ? name : "Someone"}</h1>
      <div className="user">
      {isLoggedIn ? (
        // React fragment: <></>
        <> 
          <h2>
            <Person 
              name={name} 
              lastName="Doe" 
              age={35}
            />
            <Person 
              name="Evalena" 
              lastName="Marklund" 
              age={44 + 5}
            />
            <Person/>
          </h2>
        </>
      ): (
        <h2>Not logged in</h2>
      )}
      </div>
      <div>
        <button className="button" onClick={() => setCounter(counter - 1)}><span>- </span></button>
        <h2>{counter}</h2>
        <button className="button" onClick={() => setCounter(counter + 1)}><span>+ </span></button>
      </div>
    </div>
  );
}

export default App;
