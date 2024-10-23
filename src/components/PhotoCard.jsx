// src/components/PhotoCard.jsx
import React from 'react';

const PhotoCard = ({ imageSrc, altText }) => {
  return (
    <div className="photo-card">
      <img src={imageSrc} alt={altText} />
    </div>
  );
};

export default PhotoCard;
