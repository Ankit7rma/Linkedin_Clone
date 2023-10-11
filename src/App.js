import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login/Login';
import { logOut, login, selectUser } from './features/userSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Widgets from './components/Widgets/Widgets';

function App() {
  const user= useSelector(selectUser)
  const dispatch= useDispatch();
  useEffect(()=>{
    const auth = getAuth();
     onAuthStateChanged(auth, (user) => {
  if (user) {
    dispatch(login({
      email:user.email,
      uid:user.id,
      displayName:user.name,
      photoURL:user.photoUrl,
    }))
  } else {
    dispatch(logOut())
  }
});
  },[ ])
  return (
    <div className="app">
      <Header/>
      {!user? <Login/>: 
      <div className='app_body'>
      <Sidebar/>
      <Feed/> 
      <Widgets/>
      </div>
      }
      

    </div>
  );
}

export default App;
