import React from 'react';

// components
import SubHeading from '../SubHeading/SubHeading';
// css
import './Newsletter.css';
// custom hook
import { useObserver } from '../../constants/hooks/useObserver';


const Newsletter = () => {
  const [newsletteRef, showSection] = useObserver({
    root: null,
    threshold: 0.3
  });

  return (
    <div ref={newsletteRef}
      className={`app__newsletter ${showSection ? 'section__show' : 'section__hide'}`}>
      <div className="app__newsletter-heading">
        <SubHeading title='Newsletter' />
        <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your e-mail address" />
        <button type='button' className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}
export default Newsletter;
