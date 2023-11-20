import { episode } from "../../../../types/tvType"

export default function Episodio({ episodio }: {episodio: episode | undefined}) {
  return (
    <div className='tv__meta_episodio'>
        <h3 className='tv__meta_episodio__titulo'>{episodio?.name}</h3>
        <span className='tv__meta_episodio__lancamento'>Release Date: {episodio?.air_date}</span>
        <span className='tv__meta_episodio__nota'>Rating: {episodio?.vote_average}</span>
        <span className='tv__meta_episodio__duracao'>Runtime: {episodio?.runtime} min</span>
        <p className='tv__meta_episodio__resumo'>Overview: {episodio?.overview}</p>
    </div>
  )
}
