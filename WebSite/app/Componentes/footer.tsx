import react from "react";
import "../styles.css";


const Footer = () => {
    return (
        <>
     <footer className="footer">
  <div className="footer__parralax">
    <div className="footer__parralax-trees"></div>
    <div className="footer__parralax-moto"></div>
    <div className="footer__parralax-secondplan"></div>
    <div className="footer__parralax-premierplan"></div>
    <div className="footer__parralax-voiture"></div>
  </div>
  <div className="container">
    <div className="footer__columns">
      <div className="footer__col">
        <h3 className="footer__col-title">
          <i data-feather="shopping-bag"></i> <span>Serviços</span></h3>
        <nav className="footer__nav">
          <ul className="footer__nav-divst">
            <div className="footer__nav-item">
              <a href="" className="footer__nav-divnk">
                WebSite
              </a>
            </div>
            <div className="footer__nav-item">
              <a href="" className="footer__nav-divnk">
                E-commerce
              </a>
            </div>
            <div className="footer__nav-item">
              <a href="" className="footer__nav-divnk">
                Marketing
              </a>
            </div>
            <div className="footer__nav-item">
              <a href="" className="footer__nav-divnk">
                Tráfego Pago
              </a>
            </div>
            <div className="footer__nav-item">
              <a href="" className="footer__nav-divnk">
               Dashboards
               </a>
            </div>
            <div className="footer__nav-item">
              <a href="" className="footer__nav-divnk">
               Softwares
               </a>
            </div>
            <div className="footer__nav-item">
              <a href="" className="footer__nav-divnk">
               Designers
               </a>
            </div>
          </ul>
        </nav>
      </div>
      <div className="footer__col">
        <h3 className="footer__col-title">
          <i data-feather="share-2"></i> <span>Redes Socias</span></h3>
        <nav className="footer__nav">
          <ul className="footer__nav-divst">
            <div className="footer__nav-item">
              <a href="" className="footer__nav-divnk">
                <i data-feather="youtube"></i><span>Youtube</span>
              </a>
            </div>
            <div className="footer__nav-item">
              <a href="" className="footer__nav-divnk">
                <i data-feather="facebook"></i><span>Facebook</span>
                
              </a>
            </div>
            <div className="footer__nav-item">
              <a href="" className="footer__nav-divnk">
                <i data-feather="instagram"></i><span>Instagram</span>
                
              </a>
            </div>
          </ul>
        </nav>
      </div>
      <div className="footer__col">
        <h3 className="footer__col-title">
          <i data-feather="send"></i> <span>Contact</span></h3>
        <nav className="footer__nav">
          <ul className="footer__nav-divst">
            <div className="footer__nav-item">
              <div  className="footer__nav-divnk">
                <a>Comercial</a>
                <a>Sac</a>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </div>
      <div className="footer__copyrights">
        <p>Direitos reservados <a href="https://twitter.com/silvereledev" target="_blank">Karasucorp</a></p>
      </div>
  </div>
</footer>
        </>
    )
}

export default Footer;