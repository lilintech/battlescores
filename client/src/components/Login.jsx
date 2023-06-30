import React from "react";
import "./login.css"
import books from "../images/books.png"
import axios from 'axios';


function Login() {

const handleSubmit = async (e) =>{
    e.preventDefault();
    const form = document.querySelector('form');
    const formdata = new FormData(form);
    console.log(...formdata);
    const values = {
        email : formdata.get("username"),
        password : formdata.get("password"),
    }

   await axios.post("http://localhost:9000/api/login", values).then((data)=>{
      console.log(data.data);
    })

}

  return (
    <div className="login-page">
      <div className="header">
        <h1>funfolder</h1>
      </div>

      <div class="form">
        <form onSubmit={handleSubmit} >
          <label for="username">username</label>
          <br />
          <hr />
          <input type="text" id="username" className="username" name="username" />
          <br />
          <label for="password" id="password" name="password">
            password
          </label>
          <hr />
          <input
            type="password"
            id="password"
            className="password"
            name="password"

          />
          <button type="submit" >Login</button>
        </form>
        <div class="backgroundimg">
          <img
          src= {books}
            alt="books"
            onmouseover="bigImg(this)"
            onmouseout="normalImg(this)"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
