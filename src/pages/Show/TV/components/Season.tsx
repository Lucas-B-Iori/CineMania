import { season } from "../../../../types/tvType"

export default function Season({ season }: { season: season | undefined}) {
  return (
    <div key={season?.id} className='tv__meta_temporadas__caixa'>
        <div>
        <span className='tv__meta_temporadas__caixa_temp'>Temporada: {season?.season_number}</span>
        <p className='tv__meta_temporadas__caixa_lancamento'>Lançada em: {season?.air_date}</p>
        <p className='tv__meta_temporadas__caixa_qtd'>Quantidade de episodios: {season?.episode_count}</p>
        <p className='tv__meta_temporadas__caixa_overview'>Resumo: {season?.overview}</p>
        </div>
        <img className='tv__meta_temporadas__caixa_img' src={`https://image.tmdb.org/t/p/w500${season?.poster_path}`} alt="" />
    </div>
  )
}
