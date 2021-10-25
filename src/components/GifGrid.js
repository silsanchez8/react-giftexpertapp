import React from 'react';
import {GifGridItem}  from './GifGridItem';
//import {getGifs} from './helpers/getGif';
import {useFetchGif} from './../hooks/useFetchGif'

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGif(category);
    
    
    return (
        <>
        {loading && <p className='animate__animated animate__flash'>Loading...</p>}
        <h3>{category}</h3>
        <ol className='card-grid'>{
            images.map(({id, title, url})=>(
            <GifGridItem key={id} title={title} url={url} />
            ))
            }
        </ol> 
        </>
    )
}
