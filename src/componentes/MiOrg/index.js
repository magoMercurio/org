import { useState } from 'react'
import './MiOrg.css'

const MiOrg = () => {

  const [mostrar, setMostrar] = useState(true)

  const manejarClick = () => {
    console.log('mostrar/ocultar elemento')

    setMostrar(!mostrar)
  }

  return <section className="orgSection" >
    <h3 className='title'>Mi organizacion</h3>
    <img src="/img/add.png" alt="add" onClick={manejarClick}/>

  </section>
}

export default MiOrg