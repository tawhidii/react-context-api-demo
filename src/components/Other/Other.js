import React, { useContext } from 'react';
import { ExampleContext } from '../../App';

const Other = () => {
    const [count] = useContext(ExampleContext) 
    return (
        <div>
            <h1>this is other {count}</h1>
        </div>
    );
};

export default Other;