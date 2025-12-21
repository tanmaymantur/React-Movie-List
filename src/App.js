import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesData";


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0
    }
  }

  handleIncStar = (movie) => {

    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star >= 5) {
      return
    }

    movies[mid].star += 0.5;

    this.setState({
      movies: movies
    })
  }

  handleRemStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star <= 0) {
      return
    }
    movies[mid].star -= 0.5;

    this.setState({
      movies: movies
    })
  }

  handleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies: movies
    })
  }

  handleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].addedToCart = !movies[mid].addedToCart;

    if (movies[mid].addedToCart) {
      cartCount += 1;
    }
    else {
      cartCount -= 1;
    }

    this.setState({
      movies: movies,
      cartCount
    });

  }
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList movies={movies}
          handleCart={this.handleCart}
          handleFav={this.handleFav}
          handleRemStars={this.handleRemStars}
          handleIncStar={this.handleIncStar}

        />
      </>
    );
  }
}

export default App;
