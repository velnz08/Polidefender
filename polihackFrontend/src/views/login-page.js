import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet'
import './login-page.css'
import axios from 'axios';

const LoginPage = (props) => {
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const [ver, setVer] = React.useState(false);

  useEffect(() => {
    if (localStorage.getItem("email") !== null)
      navigate("/")
  }, [])
  useEffect(() => {
    if (ver === true)
      navigate("/ChatBot")
  }, [ver])

  const login = (event) => {
    axios.post("http://192.168.35.185:8080/User/login",
      {
        email: inputEmail,
        password: inputPassword
      }
    ).then((response) => {
      const { data, status } = response;
      if (status === 200) {
        console.log("AM PRIMIT PACHET");
        setVer(true);
        localStorage.setItem("username", data.username);
        localStorage.setItem("id", data.id);
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        localStorage.setItem("password", data.password);
       // window.location.reload();
      }
      else {
        setError(true);
      }
    }).catch((error) => {
      console.log(error)
      setError(true);
    });


  }
  return (
    <div>
      <div className="login-page-hero">
        <div className="login-page-hero1 heroContainer">
          <div className='log'>
            <form>  <input
              required
              placeholder="Email Address"
              className="login-page-textarea textarea"
              onChange={(event) => { setInputEmail(event.target.value) }}
            ></input>
              <input type='password'
                required
                placeholder="Password"
                className="login-page-textarea1 textarea"
                onChange={(event) => { setInputPassword(event.target.value) }}
              ></input></form>
              <button onClick={login} type="button" className="login-page-button button">
                Continue
              </button>
            {/* {ver === false ?
              <button onClick={login} type="button" className="login-page-button button">
                Continue
              </button>
              :
              <a href="./ChatBot" target="_self" > <button onClick={login} type="button" className="login-page-button button">
                Continue
              </button></a>

            } */}
            <span className="login-page-text6">Login</span>
          </div>
        </div>
      </div>
      <div className="login-page-gallery"></div>
    </div>
  )
}

export default LoginPage
