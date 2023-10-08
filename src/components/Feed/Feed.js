import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import "./feed.css"
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post/Post';

const Feed = () => {
  return (
    <div className='feed'>
    <div className='feed_inputContainer'>
        <div className='feedInput'>
            <CreateIcon/>
            <form>
                <input type='text'></input>
                <button type='submit'>Send</button>
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
      <Post name="Ankit Sharma" description="Frontend Developer" message="Hello all" avatar='https://lh3.googleusercontent.com/ogw/AKPQZvyGi0i3iu1xdM59zqDA1aiX9Ce0hn2A2OczqPTESw=s32-c-mo'/>
    </div>
    </div>
  )
}

export default Feed