import React, { useRef, useState, useEffect } from "react";

const draggingStyle = {
  opacity: 0.25,
};

const DraggableWrapper = (props) => {
  const { dataItem, dragImage, dropEffect } = props;
  const [isDragging, setIsDragging] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    imageRef.current = null;
    if (dragImage) {
      imageRef.current = new Image();
      imageRef.current.src = dragImage;
    }
  }, [dragImage]);

  const startDrag = (ev) => {
    setIsDragging(true);
    ev.dataTransfer.setData("drag-item", dataItem);
    ev.dataTransfer.effectAllowed = dropEffect;
    if (imageRef.current) {
      ev.dataTransfer.setDragImage(imageRef.current, 0, 0);
    }
  };

  const dragEnd = () => setIsDragging(false);

  return (
    <div
      style={isDragging ? draggingStyle : {}}
      draggable
      onDragStart={startDrag}
      onDragEnd={dragEnd}
    >
      {props.children}
    </div>
  );
};

export default DraggableWrapper;
