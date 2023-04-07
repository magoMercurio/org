import './CampoTexto.css'

const CampoTexto = (props) => {
  const placeholderModificador = `${props.placeholder}...`
  return <div className='campo-texto'> 
    <label> {props.titulo} </label>
    <input placeholder= {placeholderModificador} type="text" />
  </div>
}

export default CampoTexto