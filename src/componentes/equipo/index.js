import Colaborador from '../Colaborador'
import './equipo.css'
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {

  //DESTRUCTURACION
  // eslint-disable-next-line no-unused-vars
  const { colorPrimario, colorSecundario, titulo, id } = props.datos
  const { colaboradores, eliminarColaborador, actualizarColor } = props
  const bgc = {
    backgroundColor: hexToRgba(colorPrimario, 0.3)
  }
  return <> 
  { 
    colaboradores.length > 0 &&  
    <section className="equipo" style={bgc} >
      <input
        type="color"
        className='input-color'
        value={hexToRgba(colorPrimario, 0.3)}
        onChange={(evento) => {
          actualizarColor(evento.target.value, id)
        }}
      
      />
      <h3 style={{ borderColor: colorPrimario }} >{ titulo }</h3>
      <div className="colaboradores">
        {
          colaboradores.map((colaborador, index) => <Colaborador 
          datos={colaborador} 
          key={index} 
          colorPrimario={colorPrimario}
          eliminarColaborador={eliminarColaborador}
          />
        )}
      </div>
    </section>
  }</>
} 

export default Equipo