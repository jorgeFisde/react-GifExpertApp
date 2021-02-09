import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data, loading } = useFetchGifs( category );

    // Solo se ejecuta la primera vez que el componente es renderizado
    // useEffect( () => { 
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ] );

    return (
        <div className="card-grid ">
            <h2> {category} </h2>

            { loading && <p>Cargando...</p> }

            <ol>
                {
                    data.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />  
                    ))
                }
            </ol>
        </div>
    )
}
