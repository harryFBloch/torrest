import React from 'react';
import './page.css';

const videos = () => {
  return (
    <div className="page-container">

      <iframe width="560" height="315" 
        src={`https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG`}
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen title="Torrest Music Youtube"
        className='youtube'
      />

    </div>
  )
}

export default videos;

// https://www.youtube.com/watch?v=u1TF0N7lQCY&list=UU9xloc0P5Qf5FSCrZ7oEmJQ&ab_channel=Torrest