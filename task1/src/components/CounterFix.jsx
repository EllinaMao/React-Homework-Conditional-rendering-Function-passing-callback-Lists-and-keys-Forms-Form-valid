/**
 * 
 * Есть компонент с кнопкой, которая увеличивает счётчик. Используется setTimeout внутри обработчика клика:
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={handleClick}>+1 через 1 сек</button>
    </div>
  );
}
```
count попадает в замыкание в момент клика. Если нажать кнопку несколько раз быстро, каждый setTimeout использует одно и то же старое значение
Исправить баг, из-за которого в setTimeout используется устаревшее значение состояния.
 */

import React, { useEffect, useState } from 'react';

function CounterFix() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("new count " + count);
  })
  const handleClick = () => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1
      );
      console.log("old stucked " + count);
    }, 1000);
  };

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={handleClick}>+1 через 1 сек</button>
    </div>
  );
}

export default CounterFix;  