import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'Star wars' ] );    

    // const handleAdd = (  ) => {
    //     // setCategories( [ ...categories, 'hola soy goku' ] );
    //     // el set recibe un callback y el primer argumento es el estado anterior de la constante
    //     setCategories( cats => [ ...cats, 'Hola, soy Goku!' ] );
    // };

    return (
        <>
            <h2>GifExpertApp.</h2>
            <AddCategory setCategories={ setCategories } />
            <hr></hr>


            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                        key={ category }
                        category={ category }
                        />
                    )
                }
            </ol>

        </>
    );

}

