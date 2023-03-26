import React, { forwardRef, useRef } from 'react';
// components
import { SubHeading } from '../../components';
// assets
import { images } from '../../constants';
// icons
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
// css
import './Gallery.css';
// custom hook
import { useObserver } from '../../constants/hooks/useObserver';



const Gallery = () => {

  const scrollRef = useRef();
  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ]

  const [galleryRef, showSection] = useObserver({
    root: null,
    threshold: 0.1
  });

  const scroll = direction => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div ref={galleryRef}
      className={`app__gallery flex__center ${showSection ? 'section__show' : 'section__hide'}`}>
      <div className="app__gallery-content">
        <SubHeading title='Instagram' />
        <h1 className="headtext__cormorant">Photo gallery</h1>
        <p className="p__opensans" style={{ color: '#AAA' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {
            galleryImages.map((image, index) => {
              return (
                <div className="app__gallery-images_card flex__center" key={`gallery_image-${index}`}>
                  <img src={image} alt="gallery_image" />
                  <BsInstagram className='gallery__image-icon' />
                </div>
              )
            })
          }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div >
  );
};

export default Gallery;
