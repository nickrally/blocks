import React, { useState } from "react";
import DropTarget from "./DropTarget";
import Picture from "./Picture";

const Node = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const addToDroppedItems = (item) => setDroppedItems([...droppedItems, item]);
  return (
    <DropTarget addToDroppedItems={addToDroppedItems} dropEffect="link">
      <div className="drag-drop-container">
        {droppedItems.map((item, idx) => (
          <div key={idx} className="item">
            <Picture src={item} />
          </div>
        ))}
      </div>
    </DropTarget>
  );
};

export default Node;
