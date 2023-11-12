import React from 'react'
import './item.css'

interface ItemProps {
    titulo: string,
    nota: number,
    data: string,
    imagem: string
}

export default function Item({ titulo, nota, data, imagem }: ItemProps) {
  return (
    <div className='item'>
        <img className='item__poster' src={`https://image.tmdb.org/t/p/w500${imagem}`} alt={titulo} />
        <div className='item__container'>
            <h2 className='item__container_titulo'>{titulo}</h2>
            <div className='item__container_meta'>
                <span>Data: {data}</span>
                <span>Nota: {nota}</span>
            </div>
        </div>
    </div>
  )
}
