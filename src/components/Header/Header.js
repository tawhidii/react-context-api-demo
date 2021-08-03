import React, { useContext } from 'react';
import { ExampleContext } from '../../App';

const Header = () => {
    const [count,setCount] = useContext(ExampleContext)
    return (
        <div>
            <h1>this is header: {count}</h1>
            <button onClick={()=> setCount(count + 1 )}>Increse</button>
        </div>
    );
};

export default Header;