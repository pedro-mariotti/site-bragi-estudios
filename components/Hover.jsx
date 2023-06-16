/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const HoverableImage = ({ src, alt, width, height }) => {
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    const handleMouseOut = () => {
      setIsHovered(false);
    };
  
    return (
      <img
        src={isHovered ? src.hover : src.default}
        alt={alt}
        width={width}
        height={height}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    );
  };

export default HoverableImage;