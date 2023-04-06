import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from "../stores/auth"
import { useNavigate } from "react-router-dom";
function LoginPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const submitHandle = (e) => {
      if(user && user.length > 5){
        dispatch(login(user))
        navigate('/')
        localStorage.setItem('auth',user)
      }
      e.preventDefault();
  };
  
  return (
    <div>
      Login Page
      <form onSubmit={submitHandle}>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
