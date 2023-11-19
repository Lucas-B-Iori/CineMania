import { useState, useEffect } from 'react';
import Sessao from '../components/Sessao';
import { ShowType } from '../types/showType';
import API_key from '../api_key'

export default function Filmes() {
    const [ filmes, setFilmes ] = useState<ShowType[]>([])

    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_key}`
        }
      };
      
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(err => console.error(err));
    
    }, [])
    
    return (
      <div>
        <Sessao shows={filmes}/>
      </div>
    )
}
