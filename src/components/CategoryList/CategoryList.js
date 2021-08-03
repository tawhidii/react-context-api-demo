import React, { useContext } from 'react';
import { ExampleContext } from '../../App';

const CategoryList = () => {
    const count = useContext(ExampleContext)
    return (
        <div>
            <h1>From categorylist : {count}</h1>
        </div>
    );
};
export default CategoryList;