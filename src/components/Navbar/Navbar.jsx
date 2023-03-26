import React, { useEffect, useState } from 'react';
// icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
// images
import images from '../../constants/images';
// css
import './Navbar.css';


const Navbar = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);
  const [showNavbar, setShowNavbar] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setShowNavbar(prevScrollPosition > currentScrollPosition);
      setPrevScrollPosition(currentScrollPosition);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition])

  return (
    <nav className={`app__navbar ${showNavbar ? 'navbar__show' : 'navbar__hide'}`}>
      <div className='app__navbar-logo'>
        <img src={images.gericht}
          alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Log in / Registration</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          className='overlay__open'
          onClick={() => setToggleMenu(true)} />
        {toggleMenu &&
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen-links'>
              <li className='p__opensans'>
                <a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className='p__opensans'>
                <a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li className='p__opensans'>
                <a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li className='p__opensans'>
                <a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li className='p__opensans'>
                <a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        }
      </div>
    </nav >
  )
};

export default Navbar;