import React, { useRef, useState, forwardRef } from 'react';
// icons
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
// video
import { meal } from '../../constants';
// css
import './Intro.css';
// custom hook
import { useObserver } from '../../constants/hooks/useObserver';


const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const [videoRef, showSection] = useObserver({
    root: null,
    threshold: 0.3
  });
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
    <div
      ref={videoRef}
      className={`app__video ${showSection ? 'section__show' : 'section__hide'}`}>
      <video
        ref={vidRef}
        loop
        // onEnded={handleEndingVideo}
        controls={false}
        muted
      >
        <source src={meal} type='video/mp4'></source>
      </video>
      {/* {!playVideo && */}
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center"
          onClick={handleVideo}>
          {playVideo
            ? <BsPauseFill className='app__video-controls' color='#fff' />
            : <BsFillPlayFill className='app__video-controls' color='#fff' />
          }
        </div>
      </div>
      {/* } */}
    </div>
  );
};

export default Intro;
