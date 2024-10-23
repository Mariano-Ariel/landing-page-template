// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt={altText} className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
