import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const payload = { email, pass };
    axios
      .post("https://notes-making.onrender.com/users/login", payload)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token",response.data.token)
        setEmail("");
        setPass("");
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div className='login'>
        <h2 className="register-head">Login Form</h2>
      <div className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login