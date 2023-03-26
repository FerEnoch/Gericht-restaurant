import React, { forwardRef } from 'react';
// images
import { images } from '../../constants';
// components
import { SubHeading } from '../../components';
// css
import './Chef.css';
// custom hook
import { useObserver } from '../../constants/hooks/useObserver';


const Chef = () => {

  const [chefRef, showSection] = useObserver({
    root: null,
    threshold: 0.1
  });

  return (
    <div ref={chefRef}
      className='app__bg app__wrapper section__padding'>
      <div className={`app__wrapper_img  app__wrapper_img-reverse ${showSection ? 'section__show' : 'section__hide'}`}>
        <img src={images.chef} alt="chef" />
      </div>
      <div className={`app__wrapper_info ${showSection ? 'section__show' : 'section__hide'}`}>
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What we believe in</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quotation marks" />
            <p className="p__opensans chef-words">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <p className="p__opensans chef-words">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  )
};

export default Chef;
