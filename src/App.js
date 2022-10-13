import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
// 3d30bbc8

const API_URL = 'http://www.omdbapi.com?apikey=3d30bbc8';

const movie1 = {
    "Title": "The Making of 'Working Title'",
    "Year": "1992",
    "imdbID": "tt2288099",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3MjI1NzQ0NF5BMl5BanBnXkFtZTcwODg1MDI1Nw@@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s={title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

  return (
    <div className='app'>
        <h1>MovieLand</h1>
        <div className='search'>
            <input placeholder='Search for movies' value="Superman"
            onChange={() => {}} />
            <img src={SearchIcon} alt='search'  onClick={() => {}}/>
        </div>

        <div className='container  '>
            <div className='movie'>
                <div>
                    <p>{movie1.Year}</p>
                </div>
                <div>
                    <img src={movie1.Poster} alt={movie1.Title} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default App 