import './Footer.css'

const Footer = () => {
  return <footer className="footer" style={{backgroundImage:"url(img/Footerbg.png)"}}>
        <div className="redes">
        <a href='https://twitter.com/mago_d_Mercurio'> 
            <img src="img/facebook.png" alt="Facebook"/>
        </a>
        <a href='https://twitter.com/mago_d_Mercurio'> 
            <img src="img/twitter.png" alt="twitter" />
        </a>
        <a href='https://twitter.com/mago_d_Mercurio'> 
            <img src="img/instagram.png" alt="instagram" />
        </a>
        </div>
        <img src='img/FooterLogo.png' alt='org' /> 
        <strong>Desarrollado por Raúl Dávila</strong>
    </footer>
}

export default Footer