import React, { useRef, useState } from 'react';
// icons
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
// import video & video-poster
import { meal } from '../../constants';
import { images } from '../../constants';
// css
import './Intro.css';
// custom hook
import { useObserver } from '../../constants/hooks/useObserver';


const Intro = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [vidError, setVidError] = useState(false);
  const vidRef = useRef();

  const [videoRef, showSection] = useObserver({
    root: null,
    threshold: 0.3
  });

  const handleVideo = () => {
    setIsPlayingVideo(prevState => !prevState);
    if (isPlayingVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div ref={videoRef}
      className={`
      ${vidError ? 'app__video-error' : 'app__video'} 
      ${showSection ? 'section__show' : 'section__hide'}
      `}>
      {
        !vidError ? (
          <>
            <video
              ref={vidRef}
              loop
              controls={false}
              muted
              onError={() => setVidError(true)}
              preload='true'
            >
              <source src={meal} type='video/mp4'></source>
            </video>
            <div className="app__video-overlay flex__center">
              <div className="app__video-overlay_circle flex__center"
                onClick={handleVideo}>
                {isPlayingVideo
                  ? <BsPauseFill className='app__video-controls' color='#fff' />
                  : <BsFillPlayFill className='app__video-controls' color='#fff' />
                }
              </div>
            </div>
          </>
        ) : (
          <>
            <img src={images.mealPoster}
              alt='A couple enjoying a meal and toating' />
            <p className='p__opensans flex__center'
              style={{ textTransform: 'none', fontSize: '13px', textAlign: 'center' }}>
              Lo siento, este video no se puede reproducir en su dispositivo.
              <br />
              Por favor intente con otro dispositivo.
            </p>
          </>
        )
      }
    </div >
  );
};

export default Intro;
