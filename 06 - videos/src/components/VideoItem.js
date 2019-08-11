import './VideoItem.css';
import React from 'react';


const VideoItem = ({video, onVideoSelectFromChildItem}) => {
	return (
		<div onClick={() => onVideoSelectFromChildItem(video)} className="video-item item" key={video.id.videoId}> 
			<img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
			<div className="content"> 
				<div className="header"> {video.snippet.title}  </div>
			</div>
		</div>);
};


export default VideoItem;