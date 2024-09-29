import React, { useState, useEffect } from "react";
import update from "immutability-helper";
import ImageCard from "./ImageCard";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

const defaultImages = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
];

const Gallery = () => {
  const [images, setImages] = useState(() => {
    const savedImages = localStorage.getItem("imageOrder");
    return savedImages ? JSON.parse(savedImages) : defaultImages;
  });
  const [savedImages, setSavedImages] = useState(images);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("imageOrder", JSON.stringify(images));
  }, [images]);

  const moveImage = (dragIndex, hoverIndex) => {
    const draggedImage = images[dragIndex];
    setImages(
      update(images, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedImage],
        ],
      })
    );
  };

  const handleSave = () => {
    setSavedImages(images);
    localStorage.setItem("imageOrder", JSON.stringify(images));
  };

  const handleRevert = () => {
    setImages(savedImages);
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {images.map((image, index) => (
          <ImageCard
            key={image.id}
            index={index}
            image={image}
            moveImage={moveImage}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      <div className="space-x-4">
        <button
          onClick={handleRevert}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Revert Changes
        </button>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Save New Order
        </button>
      </div>

      {selectedImageIndex !== null && (
        <Lightbox
          mainSrc={images[selectedImageIndex].src}
          nextSrc={images[(selectedImageIndex + 1) % images.length].src}
          prevSrc={
            images[(selectedImageIndex + images.length - 1) % images.length].src
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setSelectedImageIndex(
              (selectedImageIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setSelectedImageIndex((selectedImageIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;
