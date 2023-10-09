import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import "./feed.css"
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post/Post';
import { linkedInPosts } from './Post/PostArray';
import {db} from "../firebase/firebase"
import { collection, addDoc ,getDocs} from "firebase/firestore"; 


const Feed = () => {
  const [posts,setPosts] = useState(linkedInPosts)
  const [input ,setInput] = useState('')
//   useEffect(()=>{
//     const postCollection = getDocs(collection(db, "posts"));
//     postCollection.onSnapshot((snapshot) => {
//       setPosts(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         }))
//       );
//     });
//   //   const querySnapshot = await getDocs(collection(db, "users"));
// // querySnapshot.forEach((doc) => {
// //   console.log(`${doc.id} => ${doc.data()}`);
// // });

 
//   }, []);
  const sendPost=(e)=>{
    e.preventDefault()
  
     const docRef =addDoc(collection(db, "posts"),{
      name: "Ankit Sharma",
      description: "Frontend Developer",
      message: "Hello all, this is LinkedIn Clone in progress",
    });  
  }
  return (
    <div className='feed'>
    <div className='feed_inputContainer'>
        <div className='feedInput'>
            <CreateIcon/>
            <form>
                <input value ={input} onChange={(e)=>(setInput(e.target.va

                ))} type='text'></input>
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
      <Post name="Ankit Sharma" description="Frontend Developer" message="Hello all" avatar='https://lh3.googleusercontent.com/ogw/AKPQZvyGi0i3iu1xdM59zqDA1aiX9Ce0hn2A2OczqPTESw=s32-c-mo'/>
    
    </div>
     
   
    </div>
  )
}

export default Feed;