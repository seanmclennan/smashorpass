import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [image, setImage] = useState("");

  const createUser = () => {
      Axios.post("https://smash-or-pass-game.herokuapp.com/api/v1/cards", {
          name, 
          age, 
          image,
      });
      
      navigate('/scroll');
  };

  return (
    <div className="login">
        <h1>Create Profile for Smash or Pass</h1>

      <div class='login__box'>
        <form onSubmit={createUser}>
          <input
            type="text"
            placeholder="Name..."
            onChange={(event) => {
                setName(event.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Age..."
            onChange={(event) => {
                setAge(event.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Img link..."
            onChange={(event) => {
                setImage(event.target.value);
            }}
            required
          />
          <button type='submit'>Go to Smash or Pass</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
