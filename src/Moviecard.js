import React from "react";
// import Avengers from './Avengers.jpg'

class MovieCard extends React.Component {

    // removeStars = () => {
    //     if (this.state.stars <= 0) return
    //     this.setState((prevState) => {
    //         return {
    //             stars: prevState.stars - 0.5
    //         }
    //     })
    // }

    // addStars = () => {
    //     if (this.state.stars >= 5) return
    //     // form1
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5
    //     // })

    //     //form2 
    //     this.setState((prevState) => {
    //         return {
    //             stars: prevState.stars + 0.5
    //         }
    //     }, () => console.log(this.state.stars))
    // }

    // handleFav = () => {
    //     this.setState({
    //         fav: !this.state.fav
    //     })
    // }

    // handleCart = () => {
    //     this.setState({
    //         addedToCart: !this.state.addedToCart
    //     })
    // }

    render() {
        const { movies, addStars, removeStars, handleFav, handleCart } = this.props;
        const { title, plot, poster, price, rating, star, fav, addedToCart } = movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={poster} />
                    </div>
                    <div className="right">
                        <div className="title">
                            {title}
                        </div>
                        <div className="Plot">
                            {plot}
                        </div>
                        <div className="Price">
                            Rs.{price}
                        </div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img onClick={() => removeStars(movies)} className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" />

                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />

                                <img
                                    onClick={() => addStars(movies)}
                                    className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" />

                                <span>{star}</span>
                            </div>
                            {fav ? <button onClick={() => handleFav(movies)} className="unfavourite-btn">Un-favourite</button> : <button onClick={() => handleFav(movies)} className="favourite-btn">Favourite</button>}
                            <button onClick={() => handleCart(movies)} className={!addedToCart ? 'cart-btn' : 'unfavourite-btn'}>{!addedToCart ? 'Add to cart' : 'Remove from cart'}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;