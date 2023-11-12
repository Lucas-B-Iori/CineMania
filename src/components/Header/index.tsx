import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import './header.css'
import Pesquisa from './Pesquisa'
import Navegacao from './Navegacao'

export default function Header() {
    const [ menuAberto , setMenuAberto ] = useState(false)
    const [ barraPesquisa, setBarraPesquisa ] = useState(false)
    const [ classeMenu, setClasseMenu ] = useState("header__nav")
    const [ classePesquisa, setClassePesquisa ] = useState("header__pesquisa")

    function alteraEstado(state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>) {
        setState(!state)
    }

    function mudaEstado(state: boolean) {
        if (state) {
            setClassePesquisa("header__pesquisa")
        } else {
            setClassePesquisa("header__pesquisa-responsivo__input")
        }
    }

    function abreMenu() {
        alteraEstado(menuAberto, setMenuAberto)
        setClasseMenu("header__nav-responsivo")
        setBarraPesquisa(false)
        setClassePesquisa("header__pesquisa")
    }

    function fechaMenu() {
        alteraEstado(menuAberto, setMenuAberto)
        setClasseMenu("header__nav")
    }

    function mudaBarraPesquisa() {
        alteraEstado(barraPesquisa, setBarraPesquisa)
        setMenuAberto(false)
        setClasseMenu("header__nav")
        mudaEstado(barraPesquisa)
    }

    return (
        <header>
            <div className='header'>    
                <div className='header__menu'>
                    {!menuAberto 
                        ? <FiMenu size={25} onClick={() => abreMenu()}/>
                        : <IoMdClose size={25} color="#fff" onClick={() => fechaMenu()}/>
                        }
                    <Navegacao classe={classeMenu} />
                </div>

                <Navegacao classe={'header__nav'}/>

                <div className='header__logo'>
                    <h1 className='header__logo_titulo'>
                        <a href="/">
                            <span>Cine</span>Mania
                        </a>
                    </h1>
                </div>
                
                <Pesquisa classe={"header__pesquisa"}/>

                <div className='header__pesquisa-responsivo'>
                    <button>
                        <BsSearch 
                            className="header__pesquisa-responsivo__icone" 
                            size={25} 
                            onClick={() => mudaBarraPesquisa()}
                            />
                    </button>
                </div>
            </div>
            <div className='pesquisa-responsivo'>
                <Pesquisa classe={classePesquisa}/>
            </div>

        </header>
    )
}
