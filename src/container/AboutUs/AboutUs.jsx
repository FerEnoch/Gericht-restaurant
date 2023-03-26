import React from 'react';
// images
import { images } from '../../constants';
// css
import './AboutUs.css';
// custom hook
import { useObserver } from '../../constants/hooks/useObserver';


const AboutUs = () => {

  const [aboutusRef, showSection] = useObserver({
    root: null,
    threshold: 0.1
  });

  return (
    <div ref={aboutusRef}
      className='app__aboutus app__bg flex__center section__padding'
      id='about'>
      <div className="app__aboutus-overlay">
        <img src={images.G} alt="G letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className={`app__aboutus-content_about ${showSection ? 'section__show' : 'section__hide'}`}>
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon_img' />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
        <div className={`app__aboutus-content_knife ${showSection ? 'section__show' : 'section__hide'}`}>
          <img src={images.knife} alt="about_knife" />
        </div>
        <div className={`app__aboutus-content_history ${showSection ? 'section__show' : 'section__hide'}`}>
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon_img' />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
};

export default AboutUs;
