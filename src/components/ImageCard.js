import React from "react";
import { useDrag, useDrop } from "react-dnd";

const ImageCard = ({ image, index, moveImage, onClick }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "image",
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "image",
    hover: (item) => {
      if (item.index !== index) {
        moveImage(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      className={`w-32 h-32 border rounded overflow-hidden transition-transform transform ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
      onClick={onClick} // Open lightbox on click
    >
      <img
        src={image.src}
        alt={`img-${index}`}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
        }}
      />
    </div>
  );
};

export default ImageCard;
