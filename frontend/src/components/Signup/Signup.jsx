import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    const payload = { email, username, pass };
    axios
      .post("https://notes-making.onrender.com/users/register", payload)
      .then((response) => {
        console.log(response);
        setUsername("");
        setEmail("");
        setPass("");
        setLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="signup account">
      <div className="form-container">
        <h2 className="register-head">Registration Form</h2>
        <div className="form">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button onClick={handleSubmit}>{loading ? "Loading..." : "Submit"}</button>
          <div className="already-acc">
            Already have an account? <NavLink to="/login">Click here</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
