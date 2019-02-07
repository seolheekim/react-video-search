// Any time this component renders onto the screen it will have a prop called "props.videos"
// that will be array of different records that needs to be render out to the screen.

import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video ={video}
        handleVideoSelect={handleVideoSelect}/>
    )
  });

  return (
    <div className="ui relaxed divided list "> {renderedList} </div>
  )
}

export default VideoList;