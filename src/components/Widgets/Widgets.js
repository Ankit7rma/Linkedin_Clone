import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./widgets.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
    const newsArticle=(heading,subtitle)=>(
        <div className='newsArticle'>
            <div className='news_left'>
            <FiberManualRecordIcon/>
            </div>
            <div className='news_right'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
  return (
    <div className='widgets'>
    <div className="widgets_header">
       <h2>Linkedin News</h2>
        <InfoIcon/>     
    </div>
    {newsArticle("React Project" ,"Linkedin-clone")}
    {newsArticle("Learn Nextjs" ,"Upcoming Task")}
    {newsArticle("Make Projects" ,"Practice")}
    {newsArticle("Latest Tech" ,"Will Learn")}
    {newsArticle("Frontend Jobs" ,"Koi pta nhi ")}
    </div>
  )
}

export default Widgets