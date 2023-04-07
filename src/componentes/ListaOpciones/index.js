import './ListaOpciones.css'

const ListaOpciones = () => {

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

  return <div className='lista-opciones'>
    <label>Equipos</label>
    <select>
      { equipos.map((equipo, index) => {
        return <option key={index}>{equipo}</option>
      })}
    </select>
  </div>
}

export default ListaOpciones