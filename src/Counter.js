import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
