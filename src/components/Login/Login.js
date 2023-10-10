import React, { useState } from 'react'
import "./login.css"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className='login'>
        <img src='https://content.linkedin.com/content/dam/brand/site/img/logo/do/do-trademark-legible.png' alt="logo" />
        {/* <form>
            <input placeholder="Username" type='text'/>
            <input placeholder="password" type='password'/>
            <button>Login</button>
        </form> */}
        <form
        onSubmit={(e) => e.preventDefault()}
        className="form"
      >
        <h2 className="">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            // ref={name}
            type="text"
            placeholder="Name"
            className=""
          />
        )}
        <input
          // ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className=""        />
        {!isSignInForm &&  <input
          // ref={email}
          type="text"
          placeholder="photourl"
          className=""        />}
        <input
          // ref={password}
          type="password"
          placeholder="Password"
          className=""
        />
        {/* <p className="text-red-500">{errorMessage}</p> */}
        <button
          className=""
          // onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New here? Sign Up Now"
            : "Already Registered Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login