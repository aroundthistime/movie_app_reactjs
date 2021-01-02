import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
import loadingLogo from "./loading.jpg";

class App extends React.Component{
  state = {
    isLoading : true
  };
  getMovies = async() => {
    const {
      data : {
        data : {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=raiting");
    this.setState({movies, isLoading : false});
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {
      isLoading, movies
    } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <img className="loader__logo" src={loadingLogo} alt="Loading"></img>
            <p className="loader__text">Loading...</p>
          </div>
        ) : (
          <div className="movies">
            
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }
}

export default App;
