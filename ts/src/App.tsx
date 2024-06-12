import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type User={
  name : string;
  age : string;
}

function App() {

  let [user, setUser] = useState('kim')
  

  return (
    <div>
      <h4>안녕하십니까</h4>
      <Porfile name='철수' age='20'></Porfile>
    </div>
  );
}


function Porfile(props: User): JSX.Element { //html 로 return 한다 : JSX.Element로 하면 된다.
  return (
      <div>{props.name} 입니다. 나이는 {props.age} 입니다.</div>
  )
}


export default App;
