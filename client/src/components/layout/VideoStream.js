import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const VideoStream = (props) => {
 return (
  <div className='container'>
   <div>
    <h2>HTTP Video Streaming</h2>
    <p>This video is 61MB and is being streamed instead of downloaded.</p>
    <p>
     Feel free to seek through the video and it only loads the part you want to
     watch
    </p>
    <video id='videoPlayer' width={650} controls muted='muted' autoPlay>
     <source src='/mongo-video' type='video/mp4' />
    </video>
    <div>
     <h5>Video Title Here</h5>
    </div>
   </div>
  </div>
 );
};

VideoStream.propTypes = {};

export default VideoStream;
