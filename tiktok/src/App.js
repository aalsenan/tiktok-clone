
import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import axios from "./axios";

function App() {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data)

      return response;
    }
    fetchPosts();
  },[])

  console.log(videos)
  return (
    <div className="app">
      <div className="app__videos">
      {videos.map(({url, channel, description, song, likes, messages, shares}) => {
          <Video 
          url ={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
          />
        })}
        <Video 
        url="https://www.youtube.com/embed/ktjafK4SgWM"
        channel="senan89"
        description="MERN stack project"
        song="99 probs but React aint one"
        likes={123}
        messages={456}
        shares={789}
        />
        <Video 
        url="https://www.youtube.com/embed/ktjafK4SgWM"
        channel="senan89"
        description="MERN stack project"
        song="99 probs but React aint one"
        likes={123}
        messages={456}
        shares={789}
        />
      </div>
      
      
    </div>
  );
}

export default App;
