import { Component } from "react";
import MovieCard from "./Moviecard";

export default class MovieList extends Component {
    render() {
        const { movies, handleCart, handleFav, handleRemStars, handleIncStar } = this.props;
        return (
            <>
                {movies.map((movie, i) => <MovieCard key={i} movies={movie} addStars={handleIncStar} removeStars={handleRemStars} handleFav={handleFav} handleCart={handleCart} />)}
                {/* <MovieCard movies={this.state} /> */}
            </>
        )

    }
}