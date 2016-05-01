import React from "react";

// By now, we should be able to follow along with our code

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>;
  }


  const videoId = video.id.videoId;
  // This is called string interpolation, using backticks, we can put everything
  // inside the backticks and it'll be a string. To add js variables, use ${}.
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;