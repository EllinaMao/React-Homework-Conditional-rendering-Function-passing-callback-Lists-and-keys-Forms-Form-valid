import React, { useState, useCallback, useEffect, useRef, use } from "react";
import Item from "./Item";
import '../../assets/css/ItemsRelations/ItemParent.css';

function ItemParent() {
    const [selectedItem, setSelectedItem] = useState(null);

    const selected = useRef(null);
    const handleSelect = useCallback((currentIndex) => {

        if (selected.current === currentIndex){
            console.log('Same item clicked:', currentIndex);
        }
        else{
            console.log('Different item clicked:', currentIndex);
        }
        setSelectedItem(currentIndex);
        selected.current = currentIndex;
    }, []);

    useEffect(() => {
        console.log('Selected item changed to:', selectedItem);
    }, [selectedItem]);

    const itemsArray = [];
    for (let i = 0; i < 100; i++) {
        const itemIndex = i + 1;
        itemsArray.push(
            <Item
                key={i}
                index={itemIndex}
                isSelected={selectedItem === itemIndex}
                onSelect={handleSelect}
            />
        );
    }


    return (
        <div className="container-item">
            {itemsArray}
        </div>
    );
}


export default ItemParent;