import React, { useState } from "react";
import { useStateDispatch } from "../StateContext";
import { registerUser } from "../api/auth";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const dispatch = useStateDispatch();
  
  return(
    <div>
      <form
        onSubmit = {async (event) => {
          event.preventDefault();
          if (confirmPw !== password) {
            console.log("Passwords do not match. User not created.");
            return;
          }
          try {
            console.log('Register: username: ', username, 'pw: ', password);
            const token = await registerUser(username, password);
            console.log('Register: token: ', token);
            dispatch({ type: 'setToken', payload: token});
          } catch (error) {
            console.error('Register: Error setting token for registered user: ', error)
          }
        }} 
      >
        <label htmlFor='username'>Username: </label>
        <input type='text' value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>

        <label htmlFor='password'>Password: </label>
        <input type='text' value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>

        <label htmlFor='confirmPw'>Confirm Password: </label>
        <input type='text' value={confirmPw} placeholder="Confirm Password" onChange={(event) => setConfirmPw(event.target.value)}/>
        <input type="submit" value="GET FIT!" />
      </form>
    </div>
  )
}

export default Register;