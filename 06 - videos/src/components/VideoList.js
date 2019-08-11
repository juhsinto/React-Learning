import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelectFromChildItem}) => {

	const renderedVideoItemList = videos.map((video) => {
		return <VideoItem onVideoSelectFromChildItem={onVideoSelectFromChildItem} key={video.id.videoId} video={video} />;
	})

	return (
		<div className="ui relaxed divided list">  
			{renderedVideoItemList} 
		</div>);
};

export default VideoList;