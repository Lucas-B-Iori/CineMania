import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import API_key from "../../api_key"
import { ShowType } from "../../types/showType"
import { MovieType } from "../../types/movieType"
import Movie from './Movie'
import TV from './TV'

interface ShowProps {
    type: 'all' | 'movie' | 'tv'
}

export default function Show({ type }: ShowProps) {
    const {id} = useParams()
    let mediaType: string

    const [ shows, setShows ] = useState<ShowType[]>([])
    const [ producao, setProducao ] = useState<MovieType>()

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


    if (type === 'all') {
        const showEncontrado = shows.find((show) => show.id === Number(id))
        if (!showEncontrado) {
            mediaType = 'movie'
        } else {
            mediaType = showEncontrado.media_type
        }
    } else {
        mediaType = type
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${API_key}`
            }
          };
          
          fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => setProducao(response))
            .catch(err => console.error(err));
    }, [mediaType])
    

    return (
        <div>
            {mediaType === 'movie' ? <Movie movie={producao}/> : <TV tv={producao}/>}
        </div>
    )
}
