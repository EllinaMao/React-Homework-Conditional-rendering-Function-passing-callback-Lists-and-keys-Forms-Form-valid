import React from 'react';
const Child = React.memo(({ onAction }) => {
  console.log("Child render");

  return <button onClick={onAction}>Child button</button>;
});

export default Child;