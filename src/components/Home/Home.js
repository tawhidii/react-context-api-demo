import React, { useContext } from 'react';
import { ExampleContext } from '../../App';
import Category from '../Category/Category';

const Home = () => {
    const count = useContext(ExampleContext)
    return (
        <div>
            <h1>this is home: {count}</h1>
            <Category></Category>
        </div>
    );
};

export default Home;