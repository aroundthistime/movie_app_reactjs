import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({
  year, title, summary, poster, genres
}) => (
  <Link to={{
    pathname : "/movie-detail",
    state : {
      year,
      title,
      summary,
      poster,
      genres
    }
  }}>
    <div className="movies__movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
          <span className="movie__title">{title}</span>
          <span className="movie__year">({year})</span>
          <ul className="movie__genres">
            {genres.map((genre, index) => (<li className="movie__genre" key={index}>{genre}</li>))}
          </ul>
          <p className="movie__summary">{summary.length > 350 ? summary.slice(0, 350) + "..." : summary}</p>
        </div>
    </div>
  </Link>
);

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
