import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

interface PesquisaProps {
    classe: string
}

export default function Pesquisa({ classe }: PesquisaProps) {
    const [ pesquisa, setPesquisa ] = useState("")


    return (
        <div className={classe}>
            <input 
                className='header__pesquisa_input' 
                type="text" 
                placeholder='O que procura?'
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
            />
            <button className='header__pesquisa_botao'>
                <BsSearch />
            </button>
        </div>
    )
}
