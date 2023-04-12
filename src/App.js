import { useState } from 'react'
import './App.css'
import Header from './componentes/Header/Header'
import Formulario from './componentes/formulario/Formulario.js'
import MiOrg from './componentes/MiOrg'


function App() {
  
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  //Ternario ---> condicion ? se muestra : no se muestra

  const cambiarMostrarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  return (
    
    <div className="App">
      <Header />
    {/*   {mostrarFormulario === true ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario /> }
      
      <MiOrg cambiarMostrarFormulario={cambiarMostrarFormulario} />
    </div>
  );
}

export default App;
