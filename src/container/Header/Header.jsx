import React, { forwardRef } from 'react';
// components
import { SubHeading } from '../../components';
// images
import { images } from '../../constants';
// css
import './Header.css';
// custom hook
import { useObserver } from '../../constants/hooks/useObserver';


const Header = () => {

  const [headerRef, showSection] = useObserver({
    root: null,
    threshold: 0.1
  });

  return (
    <div ref={headerRef}
      className={`app__header app__wrapper section__padding ${showSection ? 'section__show' : 'section__hide'}`}
      id='home'>
      <div className="app__wrapper_info">
        <SubHeading title='Chase the new flavour' />
        <h1 className='app__header-h1'>The key to fine dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  )
};

export default Header;
