import React, { useContext } from 'react';
import { ExampleContext } from '../../App';

const CategoryList = () => {
    const [count,seCount] = useContext(ExampleContext)
    return (
        <div>
            <h1>From categorylist: {count}</h1>
            <button onClick={()=>seCount(count + 1)}> Increase from CategoryList </button>
        </div>
    );
};
export default CategoryList;