import React, { useMemo } from "react";
import Drag from "./Drag";
import Image from "./Image";
import logo from "../logo.png";
import paintings from "../images";

//const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];

const DragList = () => {
    const items = useMemo(
        () => [
            {
                id: 0,
                src: paintings.cave,
                large: paintings.caveL,
            },
            {
                id: 1,
                src: paintings.velazquez,
                large: paintings.velazquezL,
            },
            {
                id: 2,
                src: paintings.sargent,
                large: paintings.sargentL,
            },
            {
                id: 3,
                src: paintings.picasso,
                large: paintings.picassoL,
            },
            {
                id: 4,
                src: paintings.bigbrother,
                large: paintings.bigbrotherL,
            },
            {
                id: 5,
                src: paintings.bobross,
                large: paintings.bobrossL,
            },
        ],
        [],
    );

    return (
        <div className="drag-drop-container">
            {items.map(item => (
                <Drag key={item.id} dataItem={item.src} dragImage={logo} dropEffect="link">
                    <Image src={item.src} />
                </Drag>
            ))}
        </div>
    );
};

export default DragList;
