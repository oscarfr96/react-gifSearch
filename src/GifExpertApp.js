import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['Batman']);

    return (
    <div>
        <h2>Buscador de Gifs</h2>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>
        <ol>
            { 
                //Transforma cada elemento dentro de la Array
                categories.map( (category) => 
                    <GifGrid key={category} category={category}/>
                )
            }
        </ol>

    </div>
  )
}
