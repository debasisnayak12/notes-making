import axios from 'axios';
import React, { useState } from 'react'
import "./styles.css";
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    const payload = { email, pass };
    axios
      .post("https://notes-making.onrender.com/users/login", payload)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("username",response.data.username);
        setEmail("");
        setPass("");
        setError("");
        setLoading(false);
        navigate("/createNotes");
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 401) {
          setError("Incorrect Password");
        } else {
          setError("User doesn't exist!");
        }
        setLoading(false);
      });
  }
  
  return (
    <div className='login account'>
      <div className="form-container">
        <h2 className="register-head">Login</h2>
      <div className="form">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleSubmit}>{loading ? "Loading..." : "Submit"}</button>
        {error && <p className="error-message">{error}</p>}
        <div className="already-acc">
            Don't have an account? <NavLink to="/signup">Click here</NavLink>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Login