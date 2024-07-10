import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const payload = { email, username, pass };
    axios
      .post("http://localhost:8080/users/register", payload)
      .then((response) => {
        console.log(response);
        setUsername("");
        setEmail("");
        setPass("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup">
      <h2 className="register-head">Registration Form</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
  );
};

export default Signup;
