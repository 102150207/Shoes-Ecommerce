import React, { useState } from 'react';
import './ColorBox.css';

const randomColor = ()=>{
    const COLOR_LIST = ['deeppink', 'blue', 'yellow','green', 'black'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

const ColorBox = () => {
    
    const [color, setsColor] = useState(()=>{
        const initLocalStorage = localStorage.getItem('color-list') || 'deeppink';
        return initLocalStorage;
    })

    const handleChangeColor = () =>{
        const newColor = randomColor();
        setsColor(newColor)
        localStorage.setItem('color-list', newColor)
    }

    return (
        <div 
            className = 'box-color' 
            style = {{background : color}}
            onClick = {handleChangeColor}
        >
        </div>
    )
}

export default ColorBox
