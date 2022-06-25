import { useEffect, useState } from "react";
import {FiSearch} from 'react-icons/fi';
import MovieCard from './MovieCard';




function App() {
const apiKey = 'ff614ea7';
const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}&`

const [movies , setMovies] = useState([]);
const [search, setSearch] = useState('');


const searchMovies = async(title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
   setMovies(data.Search);
}
  useEffect(() => {
  searchMovies(search);
  }, [search])





  return (
   <div className="app">
      <h1>Film Dükkanı</h1>

      <div className="search">
        <input type="text"
        placeholder="Search for Movies"
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}
        />
        <FiSearch className="search-icon" onClick={() =>searchMovies(search)} />
      </div>

        {movies?.length >0 ?
        (
          <div className="container">
             {movies?.map((movie,index) => (
              <MovieCard key={index} movie={movie} />
             ))}
          </div>
        )
        :
          (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
          )}

   </div>
  );
}

export default App;
