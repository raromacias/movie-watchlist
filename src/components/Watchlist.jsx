import MovieCard from "./MovieCard";
const Watchlist = (props) => {
    const {watchList, removeMovie, }= props
     let movieDisplay = watchList.map((movie) => {
        return <MovieCard watchlist={watchList} removeMovie={removeMovie} movie={movie}/>
     })
    return (
         <div className="watchlist">
             <h1>My Watchlist</h1>
             <div className="movie-container">{movieDisplay}</div>
         </div>
    );
}

export default Watchlist;