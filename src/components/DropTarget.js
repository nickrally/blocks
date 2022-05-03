import React, { useState } from "react";

const insideStyle = {};

const DropTarget = (props) => {
  const { addToDroppedItems, dropEffect } = props;

  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = dropEffect;
  };

  const handleDrop = (ev) => {
    const item = ev.dataTransfer.getData("drag-item");
    if (item) {
      addToDroppedItems(item);
    }
    setIsOver(false);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ width: "100%", height: "100%", ...(isOver ? insideStyle : {}) }}
    >
      {props.children}
    </div>
  );
};

export default DropTarget;
