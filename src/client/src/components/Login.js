import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [img, setImg] = useState("");

  const createUser = () => {};

  return (
    <div className="login">
      <div>
        <form>
          <input
            type="text"
            required
            placeholder="Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            required
            placeholder="Age"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <input
            type="text"
            required
            placeholder="Img link"
            onChange={(event) => {
              setImg(event.target.value);
            }}
          />
          <button onClick={createUser}>Go to Smash or Pass</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
