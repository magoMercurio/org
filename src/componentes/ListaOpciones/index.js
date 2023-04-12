import './ListaOpciones.css'

const ListaOpciones = (props) => {

  /* Metodo map -> arreglo.map((equipo, index) => {
    return <option></option>
  }) */
  const equipos = [
    'Programacion',
    'Front End',
    'Data Science',
    'Devop',
    'UX y Diseño',
    'Movil',
    'Inovacion y Gestion'
  ]

  const manejarCambio = (e) => {
    console.log('cambio', e.target.value)
    props.setEquipo(e.target.value)
  }

  return <div className='lista-opciones'>
    <label>Equipos</label>
    <select value={props.valor} onChange={manejarCambio}>
      <option value="" disabled defaultValue='' hidden>Seleccionar equipo</option>
      { equipos.map((equipo, index) => {
        return <option key={index} value={equipo}>{equipo}</option>
      })}
    </select>
  </div>
}

export default ListaOpciones