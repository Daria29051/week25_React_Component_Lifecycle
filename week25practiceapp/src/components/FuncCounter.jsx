import React, {useState} from 'react';

export default function FuncCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
  setCount(count+1);
  }

  return (
    <button className="funcCounterButton" onClick={handleClick}>{count}</button>
  )
}
