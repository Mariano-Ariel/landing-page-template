// src/components/PhotoGallery.jsx
import React, { useState } from 'react';
import PhotoCard from './PhotoCard';
import Modal from './Modal';

const photos = [
  { src: '/images/photo1.jpg', alt: 'Photo 1' },
  { src: '/images/photo2.jpg', alt: 'Photo 2' },
  { src: '/images/photo3.jpg', alt: 'Photo 3' },
  // Agrega más fotos aquí
];

const PhotoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="gallery" className="photo-gallery">
      {photos.map((photo, index) => (
        <div key={index} onClick={() => openModal(photo)}>
          <PhotoCard imageSrc={photo.src} altText={photo.alt} />
        </div>
      ))}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        imageSrc={selectedImage.src} 
        altText={selectedImage.alt} 
      />
    </div>
  );
};

export default PhotoGallery;
