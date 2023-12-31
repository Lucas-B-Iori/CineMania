import { MovieType } from "../../../types/movieType"
import './movie.css'

export default function index({ movie }: {movie: MovieType | undefined}) {
  return (
    <div className="movie">
        <div className="movie__images">
            <img className="movie__images_poster" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
            <img className="movie__images_img" src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt="" />
        </div>
        <div className="movie__meta">
            <div className="movie__meta_header">
                <h2 className="movie__meta_header__titulo">{movie?.original_title}</h2>
                <a className="movie__meta_header__link" href={movie?.homepage}>Homepage</a>
                <span className="movie__meta_header__idioma">Original Language: {movie?.original_language}</span>
                <span className="movie__meta_header__duracao">Runtime: {movie?.runtime} min</span>
                <span className="movie__meta_header__lancamento">Release date: {movie?.release_date}</span>
                <span className="movie__meta_header__nota">Rating: {movie?.vote_average}</span>  
            </div>
            <div className="movie__meta_overview">
                <p>{movie?.overview}</p>
            </div>
            <div className="movie__meta_generos">
                <p>Genres: </p>
                {movie?.genres.map(genre => (
                    <span className="movie__meta_generos-genre" key={genre.id}>{genre.name}</span>
                ))}
            </div>
            <div className="movie__meta_industrias">
                <p>Production Companies: </p>
                <div className="movie__meta_industrias-div">
                    {movie?.production_companies.map(companie => (
                        <div className="movie__meta_industrias-companie" key={companie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${companie.logo_path}`} alt={companie.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
