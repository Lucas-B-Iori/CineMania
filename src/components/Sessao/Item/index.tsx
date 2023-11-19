import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

interface ItemProps {
    titulo: string,
    nota: number,
    data: string,
    imagem: string,
    id: number
}

export default function Item({ titulo, nota, data, imagem, id }: ItemProps) {
  return (
    <Link to={`show/${id}`} className='item'>
      <div className='card'>
        <img className='item__poster' src={`https://image.tmdb.org/t/p/w500${imagem}`} alt={titulo} />
        <div className='item__container'>
            <h2 className='item__container_titulo'>{titulo}</h2>
            <div className='item__container_meta'>
                <span>Data: {data}</span>
                <span>Nota: {nota}</span>
            </div>
        </div>
      </div>
    </Link>
  )
}
