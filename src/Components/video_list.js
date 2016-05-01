import React from "react";
// Creating a functional component called VideoList that shows a unordered list.
// To add a class in jsx, instead of saying class, you have to say className because
// of the keyword class to create class-based components.

// importing video_list_item
import VideoListItem from "./video_list_item";

// The props argument is passed down from index.jsx, when we created the videos property
// inside VideoList.

// We're going to make a loop to loop over the videos props, but not with a for loop.
// We're going to try and use th native ES6 loops like map, as much as we can.

// We set a const videoItems equal to a mapped array of videos passed into the
// VideoListItem component as a property. Then, since the const is jsut javascript,
// we have to use handle bars to use it in our jsx. React recognizes the array, and 
// will render the list. Whenever we render an array of items of the same type,
// it needs a unique key(ID) property. Here, each youtube video that comes back
// has a unique property called "etag", we'll use this.
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;