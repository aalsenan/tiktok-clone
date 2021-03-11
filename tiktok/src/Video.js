import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, channel, description, song,likes, shares, messages}) {
    const [playing,setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        //if video playing
        //stop it
        //otherwise if not playing
        //play it

    }
    return (
        
        <div className="video">
            {/* <video onclick={handleVideoPress} ref={videoRef} className="video__player" url={url}></video> */}
            <iframe onclick={handleVideoPress} ref={videoRef} className="video__player"width="661" height="372" src="https://www.youtube.com/embed/ktjafK4SgWM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />

        </div>
    )
}

export default Video
