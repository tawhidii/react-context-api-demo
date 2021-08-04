import React, { useContext } from 'react';
import { ExampleContext } from '../../App';

const Other = () => {
    const [count,setCount] = useContext(ExampleContext) 
    return (
        <div>
            <h1>this is other {count}</h1>
            <button onClick={()=> setCount(count + 1)}>From Other </button>
        </div>
    );
};

export default Other;