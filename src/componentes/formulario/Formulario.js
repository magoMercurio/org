import { useState } from "react";
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'

const Formulario = (props) => {

  const [nombre, setNombre] = useState('');
  const [puesto, setPuesto] = useState('');
  const [foto, setFoto] = useState('');
  const [equipo, setEquipo] = useState('');

  const { registrarColaborador } = props

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    console.log('Manejar el envio')
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo
    }
    console.log(datosAEnviar)
    registrarColaborador(datosAEnviar)
  }

  return <section className='formulario'>
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto 
          titulo='Nombre' 
          placeholder='Ingrese nombre' 
          required 
          valor={nombre} 
          actualizarValor={setNombre} 
        />
        <CampoTexto
          titulo='Puesto' 
          placeholder='Ingrese puesto' 
          required
          valor={puesto}
          actualizarValor={setPuesto} 

          />
        <CampoTexto 
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
    </section>
}

export default Formulario