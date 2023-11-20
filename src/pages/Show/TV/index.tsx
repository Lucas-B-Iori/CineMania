import { MovieType } from '../../../types/movieType'
import Episodio from './components/Episodio'
import Season from './components/Season'
import './tv.css'

export default function index({ tv }: {tv: MovieType | undefined}) {
  return (
    <div className='tv'>
      <div className='tv__images'>
        <img className='tv__images_poster' src={`https://image.tmdb.org/t/p/w500${tv?.poster_path}`} alt="" />
        <img className='tv__images_img' src={`https://image.tmdb.org/t/p/w500${tv?.backdrop_path}`} alt="" />
      </div>
      <div className="tv__meta">
        <div className="tv__meta_header">
          <h2 className="tv__meta_header__titulo">{tv?.name}</h2>
          <a href={tv?.homepage} className="tv__meta_header__link">Pagina Oficial</a>
          <span className='tv__meta_header__idioma'>Idioma Original: {tv?.original_language}</span>
          <span className='tv__meta_header__temps'>Quantidade de temporadas: {tv?.number_of_seasons}</span>
          <span className='tv__meta_header__lancamento'>Lançado em: {tv?.first_air_date}</span>
          <span className='tv__meta_header__nota'>Nota: {tv?.vote_average}</span>
        </div>
        <div className="tv__meta_overview">
          <p>{tv?.overview}</p>
        </div>
        <div className="tv__meta_generos">
          <p>Generos: </p>
          {tv?.genres.map(genre => (
            <span className='tv__meta_generos-genre' key={genre.id}>{genre.name}</span>
          ))}
        </div>
        <div className='tv__meta_temporadas'>
          {tv?.seasons.map(season => (
            <Season season={season}/>
          ))}
        </div>
        <Episodio episodio={tv?.last_episode_to_air}/>
      </div>
    </div>
  )
}
