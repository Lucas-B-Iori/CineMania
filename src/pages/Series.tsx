import { useState, useEffect } from 'react';
import Sessao from '../components/Sessao';
import { ShowType } from '../types/showType';
import API_key from '../api_key'

export default function Series() {
    const [ series, setSeries ] = useState<ShowType[]>([])

    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_key}`    
        }
      };
      
      fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
        .then(response => response.json())
        .then(response => setSeries(response.results))
        .catch(err => console.error(err));  
    }, [])
    
    return (
      <div>
        <Sessao shows={series}/>
      </div>
    )
}


