import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import { useSelector } from 'react-redux';
import Login from './components/Login/Login';
import { selectUser } from './features/userSlice';

function App() {
  const user= useSelector(selectUser)
  return (
    <div className="app">
      <Header/>
      {!user? <Login/>: 
      <div className='app_body'>
      <Sidebar/>
      <Feed/> 
      {/* news  */}
      </div>
      }
      

    </div>
  );
}

export default App;
