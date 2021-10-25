import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return(
        <li className="card animate__animated animate__fadeIn" key={id}>    
        <img src={url} alt={title} />
        <p>{title}</p>
        </li>
              
    )
}
