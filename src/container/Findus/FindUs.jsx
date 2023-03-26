import React, { forwardRef } from 'react';
// components
import { SubHeading } from '../../components';
// assets
import { images } from '../../constants';
// custom hook
import { useObserver } from '../../constants/hooks/useObserver';


const FindUs = () => {
  const [findusRef, showSection] = useObserver({
    root: null,
    threshold: 0.1
  });

  return (
    <div ref={findusRef}
      className='app__bg app__wrapper section__padding'
      id='contact'>
      <div className={`app__wrapper_info ${showSection ? 'section__show' : 'section__hide'}`}>
        <SubHeading title='Contact' />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
          Find us
        </h1>
        <div className='app__wrapper-content'>
          <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <p className="p__cormorant" style={{ color: '#DCCC97', margin: '2rem 0' }}>Opening hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type='button' className='custom__button' style={{ marginTop: '2rem' }}> Visit us</button>
      </div>
      <div className={`app__wrapper_img ${showSection ? 'section__show' : 'section__hide'}`}>
        <img src={images.findus} alt="find-us" />
      </div>
    </div>
  )
};

export default FindUs;
