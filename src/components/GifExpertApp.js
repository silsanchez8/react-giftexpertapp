import React, {useState} from 'react';
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
 const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr />
            <AddCategory setCategories={setCategories}/>
            <div>
                { categories.map((category) =>   
                    <GifGrid
                        key={category}
                        category ={category}
                    />     
                )}
            </div>
        </>
    )
}

