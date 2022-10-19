import MovieCard from "./MovieCard"

const MovieScreen = (props) => {
 const {movieList, addMovie, removeMovie, watchList} = props
    let movieDisplay = movieList.map((movie) => {
        return <MovieCard watchList={watchList} removeMovie={removeMovie} addMovie={addMovie} movie={movie}/>
    })
       return (
           <div className="page">
             <h1>Raro's Movie Theatre</h1>
             <h3>Add a movie to your watchlist</h3>
             <div className="movie-container">{movieDisplay}</div>
           </div>
       );
}
export default MovieScreen;