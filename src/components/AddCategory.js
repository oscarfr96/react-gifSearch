import React, { useState } from 'react'
import propTypes  from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit=(e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats]);
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
        </form>        
    </div>
  )
}

//Obligatorio un argumento en el componente
AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}