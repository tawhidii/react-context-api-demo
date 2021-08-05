import React, { useContext, useEffect, useState } from 'react';
import { ExampleContext } from '../../App';
import CategoryList from '../CategoryList/CategoryList';

const Category = () => {
    const [genre] = useContext(ExampleContext)
    const [movieGenre,setGenre] = useState([])
    const moviesList = [
        {name:'Passengers',category:'sci-fi'},
        {name:'Intersteller',category:'sci-fi'},
        {name:'Fast and Furious',category:'action'},
        {name:'Iron man',category:'action'},
        {name:'Luca',category:'animated'},
        {name:'Coco',category:'animated'},
        {name:'Upside Down',category:'sci-fi'},
        {name:'SpiderMan',category:'action'},

    ]
    useEffect(()=>{
        let getMovies = moviesList.filter(mv=>mv.category.toLowerCase() === genre.toLowerCase())
        setGenre(getMovies)
    },[genre])
    return (
        <div>
            {
                movieGenre.map(movie=><CategoryList movie={movie}></CategoryList>)
            }
        </div>
    );
};

export default Category;