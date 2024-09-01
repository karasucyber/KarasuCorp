'use client'
import 'aos/dist/aos.css';
import './styles.css';
import { FaHouse } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiSlideshowFill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaWallet } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
    return(<>
           <div className="primary-section" data-aos="fade-up">
            <div className="wrapper">
            <input type="checkbox" />
            <div className="fab"><RxHamburgerMenu/></div>
            <div className="fac">

              <a href="/" className="icon-wrapper">
                <FaHouse />
                <span className="tooltip">Home</span>
              </a>

              <a href="/Contact" className="icon-wrapper">
                <FaPhoneAlt />
                <span className="tooltip">Contatos</span>
              </a>

              <a href="/Projetos" className="icon-wrapper">
                <RiSlideshowFill />
                <span className="tooltip">Portifólio</span>
              </a>


           
            </div>
          </div>

          <div className="logo-section">
            <a className="Logo1" data-aos="fade-left">KARASU</a>
            <p className="a-Corp" data-aos="fade-left">CORP</p>
            <div className="Section-in-primary">
              <img src="karasu.png" data-aos="fade-up" alt="Karasu Logo" />
            </div>
          </div>
          <img />
        </div>
</>)
}

export default Navbar;


/*   <a href="/ProjetoSocial" className="icon-wrapper">
                <TfiHeadphoneAlt />
                <span className="tooltip">Projeto Social</span>
              </a>
              

              <a href="/Sac" className="icon-wrapper">
                <TfiHeadphoneAlt />
                <span className="tooltip">Sac</span>
              </a>  
              
                            <a href="/History" className="icon-wrapper">
                <MdOutlineMenuBook />
                <span className="tooltip">História</span>
              </a>

              <a href="/" className="icon-wrapper">
                <MdHomeRepairService />
                <span className="tooltip">Serviços</span>
              </a>
              
              
              */