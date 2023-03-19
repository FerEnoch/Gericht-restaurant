import React from 'react';

// images
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">
      {title}
    </p>
    <img
      src={images.spoon}
      alt="Spoon" />
  </div>
);

export default SubHeading;
