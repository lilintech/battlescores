import React, { useState } from "react";
import axios from "axios";

import "./login.css";

function Create() {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckPassword] = useState();
  const [checkemail, setCheckemail] = useState();

  const handleFocus = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      //check email validity
      setEmail(value);
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? setCheckemail(false)
        : setCheckemail(true);
    } else if (name === "password") {
      setPassword(value);
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(value)
        ? setCheckPassword(false)
        : setCheckPassword(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formdata = new FormData(form);
    const email = formdata.get("email");
    const password = formdata.get("password");
    const username = formdata.get("username");
    console.log(...formdata);

    const values = {
        email: email,
        password: password,
        username: username,
        // username: username,
      };
      if (
        email !== "" &&
        checkemail === true &&
        password !== "" &&
        checkpassword === true
      ) {
        await axios
        .post("http://localhost:9000/api/create", values)
        .then((data) => {
          console.log(data.data);

          if (data.data.status === 200 && data.data.logged === true) {
            const redirect = () => (window.location.href = "/login");
            redirect();
          }
          if (data.data.error && data.data.logged === false) {
            const redirect = () => (window.location.href = "/create");
            redirect();
          }
        })
      }
  };
  
 
    return (
      <div className="create-page">
        <form onSubmit={handleSubmit}>
          <input
            className="login-input-username"
            type="text"
            placeholder="username"
            name="username"
            minLength={3}
          />
          <input
            class="login-input"
            type="text"
            placeholder="Email Address"
            name="email"
            onFocus={handleFocus}
            onChange={handleChange}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            name="password"
            onFocus={handleFocus}
            onChange={handleChange}
            value={password}
          />
          <div className="requirements">
            <ul>
              <li>Password must contain Minimum eight characters</li>
              <li>At least one uppercase letter</li>
              <li>one lowercase letter</li>
              <li>one number and one special character</li>
            </ul>
          </div>
          <button type="submit">Continue</button>
          <a href="/blogs/login">
            {" "}
            <p>Already Have an account? Login</p>{" "}
          </a>
        </form>
      </div>
    );
}

export default Create;
