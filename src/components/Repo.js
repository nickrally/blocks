import React from "react";
import Picture from "./Picture";
import cursor from "../logo.png";
import { ITEMS } from "./Constants";
import DraggableWrapper from "./DraggableWrapper";

const Repo = () => {
  return (
    <div className="drag-drop-container">
      {ITEMS.map((item) => (
        <DraggableWrapper
          key={item.id}
          dataItem={item.src}
          dragImage={cursor}
          dropEffect="link"
        >
          <Picture src={item.src} />
        </DraggableWrapper>
      ))}
    </div>
  );
};

export default Repo;
