import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <div className="player-wrapper" style={{justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    
    <ReactPlayer 
    className='react-player'
     url='https://www.youtube.com/watch?v=OTDBed-9td0&t=9s'
     volume={0.5}
     muted={false}
     controls={true}
    
     />

<ReactPlayer 
    className='react-player'
     url='https://www.youtube.com/watch?v=OTDBed-9td0&t=9s'
     volume={0.5}
     muted={false}
     controls={true}
    
     />

<ReactPlayer 
    className='react-player'
     url='https://www.youtube.com/watch?v=OTDBed-9td0&t=9s'
     volume={0.5}
     muted={false}
     controls={true}
    
     />
     </div>

     

     
  );
};

export default App;