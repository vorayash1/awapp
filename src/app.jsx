import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import { validpassword } from "./form";
const App2=()=>{
const [password, setPassword]=useState('');
const [pwdError, setPwdError]=useState(false);
const validate=()=>
{
  if (!validpassword.test(password))
{
    setPwdError(true);
}
};
return (
 <div>
   <lable>
    name:
    <input type="text" name="name"/>
  </lable>
  <label>
    pwd
    <input type="password" name="pwd" value={password} onChange={(e)=> setPassword(e.target.value)} />
  </label>

  <button onClick={validate}>validate</button>
  {pwdError && <p>your password is invalid</p>}
 </div>

);
};
export default App2;