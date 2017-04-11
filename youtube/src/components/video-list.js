/**
 * Created by nbasiri on 10/04/2017.
 */
import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
    const videoListItems = props.videos.map( (video) => {
        return(
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return(
        <ul className="col-md-4 list-group">
            {videoListItems}
        </ul>
    );

};

export default VideoList;


