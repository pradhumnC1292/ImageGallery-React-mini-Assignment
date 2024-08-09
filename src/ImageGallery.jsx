import React, { useState, useEffect } from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const fetchRandomImages = async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=5"
    );
    const data = await response.json();
    setImages(data);
    setSelectedImage(data[0]);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-gallery">
      <h1>Image Gallery</h1>
      <p>Click on an image!</p>
      <div className="image-row">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt="Random Cat"
            className="thumbnail"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="selected-image">
          <h2>Selected Image</h2>
          <img src={selectedImage.url} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
