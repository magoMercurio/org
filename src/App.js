import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import Header from './componentes/Header/Header'
import Formulario from './componentes/formulario/Formulario.js'
import MiOrg from './componentes/MiOrg'
import Equipo from './componentes/equipo'
import Footer from './componentes/Footer'


function App() {
  
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      "equipo": "Front End",
      "nombre": "Raul",
      "puesto": "Web Dev",
      "foto": "https://github.com/magoMercurio.png"
    },
    { 
      id: uuidv4(),
      "equipo": "Front End", 
      "foto": "https://github.com/harlandlohora.png",
      "nombre": "Harland Lohora", 
      "puesto": "Instructor"
    }, 
    {
      id: uuidv4(),
      "equipo": "Programacion", 
      "foto": "https://github.com/genesysaluralatam.png",
      "nombre": "Genesys Rondon",
      "puesto": "Desarrolladora de software e instructora"
    },
    {
      id: uuidv4(),
      "equipo": "UX y Diseño", 
      "foto": "https://github.com/JeanmarieAluraLatam.png", 
      "nombre": "Jeanmarie Quijada", 
      "puesto": "Instructora en Alura Latam"
    },
    {
      id: uuidv4(),
      "equipo": "Programacion", 
      "foto": "https://github.com/christianpva.png", 
      "nombre": "Christian Velasco", 
      "puesto": "Head de Alura e Instructor"
    },
    {
      id: uuidv4(),
      "equipo": "Innovacion y Gestión", 
      "foto": "https://github.com/JoseDarioGonzalezCha.png", 
      "nombre": "Jose Gonzalez",
      "puesto": "Dev FullStack"
    }


]);

const [equipos, setEquipos] = useState([
  {
    id: uuidv4(),
    titulo:'Programacion',
    colorPrimario:'#57c278',
    colorSecundario:'#d9f7e9'
  },
  {
    id: uuidv4(),
    titulo:'Front End',
    colorPrimario:'#82cffa',
    colorSecundario:'#e8f8ff'
  },
  {
    id: uuidv4(),
    titulo:'data Science',
    colorPrimario:'#a6d157',
    colorSecundario:'#f0f8e2'
  },
  {
    id: uuidv4(),
    titulo:'Devops',
    colorPrimario:'#e06b69',
    colorSecundario:'#fde7e8'
  },
  {
    id: uuidv4(),
    titulo:'Ux y Diseño',
    colorPrimario:'#db6ebf',
    colorSecundario:'#fae9f5'
  },
  {
    id: uuidv4(),
    titulo:'Movil',
    colorPrimario:'#ffba05',
    colorSecundario:'#fff5d9'
  },
  {
    id: uuidv4(),
    titulo:'Inovacion y Gestion',
    colorPrimario:'#ff8a29',
    colorSecundario:'#ffeedf'
  }
]);


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

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador', id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log('Actualizar: ', color, id )
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    setEquipos(equiposActualizados)
  }

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
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}

          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
