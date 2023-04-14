import Colaborador from '../Colaborador'
import './equipo.css'

const Equipo = (props) => {

  //DESTRUCTURACION
  const { colorPrimario, colorSecundario, titulo } = props.datos
  const { colaboradores, eliminarColaborador } = props
  const bgc = {
    backgroundColor: colorSecundario
  }
  console.log(colaboradores.length > 0)
  
  return <> 
  { 
    colaboradores.length > 0 &&  
    <section className="equipo" style={bgc} >
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