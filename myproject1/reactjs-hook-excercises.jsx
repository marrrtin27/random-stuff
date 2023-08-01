import React from "react";
import "./App.css";
import { useState } from "react";

const userinfo= {
  userid: 21,
  name: 'Mark Cooper',
  age: 21,
  birthday: 'July 27, 1999'
}


function UserInfo(props){

  console.log(props);
  return(
    <main>
      <h3>User Info</h3>
      <h4>Name: {props.name}</h4>
      <h4>Age: {props.age}</h4>
      <h4>Birthday: {props.birthday}</h4>
      <h4>UserId: {props.userid}</h4>
    </main>
  );
}

function Counter(){
  const [count, setCount] = useState(0);

  function addCounter(){
    setCount( count + 1);
    console.log(count);
  }

  function decreaseCounter(){
    if(count >0){
      setCount( count - 1);
      console.log(count);
    }
  }

  return(
    <div>
      <h1>Counter Value: {count}</h1>
      <button type="button" onClick={addCounter}>Add counter</button>
      <button type="button" onClick={decreaseCounter}>Decrease counter</button>
    </div>
  );
}

function InputField(){
  const [text, setText]= useState('');

  function handleInputChange(event){
    setText(event.target.value);
  }

  return(
    <div>
      <input type="text" value={text} onChange={handleInputChange}/>
      <p>Input text: {text}</p>
    </div>
  );
}


function ToggleVisibility(){
  const [isVisible, setIsVisible]= useState(false);

  function handleToggle(){
    setIsVisible(!isVisible);
  }

  return(
    <div>
      <button onClick={handleToggle}>Show/Hide Text</button>
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}

function App() {
  return (
      <main>
        <Counter />

        <UserInfo 
        name={userinfo.name}
        age={userinfo.age}
        birthday={userinfo.birthday}
        userid={userinfo.userid}
        />

        <InputField />

        {
          //Toggle Activity
        }
        <ToggleVisibility />
      </main>
  );
}

export default App;
