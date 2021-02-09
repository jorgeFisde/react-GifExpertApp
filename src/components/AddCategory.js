import React, { useState } from 'react'
import Proptypes from 'prop-types';


export const AddCategory =  ( { setCategories } ) => {
    
    const [inputValue, setinputValue] = useState('');

    const handleInputValue = ( e ) => {
        setinputValue( e.target.value )
        
    }

    const handleOnSubmit = ( e ) => {

        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            console.log(inputValue);
            setCategories(cats => [ inputValue, ... cats, ]);
            setinputValue('');
        }

    }

    return (
        <form onSubmit={ handleOnSubmit }>
            <input
                type= "text"
                value={ inputValue }
                onChange={ handleInputValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}