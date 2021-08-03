import React, { useContext } from 'react';
import { ExampleContext } from '../../App';
import CategoryList from '../CategoryList/CategoryList';

const Category = () => {
    const count = useContext(ExampleContext)
    return (
        <div>
            <h1>this is from category: {count}</h1>
            <CategoryList></CategoryList>
        </div>
    );
};

export default Category;