import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import "./feed.css"
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

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
            <InputOptions title="Photo" color="skyblue" Icon={ImageIcon}/>
            <InputOptions title="Video" color="pink" Icon={SubscriptionsIcon}/>
            <InputOptions title="Event" color="red" Icon={EventNoteIcon}/>
            <InputOptions title="Article" color="Green" Icon={CalendarViewDayIcon}/>
        </div>
    </div>
    </div>
  )
}

export default Feed