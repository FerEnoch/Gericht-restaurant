import React, { useRef, useState } from 'react';
// icons
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
// video
import { meal } from '../../constants';
// css
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo(prevState => !prevState);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  /**
   * The commented parts were to try a diff. video
   * handling, with the overlay dissapearing when playing.
   */

  // const handleEndingVideo = evt => {
  //   setPlayVideo(false);
  // }

  return (
    <div className='app__video'>
      <video
        ref={vidRef}
        src={meal}
        type='video/mp4'
        loop
        // onEnded={handleEndingVideo}
        controls={false}
        muted
      >
      </video>
      {/* {!playVideo && */}
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center"
          onClick={handleVideo}>
          {playVideo
            ? <BsPauseFill color='#fff' fontSize={30} />
            : <BsFillPlayFill color='#fff' fontSize={30} />
          }
        </div>
      </div>
      {/* } */}
    </div>
  );
}
export default Intro;
