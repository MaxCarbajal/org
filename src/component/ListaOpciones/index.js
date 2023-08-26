import './ListaOpciones.css'

const ListaOpciones = (props) => {
    //Metodo map -> 
    // const equipos = [
    //     'Programación',
    //     'Front End',
    //     'Data Science',
    //     'Devops',
    //     'UX y Diseño',
    //     'Móvil',
    //     'Innovación y Gestión'
    // ]

    const manejarCambio = (evento) => {
        props.actualizarEquipo(evento.target.value)
    }

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value='' defaultValue='' hidden>Seleccionar equipo</option>
            {props.equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones