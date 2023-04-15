import { useState } from "react";
import './Formulario.css'
import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'

const Formulario = (props) => {

  const [nombre, setNombre] = useState('')
  const [puesto, setPuesto] = useState('')
  const [foto, setFoto] = useState('')
  const [equipo, setEquipo] = useState('')
  const [titulo, setTitulo] = useState('')
  const [color, setColor] = useState('')

  const { registrarColaborador, crearEquipo } = props

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    console.log('Manejar el envio')
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
      titulo: titulo,
      color: color
    }
    registrarColaborador(datosAEnviar)
  }

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo, colorPrimario: color})
  }

  return <section className='formulario'>
    <form onSubmit={manejarEnvio}>
      <h2>Rellena el formulario para crear el colaborador.</h2>
      <Campo 
        titulo='Nombre' 
        placeholder='Ingrese nombre' 
        required 
        valor={nombre} 
        actualizarValor={setNombre} 
      />
      <Campo
        titulo='Puesto' 
        placeholder='Ingrese puesto' 
        required
        valor={puesto}
        actualizarValor={setPuesto} 
      />
      <Campo 
        titulo='Foto' 
        placeholder='Ingresar enlace de foto' 
        required 
        valor={foto}
        actualizarValor={setFoto} 
      />
      <ListaOpciones
        valor={equipo}
        setEquipo={setEquipo}
        equipos={props.equipos}
      />
      <Boton texto='Crear' />
    </form>
    
    <form onSubmit={manejarNuevoEquipo}>
      <h2>Rellena el formulario para crear el Equipo.</h2>
      <Campo 
        titulo='Titulo' 
        placeholder='Ingrese titulo' 
        required 
        valor={titulo} 
        actualizarValor={setTitulo} 
      />
      <Campo
        titulo='Color' 
        placeholder='Ingrese el color en Hex' 
        required
        valor={color}
        actualizarValor={setColor}
        type='color'
      />
      <Boton texto='Registrar equipo' />

    </form>

    </section>
}

export default Formulario