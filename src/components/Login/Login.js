import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <img src='https://content.linkedin.com/content/dam/brand/site/img/logo/do/do-trademark-legible.png' alt="logo" />
        <form>
            <input placeholder="Username" type='text'/>
            <input placeholder="password" type='password'/>
            <button>Login</button>
        </form>
        <p>Not a member?
        <span>Register Now</span></p>
    </div>
  )
}

export default Login