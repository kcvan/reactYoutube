import React from "react";

// This component just returns a <li> with something in it. as you can see,
// we're using es6 destructuring to just get video out of props object.
const VideoListItem = ({video, onVideoSelect}) => {
  // This syntax on top in the parameter is the same as below
  // const video = props.video;
  // const onVideoSelect = props.onVideoSelect;

  // This gives us an image from youtube api
  const imageUrl = video.snippet.thumbnails.default.url;
  // We're spiffing up our <li> with some bootstrap
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;