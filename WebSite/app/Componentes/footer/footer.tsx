import React from "react";
import "./styles.css";

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
                <i data-feather="shopping-bag"></i> <span>Serviços</span>
              </h3>
              <nav className="footer__nav">
                <ul className="footer__nav-divst">
                  <li className="footer__nav-item">
                    <a
                      href="https://wa.me/5511919216813?text=Olá,%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20desenvolvimento%20de%20websites.%20Poderia%20me%20dar%20mais%20informações?"
                      className="footer__nav-divnk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WebSite
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a
                      href="https://wa.me/5511919216813?text=Olá,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20suas%20soluções%20de%20Ecommerce.%20Pode%20me%20ajudar?"
                      className="footer__nav-divnk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      E-commerce
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a
                      href="https://wa.me/5511919216813?text=Olá,%20gostaria%20de%20entender%20como%20suas%20estratégias%20de%20Marketing%20podem%20ajudar%20meu%20negócio.%20Poderia%20me%20dar%20mais%20detalhes?"
                      className="footer__nav-divnk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Marketing
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a
                      href="https://wa.me/5511919216813?text=Olá,%20tenho%20interesse%20em%20saber%20mais%20sobre%20as%20suas%20estratégias%20de%20Tráfego%20Pago.%20Pode%20me%20dar%20mais%20informações?"
                      className="footer__nav-divnk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tráfego Pago
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a
                      href="https://wa.me/5511919216813?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20como%20vocês%20podem%20me%20ajudar%20com%20Dashboards%20personalizados.%20Poderia%20me%20dar%20mais%20detalhes?"
                      className="footer__nav-divnk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dashboards
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a
                      href="https://wa.me/5511919216813?text=Olá,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20o%20desenvolvimento%20de%20Softwares%20sob%20medida.%20Poderia%20me%20dar%20mais%20informações?"
                      className="footer__nav-divnk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Softwares
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a
                      href="https://wa.me/5511919216813?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20Design.%20Poderia%20me%20dar%20mais%20informações?"
                      className="footer__nav-divnk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Designers
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__col">
              <h3 className="footer__col-title">
                <i data-feather="share-2"></i> <span>Redes Sociais</span>
              </h3>
              <nav className="footer__nav">
                <ul className="footer__nav-divst">
                  <li className="footer__nav-item">
                    <a href="https://www.youtube.com/@KarasuCorp" className="footer__nav-divnk">
                      <i data-feather="youtube"></i> Youtube
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="https://www.linkedin.com/company/karasucorp/" className="footer__nav-divnk">
                      <i data-feather="facebook"></i> Linkedin
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="https://www.instagram.com/karasu_corp/" className="footer__nav-divnk">
                      <i data-feather="instagram"></i> Instagram
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__col">
              <h3 className="footer__col-title">
                <i data-feather="send"></i> <span>Contact</span>
              </h3>
              <nav className="footer__nav">
                <ul className="footer__nav-divst">
                  <li className="footer__nav-item">
                    <a
                      href="https://wa.me/5511919216813?text=Olá,%20gostaria%20de%20falar%20com%20o%20setor%20Comercial.%20Poderia%20me%20ajudar%20com%20mais%20informações?"
                      className="footer__nav-divnk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Comercial
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a
                      href="https://wa.me/5511919216813?text=Olá,%20gostaria%20de%20falar%20com%20o%20SAC.%20Preciso%20de%20assistência%20com%20um%20serviço.%20Poderia%20me%20ajudar?"
                      className="footer__nav-divnk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SAC
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer__copyrights">
            <p>Direitos reservados <a href="https://github.com/karasucyber" target="_blank">Karasucorp</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
