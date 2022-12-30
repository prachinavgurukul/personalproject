import Addnewperson from './component/Addnewperson';
import Retrive from './component/Retrive';
import './App.css';
import { useState } from 'react';

export default function App(){
  const[boolean,setBoolean]=useState(true)
  return(
    <div id="box1">
      <div id="header"><p>{"<"}Prachi More{">"}Directory App</p></div>
      <div id="buttonbox">
      <button id="addnewbtn" onClick={()=>{
        setBoolean(!boolean)
        setBoolean(true)
      }}>ADD NEW PERSON</button> 
      <button id="retrivebtn" onClick={()=>{
        setBoolean(!boolean)
        setBoolean(false)
      }}>Retrive Information</button>
      {
        boolean?<Addnewperson/>:<Retrive/>
      }
      </div>
    </div>
  );
}


