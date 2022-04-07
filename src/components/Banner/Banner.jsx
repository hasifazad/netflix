import Axios from '../../Axios'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../Constants'
import { imageUrl500 } from '../../Constants'
import './Banner.css'

function Banner() {

    const [movies, setMovies] = useState()

    useEffect(() => {
        const r = Math.floor(Math.random() * 10)
        console.log(r)
        Axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
            console.log(response.data.results[r])
            setMovies(response.data.results[r])
        })
    }, [])
    return (
        <div className='outer'>
            <img className='image' src={movies ? imageUrl500 + `${movies.backdrop_path}` : ''} alt="" />
            <div className='details'>
                <h1 className='title'>{movies ? movies.title : ''}</h1>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
                <p className='overview'>{movies ? movies.overview : ''}</p>
                <h3>&#9733; Rating {movies ? movies.vote_average : ''}</h3>
            </div>
        </div>
    )
}

export default Banner;
//style={{backgroundImage:`url(${movies?imageUrl+movies.backdrop_path:''})`}}