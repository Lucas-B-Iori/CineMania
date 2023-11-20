import { season } from "../../../../types/tvType"

export default function Season({ season }: { season: season | undefined}) {
  return (
    <div key={season?.id} className='tv__meta_temporadas__caixa'>
        <div>
        <span className='tv__meta_temporadas__caixa_temp'>Season: {season?.season_number}</span>
        <p className='tv__meta_temporadas__caixa_lancamento'>Release Date: {season?.air_date}</p>
        <p className='tv__meta_temporadas__caixa_qtd'>Number of Episodes: {season?.episode_count}</p>
        <p className='tv__meta_temporadas__caixa_overview'>Overview: {season?.overview}</p>
        </div>
        <img className='tv__meta_temporadas__caixa_img' src={`https://image.tmdb.org/t/p/w500${season?.poster_path}`} alt="" />
    </div>
  )
}
