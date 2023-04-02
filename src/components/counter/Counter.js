import { inc, dec, reset } from "../../redux/actions/counterAction";
import "./Counter.scss";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter);
  const counter = useSelector((state) => state.counterReducer.counter);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{counter}</h1>
      <div>
        <button
          // onClick={() => counter && dispatch({ type: "DECREASE" })}
          onClick={() => counter && dispatch(dec())}
          className="counter-button negative"
        >
          decrease
        </button>
        <button
          // onClick={() => dispatch({ type: "RESET" })}
          onClick={() => dispatch(reset())}
          className="counter-button zero"
        >
          reset
        </button>
        <button
          // onClick={() => dispatch({ type: "INCREASE" })}
          onClick={() => dispatch(inc())}
          className="counter-button positive"
        >
          increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
