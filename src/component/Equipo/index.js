import './Equipo.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {

    //Destructuracion
    const {colorPrimario, colorSecundario, titulo, id} = props.datos

    const estiloFondo = {
        backgroundColor: hexToRgba(colorPrimario, 0.2)
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <>
        {
            props.colaboradores.length > 0 && 
            <section className="equipo" style={estiloFondo}>
                <input
                    className='input-color'
                    type='color'
                    value={colorPrimario}
                    onChange={(evento) => {
                        props.actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className='colaboradores'>
                    {
                        props.colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador}
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={props.eliminarColaborador}
                        like={props.like}
                        />)
                    }
                </div>
            </section>
        }
    </>
    
}

export default Equipo