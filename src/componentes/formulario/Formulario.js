import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'

const Formulario = () => {
  return <section className='formulario'>
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo='Nombre' placeholder='Ingrese nombre' />
        <CampoTexto titulo='Puesto' placeholder='Ingrese puesto'/>
        <CampoTexto titulo='Foto' placeholder='Ingresar enlace de foto' />
        <ListaOpciones />
        <Boton texto='Crear' />
      </form>
    </section>
}

export default Formulario