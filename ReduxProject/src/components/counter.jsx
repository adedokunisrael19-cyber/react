

import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, reset  } from "../slices/counterSlice";


const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counter.value);
    return (
        <div>
            <button onClick={()=> dispatch(increment())}>+</button>
            <h1>{count}</h1>
            <button onClick={()=> dispatch(decrement())}>-</button>

            <button onClick={()=> dispatch(reset())}> reset </button>
            </div>
    )
}

export default Counter