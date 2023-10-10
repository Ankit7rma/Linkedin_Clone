import React, { useState } from "react";
import "./login.css";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const loginToApp = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(
          login({
            email: user.email,
            uid: user.id,
            displayName: name,
            photoURL: photoUrl,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  const register = () => {
    if (!name && !email && !password) {
      return alert("Please Enter Details ");
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        }).then(
          dispatch(
            login({
              email: user.email,
              uid: user.id,
              displayName: name,
              photoURL: photoUrl,
            })
          )
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="login">
      {/* unlock <img src='https://content.linkedin.com/content/dam/brand/site/img/logo/do/do-trademark-legible.png' alt="logo" /> */}
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
        { (
          <input
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          value={email}
          type="text"
          placeholder="Email or Phone Number"
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isSignInForm && (
          <input
            value={photoUrl}
            type="text"
            placeholder="photourl"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        )}
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignInForm ? (
          <button className="" onClick={loginToApp}>
            Sign In
          </button>
        ) : (
          <button className="" onClick={register}>
            Sign Up
          </button>
        )}
      </form>
      <p className="register" onClick={toggleSignInForm}>
        {isSignInForm
          ? "New here? Sign Up Now"
          : "Already Registered Sign In Now"}
      </p>
    </div>
  );
};

export default Login;
