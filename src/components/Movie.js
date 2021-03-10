import React, { useState } from 'react'

const key = '8e6730146e2e2af30538eac364a86fc7';
const Image_Api = `https://image.tmdb.org/t/p/w1280`;
const Genre_Api = `https://api.themoviedb.org/3/genre/?api_key=${key}&language=en-US`;

const setVotClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5 && vote < 8) {
        return 'orange'
    } else {
        return 'red'
    }
}
const getGenre = (g) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [gen, setGen] = useState('');
    fetch(`https://api.themoviedb.org/3/genre/${g}?api_key=${key}&language=en-US`)
        .then(res => res.json())
        .then(data => {
            return setGen(data.name);
            // return data.name;
        })
}
const Movie = ({ title, poster_path, genre_ids, release_date, overview, vote_average }) => (
    <div className="movie">
        <div className="movie-header">
            <div className="tags">
                {getGenre(genre_ids)}
            </div>
            <img src={Image_Api + (poster_path ? poster_path : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCXo2bVWCdwuTY3O4YGs3qZEB4i5t-vuisYw&usqp=CAU')} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={setVotClass(vote_average)}>{vote_average}</span>
            </div>
            <div className="movie-hover">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    </div>
)

export default Movie;