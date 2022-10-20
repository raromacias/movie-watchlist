import MovieCard from "./MovieCard"

const MovieScreen = (props) => {
 const {movieList, addMovie, removeMovie, watchList, setPage, page} = props
    const movieDisplay = movieList.map((movie) => {
        return <MovieCard watchList={watchList} removeMovie={removeMovie} addMovie={addMovie} movie={movie}/>
    })
    const decrement = () => {
             setPage(page-1)
    }
    const increment = () => {
           setPage(page+1)
    }
       return (
           <div className="page">
             <h1>Raro's Movie Theatre</h1>
             <h3>Add a movie to your watchlist</h3>
             <div className="btn-container">
              <button onClick={page !== 1 && decrement}>Previous</button>
              <button onClick={increment}>Next</button>
             </div>
             <div className="movie-container">{movieDisplay}</div>
           </div>
       );
}
export default MovieScreen;