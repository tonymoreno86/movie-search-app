import React, {useState} from "react"
import MovieCard from "./MovieCard"

function SearchMovies() {
    
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=c92d1f1a8889b5b439469fa467d1391d&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data.results)
            setMovies(data.results)

        } catch(err) {
            console.error(err)
        }
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    console.log(movies)
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input 
                    type="text" 
                    className="input" 
                    name="query" 
                    placeholder="(i.e The Avengers)" 
                    value={query}
                    onChange={handleChange} />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => {
                    return (
                        <MovieCard data={movie} key={movie.id} />
                    )
                })}
            </div>
        </>
    )
}

export default SearchMovies