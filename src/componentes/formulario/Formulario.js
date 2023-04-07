import './Formulario.css'
import CampoTexto from '../CampoTexto'

const Formulario = () => {
  return <section className='formulario'>
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo='Nombre' placeholder='Ingrese nombre' />
        <CampoTexto titulo='Puesto' placeholder='Ingrese puesto'/>
        <CampoTexto titulo='Foto' placeholder='Ingresar enlace de foto' />
      </form>
    </section>
}

export default Formulario