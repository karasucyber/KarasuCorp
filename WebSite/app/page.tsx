'use client'
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';
import Mac from './Componentes/mac';
import Link from 'next/link';
import { FaFileAlt, FaWallet, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Waves from './Componentes/waves';
import { CgWebsite } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { GrNetwork } from "react-icons/gr";
import { MdPaid } from "react-icons/md";
import { MdInsights } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import Navbar from './Componentes/navbar';
import Loading from './Componentes/Loading';
import Footer from './Componentes/footer';


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer); // Limpeza do timer
  }, []);

  return (
    <main className='Main'>
      {loading && (
        <Loading/>
      )}

      <div className={loading ? 'hidden' : ''}>
        <Navbar/>
    
        <div className="secundary-section" data-aos="fade-up" data-aos-delay="0">
          <div className="sectiom-in-sencundary">
            <h1 data-aos="fade-right" data-aos-delay="5">Construindo Legados Digitais</h1>
            <div className="sencudary-h6">
              <h6 data-aos="fade-right" data-aos-delay="5">Construindo pontes entre passado </h6>
              <h6 data-aos="fade-right" data-aos-delay="5">e</h6>
              <h6 data-aos="fade-right" data-aos-delay="5">futuro digital</h6>
            </div>
            <button className="button-secundary" data-aos="fade-right">Construa</button>
          </div>
        </div>
        <div className="three-section">
          <div className="three-section-right">
            <h1>Quem somos ?</h1>
            <div className="Container-Mac">
              <Mac />
            </div>
          </div>
          <div className="three-section-left">
            <div className="typing-text">
              Somos uma <a className="Palavras_Chaves">startup de tecnologia e inovação</a> que acredita na harmonia entre o clássico e o moderno. Nossa essência é trazer soluções inovadoras sem perder o bom e velho toque old school que tanto valorizamos. Com uma cultura que honra o passado e abraça o futuro, integramos <a className="Palavras_Chaves">inteligência artificial</a> em seus sistemas <a className="Palavras_Chaves">ERP</a> para otimizar processos e melhorar a tomada de decisões.
            </div>
            <br />
            <div className="typing-text">
              Além disso, ajudamos você a vender mais, criando <a className="Palavras_Chaves">sites robustos e eficientes</a>, projetados para atender às demandas do mercado atual. Nosso objetivo é ser um <a className="Palavras_Chaves">parceiro estratégico</a>, fornecendo as ferramentas que você precisa para alcançar o sucesso em um mundo em constante mudança.
            </div>
          </div>
        </div>

        <div className="four-section" >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Waves />
          </div>
          <div className="four-section">

            <div className="">
            <div className='six-section'>
            <h1 className='text'>Nossos serviços</h1>
            <h3 className='text'> Um novo universo para você</h3>
    
          </div>
              <div id="Service" className="parent">

                <div className="card">
                  <div className="content-box">
                  <div className="date-box">
                    <span className="month"><CgWebsite className='Icons' /></span>
                  </div>
                    <span className="card-title"> Web Site</span>
                    <p className="card-content">
                      Sites modernos para destacar sua presença online.
                    </p>
                    <span className="see-more">
                    <Link style={{textDecoration:"none", color:"black"}} href="/WebSite">
                            Saber Mais  
                     </Link>
                    </span>
                  </div>
               
                </div>

                <div className="card">
                  <div className="content-box">
                  <div className="date-box">
                    <span className="month"><CiShoppingCart className='Icons' /></span>
                  </div>
                    <span className="card-title">Ecommerce</span>
                    <p className="card-content">
                      Lojas online completas para gerenciar seus produtos.
                    </p>
                    <span className="see-more"> <Link style={{textDecoration:"none", color:"black"}} href="/Ecommerce">
                       Saber Mais                
                     </Link></span>
                  </div>
               
                </div>

                <div className="card">
                  <div className="content-box">
          
                    <span className="card-title">Marketing</span>
                    <div className="date-box">
                    <span className="month"><GrNetwork className='Icons' /></span>
                  </div>
                    <p className="card-content">
                      Estratégias para aumentar sua visibilidade online.
                    </p>
                    <span className="see-more"> <Link style={{textDecoration:"none", color:"black"}} href="/Marketing">
                       Saber Mais                
                     </Link></span>
                  </div>
               
                </div>

                <div className="card">
                  <div className="content-box">
                  <div className="date-box">
                    <span className="month"><MdPaid className='Icons' /></span>
                  </div>
                    <span className="card-title">Tráfego Pago</span>
                    <p className="card-content">
                      Anúncios pagos para atrair mais clientes e leads.
                    </p>
                    <span className="see-more"> <Link style={{textDecoration:"none", color:"black"}} href="/Tráfego Pago">
                       Saber Mais                
                     </Link></span>
                  </div>
               
                </div>

                <div className="card">
                  <div className="content-box">
                  <div className="date-box">
                    <span className="month"><MdInsights className='Icons' /></span>
                  </div>
                    <span className="card-title">Dashboards</span>
                    <p className="card-content">
                      Dashboards para análise e visualização de dados.
                    </p>
                    <span className="see-more"> <Link style={{textDecoration:"none", color:"black"}} href="/Projetos">
                       Saber Mais                
                     </Link></span>
                  </div>
         
                </div>

                <div className="card">
                  <div className="content-box">
                  <div className="date-box">
                    <span className="month"><FaLaptopCode className='Icons' /></span>
                  </div>
                    <span className="card-title">Softwares</span>
                    <p className="card-content">
                      Software feito sob medida para suas necessidades.
                    </p>
                    <span className="see-more"> <Link style={{textDecoration:"none", color:"black"}} href="/Projetos">
                       Saber Mais                
                     </Link></span>
                  </div>
                </div>

                <div className="card">
                  <div className="content-box">
                  <div className="date-box">
                    <span className="month"><IoMdPhotos className='Icons' /></span>
                  </div>
                    <span className="card-title">Designer </span>
                    <br></br>
                    <p className="card-content">
                      Design criativo para seus projetos visuais.
                    </p>
                    <span className="see-more"> <Link style={{textDecoration:"none", color:"black"}} href="/Projetos">
                       Saber Mais                
                     </Link></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='six-section'>
            <h1 className='text' >Gostaria de ver nossos projetos?</h1>
            <Link href="/Projetos" passHref>
              <button className="button-secundary">Projetos</button>
            </Link>
          </div>
        </div>
        <a href="https://www.instagram.com/karasu_corp" target="_blank" rel="noopener noreferrer">
          <div className={`Insta-Box ${loading ? 'hidden' : ''}`}>
            <FaInstagram style={{ width: "80%", height: "100%" }} />
          </div>
        </a>
        <a href="https://wa.me/011919216813" target="_blank" rel="noopener noreferrer">
          <div className={`Whats-Box ${loading ? 'hidden' : ''}`}>
            <FaWhatsapp style={{ width: "100%", height: "100%" }} />
          </div>
        </a>
      </div>

      <Footer></Footer>



    </main>
  );
}
