import React,{useState} from 'react'
import { useSpring, animated } from "react-spring";

const Counter = () => {
    const [count, setCount] = useState(0);
    const backgroundAnimation = useSpring({ backgroundColor: `rgb(${count * 10}, ${count * 4}, 240)` });
    
  
    return (
      <animated.div style={backgroundAnimation} className="p-6 rounded-lg border shadow-lg flex items-center justify-center  flex-col">
        <h2 className="text-2xl">{count}</h2>
        <p className="text-gray-400">Counter</p>
        <div className="flex gap-2 mt-4 text-white">
          <button className="bg-black  px-4 py-2 rounded text-2xl active:scale-95 transition-all duration-100 outline-none" onClick={() => setCount(count + 1)}>+</button>
          <button className="bg-red-500  px-4 py-2 rounded text-3xl active:scale-95 transition-all duration-100 outline-none" onClick={() => setCount(0)}>Reset</button>
          <button className="bg-black px-4 py-2 rounded text-2xl active:scale-95 transition-all duration-100 outline-none" onClick={() => setCount(count - 1)}>-</button>
       
        </div>
      </animated.div>
    );
}

export default Counter
