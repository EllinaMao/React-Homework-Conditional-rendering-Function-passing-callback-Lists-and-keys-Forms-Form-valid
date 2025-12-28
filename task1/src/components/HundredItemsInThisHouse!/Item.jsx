import React, { useEffect } from 'react';
import '../../assets/css/ItemsRelations/Item.css';

function Item({ onSelect, isSelected, index }) {
    useEffect(() => {
        console.log(`Item ${index} is now ${isSelected ? 'selected' : 'inactive'}`);
    }, [isSelected, index]);

    return (
        <div onClick={() => onSelect(index)} className={`item-box ${isSelected ? 'selected' : 'inactive'}`}>
            {index}
        </div>
    );
}

export default React.memo(Item);