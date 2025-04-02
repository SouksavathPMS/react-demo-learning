import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(() => 0);

    const incrementHandler = () => {
        setCounter(counter + 1);
    }
    const decrementHandler = () => {
        setCounter(counter - 1);
    }
  return (
      <div>
          <h1>{counter}</h1>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
      </div>
  )
}

export default Counter