import React from 'react';
// components
import { SubHeading, MenuItem } from '../../components';
// assets
import { images, data } from '../../constants';
// css
import './SpecialMenu.css';
// custom hook
import { useObserver } from '../../constants/hooks/useObserver';


const SpecialMenu = () => {

  const [menuRef, showSection] = useObserver({
    root: null,
    threshold: 0.1
  });

  return (
    <div ref={menuRef}
      className={`app__specialMenu flex__center section__padding ${showSection ? 'section__show' : 'section__hide'}`}
      id='menu'>
      <div className="app__specialMenu-title">
        <SubHeading title='Menu that fits you palatte' />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex_center">
          <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => {
              return (
                <MenuItem
                  key={wine.title + index}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                >
                  {wine.title}
                </MenuItem>
              )
            })}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu_img" />
        </div>
        <div className="app__specialMenu-menu_cocktails flex_center">
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktail, index) => {
              return (
                <MenuItem
                  key={cocktail.title + index}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                >
                  {cocktail.title}
                </MenuItem>
              )
            })}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div >
  )
};

export default SpecialMenu;
