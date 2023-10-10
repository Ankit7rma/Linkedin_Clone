import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import "./feed.css"
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post/Post';
import {db} from "../firebase/firebase"
import { collection, addDoc,serverTimestamp, onSnapshot, orderBy, query } from "firebase/firestore"; 


const Feed = () => {
  const [posts,setPosts] = useState([])
  const [input ,setInput] = useState('')
  
  useEffect(() => {
    const postCollection = collection(db, 'posts');
    const q = query(postCollection, orderBy('timestamp', 'desc'));

    const subscribe = onSnapshot(q, (querySnapshot) => {
      const updatedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setPosts(updatedPosts);
    });

    // Clean up the listener when the component unmounts
    return () => subscribe();
  // }, [posts]); 
  }, []); 
  const sendPost =(e) => {
    e.preventDefault()
      const postCollection = collection(db, 'posts');
      const timestamp = serverTimestamp(); // Generate a server-side timestamp
      addDoc(postCollection, { 
      name: "Ankit Sharma",
      description: "Frontend Developer",
      message:input, 
      photoUrl:"https://lh3.googleusercontent.com/ogw/AKPQZvyGi0i3iu1xdM59zqDA1aiX9Ce0hn2A2OczqPTESw=s32-c-mo",
      timestamp });    
    setInput("");
  };

  return (
    <div className='feed'>
    <div className='feed_inputContainer'>
        <div className='feedInput'>
            <CreateIcon/>
            <form>
                <input value ={input} onChange={(e)=>(setInput(e.target.value))} type='text'></input>
                <button type='submit' 
                onClick={sendPost}
                >Send</button>
            </form>
        </div>
        <div className='feed_inputOptions'>
            <InputOptions title="Photo" color="darkblue" Icon={ImageIcon}/>
            <InputOptions title="Video" color="purple" Icon={SubscriptionsIcon}/>
            <InputOptions title="Event" color="red" Icon={EventNoteIcon}/>
            <InputOptions title="Article" color="Green" Icon={CalendarViewDayIcon}/>
        </div>
    </div>

    <div className="post">
    {/* {posts.map((post)=>(
      <div className="post_id">
      <Post id={post.id}  name={post.author} description={post.title} message={post.content} likes= {post.likes} comments={post.comments} shares={post.shares}/>
      
      </div>))} */}
      {/* unlock{posts?.map(({id,data:{name,description,message,photoUrl}})=>(
        <Post key={id}
              name={name}
              description={description}
              message={message}
              avatar={photoUrl}
        />
      ))} */}
     
    </div>
     
   
    </div>
  )
}

export default Feed;