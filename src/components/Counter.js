 
import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { countSlice } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
 const counter = useSelector(state=> state.counter.counter)
 const show = useSelector(state=> state.counter.showCounter)


  const toggleCounterHandler = () => {
    dispatch(countSlice.toggle())
  };

  const incrementHandler = ()=>{
    dispatch(countSlice.increment())
  }
  const increaseHandler = ()=>{
    dispatch(countSlice.increaseby5(5))
  }
  const decrementHandler = ()=>{
    dispatch(countSlice.decrement())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
