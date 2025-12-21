import MovieCard from "./Moviecard";

export default function MovieList(props) {
    const { movies, handleCart, handleFav, handleRemStars, handleIncStar } = props;
    return (
        <>
            {movies.map((movie, i) => <MovieCard key={i} movies={movie} addStars={handleIncStar} removeStars={handleRemStars} handleFav={handleFav} handleCart={handleCart} />)}
        </>
    )

}