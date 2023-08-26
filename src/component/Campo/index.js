// import { useState } from 'react'
import './Campo.css'

const Campo = (props)=> {
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion
    const {type = 'text'} = props

    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required}
            value={props.valor}
            // value={props.type === 'color' ? '#FFFFFF' : props.valor}
            onChange={manejarCambio}
            type={props.type}
        />
    </div>
}

export default Campo