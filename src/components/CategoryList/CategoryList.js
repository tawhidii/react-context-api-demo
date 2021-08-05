import React from 'react';


const CategoryList = (props) => {
    const {name} = props.movie
    return (
        <div>
            <h1>From categorylist: {name}</h1>
        </div>
    );
};
export default CategoryList;