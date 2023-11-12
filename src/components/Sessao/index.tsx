import Item from './Item';
import { Show } from '../../types/showType';
import './sessao.css'

export default function Sessao({ shows }: { shows: Show[]}) {

    return (
        <section className='sessao'>
            {shows.map(show => 
                <Item 
                    key={show.id}
                    titulo={show.title ? show.title : show.name}
                    nota={show.vote_average}
                    data={show.release_date ? show.release_date : show.first_air_date}
                    imagem={show.poster_path}
                />)}
        </section>
    )
}
