import { episode } from "../../../../types/tvType"

export default function Episodio({ episodio }: {episodio: episode | undefined}) {
  return (
    <div className='tv__meta_episodio'>
        <h3 className='tv__meta_episodio__titulo'>{episodio?.name}</h3>
        <span className='tv__meta_episodio__lancamento'>Lançado em: {episodio?.air_date}</span>
        <span className='tv__meta_episodio__nota'>Nota: {episodio?.vote_average}</span>
        <span className='tv__meta_episodio__duracao'>Duração: {episodio?.runtime} min</span>
        <p className='tv__meta_episodio__resumo'>Resumo: {episodio?.overview}</p>
    </div>
  )
}
