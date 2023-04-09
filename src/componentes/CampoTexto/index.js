import './CampoTexto.css'

const CampoTexto = (props) => {
  console.log('datos', props)
  const placeholderModificador = `${props.placeholder}...`
  return <div className='campo-texto'> 
    <label> {props.titulo} </label>
    <input placeholder= {placeholderModificador} required={props.required} />
  </div>
}

export default CampoTexto