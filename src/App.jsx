import axios from 'axios'
import React, { useState,useEffect } from 'react'
import MovieCard from './components/MovieCard'
import './App.css';
function App() {

const[movies,setMovies] = useState([])
const[term,setTerm] = useState([])
useEffect(() =>{
  axios.get('https://api.themoviedb.org/3/search/company?api_key=806223231028bc12d5ba2f0219deefbb&page=1')
  .then(({data}) => {
    setMovies(data.results)
    console.log(data.results)
  })
},)
useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=806223231028bc12d5ba2f0219deefbb&language=en-US&page=1')
  axios.get
  .then(({data}) => {
    setMovies(data.results)
    console.log(data.results)
  })
}, [])
const handleSearch = (e) => {
  e.preventDefault()
}

  return (
  <div className="App">
    <div className="search-nav">
      <div>
        <h1>
          Movies
        </h1>
      </div>
      <div>
        <form onSubmit={handleSearch}>
          <input type="text" onChange={(e)=> setTerm(e.target.value)} />
          <button>Search</button>
        </form>
      </div>
    </div>
    <div className="movies">
    {
      movies.map((movie)=>
        <MovieCard {...movie}/>
      )
    }
  </div>
  </div>
  )
}

export default App