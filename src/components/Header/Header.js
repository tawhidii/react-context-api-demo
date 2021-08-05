import React, { useContext } from 'react';
import { ExampleContext } from '../../App';

const Header = () => {
    const [count,setCount] = useContext(ExampleContext)
    return (
        <div>
            <h1>this is header: {count}</h1>
            <button onClick={()=> setCount('Sci-fi')}>Sci-fi</button>
            <button onClick={()=> setCount('Action')}>Action</button>
            <button onClick={()=> setCount('Animated')}>Animated</button>
        </div>
    );
};

export default Header;