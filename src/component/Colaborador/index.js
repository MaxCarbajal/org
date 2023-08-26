import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const Colaborador = (props) => {

    const {nombre, puesto, foto, equipo, id, fav} = props.datos

    return <div className='colaborador'>
        <AiFillCloseCircle className="eliminar" onClick={() => props.eliminarColaborador(id)} />
        <div className='encabezado' style={{backgroundColor: props.colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color='red' onClick={() => props.like(id)}/> : <AiOutlineHeart onClick={() => props.like(id)}/>}
        </div>
    </div>
}

export default Colaborador