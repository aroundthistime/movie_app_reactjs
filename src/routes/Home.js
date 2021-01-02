import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
import loadingLogo from "../loading.jpg";

class Home extends React.Component{
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

export default Home;
