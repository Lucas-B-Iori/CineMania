import { useEffect, useState } from 'react'
import API_key from '../api_key'
import Header from '../components/Header';
import Sessao from '../components/Sessao';
import { Show } from '../types/showType';

export default function App() {
	
	const [ shows, setShows ] = useState<Show[]>([])

    useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${API_key}`
			}
		};
		
		fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
			.then(response => response.json())
			.then(response => setShows(response.results))
			.catch(err => console.error(err));
	}, [])

  return (
    <div>
		<Header />
		<Sessao shows={shows}/>
	</div>
  )
}
