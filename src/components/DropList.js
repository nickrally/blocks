import React from "react";
import DropTarget from "./DropTarget";
import Image from "./Image";

const DropList = () => {
    const [items, setItems] = React.useState([]);

    const itemDropped = item => setItems([...items, item]);

    return (
        <DropTarget onItemDropped={itemDropped} dropEffect="link">
            <div className="drag-drop-container">
                {items.map((item, idx) => (
                    <div key={idx} className="item">
                        <Image src={item} />
                    </div>
                ))}
            </div>
        </DropTarget>
    );
};

export default DropList;
