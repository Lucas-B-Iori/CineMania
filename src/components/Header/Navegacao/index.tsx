import { Link } from 'react-router-dom'

interface NavegacaoProps {
    classe: string
}

export default function Navegacao({ classe }: NavegacaoProps) {
    console.log(classe)
    return (
        <div className={classe}>
            {/* <Link to='/' className='header__nav_item'>Inicio</Link> */}
            <Link to='/' className='header__nav_item'>Filmes</Link>
            <Link to='/series' className='header__nav_item'>Series</Link>
        </div>
    )
}
