import React, { useState, useCallback } from "react";
import Child from "./Child";
export default function Parent() {
    const [count, setCount] = useState(0);

    // Теперь не создается!
    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Parent count: {count}</button>
            <Child onAction={handleClick} />
        </div>
    );
}
