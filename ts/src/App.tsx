import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux'
import { RootState, 증가 } from './index';

type User={
  name : string;
  age : string;
}

function App() {

  let [user, setUser] = useState('kim')
  const 꺼내온거 = useSelector( (state :RootState) => state );
  const dispatch :Dispatch = useDispatch();

  return (
    <div className='App'>
      { 꺼내온거.counter1.count }
      <button onClick={() => dispatch(증가())}>버튼</button>
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
