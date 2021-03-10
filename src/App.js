import React, { useEffect, useState } from "react";
import Movie from './components/Movie'
const { MOVIE_DB_API_KEY } = process.env;

const key = process.env.REACT_APP_MOVIE_API_KEY;
const Feature_Api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`
const Search_Api = `https://api.themoviedb.org/3/search/movie?&api_key=${key}&query=`


function App() {
    console.log(key)
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch(Feature_Api)
            .then((res) => res.json())
            .then(data => {
                setMovies(data.results)
            });
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm) {
            fetch(Search_Api + searchTerm)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.results)
                });
            setSearchTerm('')
        }

    };
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        console.log(e.target.value)
    };
    return (
        <div className="main">
            <header>
                <form onSubmit={handleSearch}>
                    <input type="text" onChange={handleChange} value={searchTerm} className="search" placeholder="Search here..." />
                </form>
            </header>
            <div className="paginate">
                <a className="page" href="#">&laquo;</a>
                <a href="#" className="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a className="page" href="#">&raquo;</a>
            </div>
            <div className="container">
                {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
            <div className="paginate">
                <a className="page" href="#">&laquo;</a>
                <a href="#" className="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a className="page" href="#">&raquo;</a>
            </div>
        </div>
    );
}
export default App;
