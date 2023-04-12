import './equipo.css'

const Equipo = (props) => {

  //DESTRUCTURACION
  const { colorPrimario, colorSecundario, titulo } = props.datos

  const bgc = {
    backgroundColor: colorSecundario
  }
  
  return <section className="equipo" style={bgc} >
      <h3 style={{ borderColor: colorPrimario }} >{ titulo }</h3>
      <div className="colaboradores">

      </div>
    </section>
}

export default Equipo