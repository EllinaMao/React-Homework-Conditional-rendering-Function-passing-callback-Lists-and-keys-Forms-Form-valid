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

import {useState} from "react";
import "../assets/css/CounterFix.css"
import {useFadeTransition} from "../hooks/useFadeTransition";

function CounterFix() {

  const {shouldRender, isVisible, show, hide} = useFadeTransition();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    show();
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
      hide();
    }, 1000);
  };


  return (
    <div className="counterContainer">
      <p>Счётчик: {count}</p>
      <button onClick={handleClick}>+1 через 1 сек</button>
      {shouldRender && (
        <div className={`loaderContainer ${isVisible ? "loaderVisible" : ""}`}>
          <img src="/hourglass-time.gif" alt="Loading..." width="100" />
        </div>
      )}
    </div>
  );
}

export default CounterFix;
