import { useState } from 'react'
import './App.css'
import Header from './componentes/Header/Header'
import Formulario from './componentes/formulario/Formulario.js'
import MiOrg from './componentes/MiOrg'
import Equipo from './componentes/equipo'
import Footer from './componentes/Footer'


function App() {
  
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [colaboradores, setColaboradores] = useState([]);

  //Ternario ---> condicion ? se muestra : no se muestra

  const cambiarMostrarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  //Resgistrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log('nuevo colaborador', colaborador)
    //spread operator
    setColaboradores([...colaboradores, colaborador ])
  }

  //Lista de Equipos
  const equipos = [
    {
      titulo:'Programacion',
      colorPrimario:'#57c278',
      colorSecundario:'#d9f7e9'
    },
    {
      titulo:'Front End',
      colorPrimario:'#82cffa',
      colorSecundario:'#e8f8ff'
    },
    {
      titulo:'data Science',
      colorPrimario:'#a6d157',
      colorSecundario:'#f0f8e2'
    },
    {
      titulo:'Devops',
      colorPrimario:'#e06b69',
      colorSecundario:'#fde7e8'
    },
    {
      titulo:'Ux y Diseño',
      colorPrimario:'#db6ebf',
      colorSecundario:'#fae9f5'
    },
    {
      titulo:'Movil',
      colorPrimario:'#ffba05',
      colorSecundario:'#fff5d9'
    },
    {
      titulo:'Inovacion y Gestion',
      colorPrimario:'#ff8a29',
      colorSecundario:'#ffeedf'
    }
  ]

  return (
    
    <div className="App">
      <Header />
    {/*   {mostrarFormulario === true ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      /> 
      }
      
      <MiOrg cambiarMostrarFormulario={cambiarMostrarFormulario} />
      
      {
        equipos.map((equipo) => {
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
