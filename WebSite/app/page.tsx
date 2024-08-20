'use client'
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';
import Mac from './Componentes/mac';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Scroll2 from './App';
import Waves from './waves';
import { CgWebsite } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { GrNetwork } from "react-icons/gr";
import { MdPaid } from "react-icons/md";
import { MdInsights } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";








export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Tempo em milissegundos

    return () => clearTimeout(timer); // Limpeza do timer
  }, []);

  return (
    <main className='Main'>
        {loading && (
          <div id="loader">
            <div className="spinner"></div>
          </div>
        )}
        
      <div className={loading ? 'hidden' : ''}>
        <div className="primary-section" data-aos="fade-up">
          <div className="hamburger" data-aos="fade-left">
            <GiHamburgerMenu />
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
        <video autoPlay muted loop id="myVideo">
          <source src="background.mp4" type="video/mp4" />
        </video>
        <div className="secundary-section" data-aos="fade-up" data-aos-delay="0">
          <div className="sectiom-in-sencundary">
            <h1 data-aos="fade-right" data-aos-delay="0">Construindo Legados Digitais</h1>
            <div className="sencudary-h6">
              <h6 data-aos="fade-right" data-aos-delay="0">Construindo pontes entre passado e</h6>
              <h6 data-aos="fade-right" data-aos-delay="0">futuro digital</h6>
            </div>
            <button className="button-secundary" data-aos="fade-right">Construa</button>
          </div>
        </div>
        <div className="three-section">
          <div className="three-section-right">
            <h1>Quem somos</h1>
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
          <div className="parent">
            
  <div className="card">
    <div className="content-box">
      <span className="card-title"> Web Site</span>
      <p className="card-content">
        Sites modernos para destacar sua presença online.
      </p>
      <span className="see-more">Saber Mais</span>
    </div>
    <div className="date-box">
      <span className="month"><CgWebsite style={{width:"40px", height:"40px"}} /></span>
    </div>
  </div>
  
  <div className="card">
    <div className="content-box">
      <span className="card-title">Ecommerce</span>
      <p className="card-content">
        Lojas online completas para gerenciar seus produtos.
      </p>
      <span className="see-more">Saber Mais</span>
    </div>
    <div className="date-box">
      <span className="month"><CiShoppingCart  style={{width:"40px", height:"40px"}} /></span>
    </div>
  </div>

  <div className="card">
    <div className="content-box">
      <span className="card-title">Marketing</span>
      <p className="card-content">
        Estratégias para aumentar sua visibilidade online.
      </p>
      <span className="see-more">Saber Mais</span>
    </div>
    <div className="date-box">
      <span className="month"><GrNetwork style={{width:"40px", height:"40px"}} /></span>
    </div>
  </div>

  <div className="card">
    <div className="content-box">
      <span className="card-title">Tráfego Pago</span>
      <p className="card-content">
        Anúncios pagos para atrair mais clientes e leads.
      </p>
      <span className="see-more">Saber Mais</span>
    </div>
    <div className="date-box">
      <span className="month"><MdPaid style={{width:"40px", height:"40px"}} /></span>
    </div>
  </div>

  <div className="card">
    <div className="content-box">
      <span className="card-title">Dashboards</span>
      <p className="card-content">
        Dashboards para análise e visualização de dados.
      </p>
      <span className="see-more">Saber Mais</span>
    </div>
    <div className="date-box">
      <span className="month"><MdInsights style={{width:"40px", height:"40px"}} /></span>
    </div>
  </div>

  <div className="card">
    <div className="content-box">
      <span className="card-title">Softwares</span>
      <p className="card-content">
        Software feito sob medida para suas necessidades.
      </p>
      <span className="see-more">Saber Mais</span>
    </div>
    <div className="date-box">
      <span className="month"><FaLaptopCode  style={{width:"40px", height:"40px"}} /></span>
    </div>
  </div>

  <div className="card">
    <div className="content-box">
      <span className="card-title">Designer</span>
      <p className="card-content">
        Design criativo para melhorar seus projetos visuais.
      </p>
      <span className="see-more">Saber Mais</span>
    </div>
    <div className="date-box">
      <span className="month"><IoMdPhotos style={{width:"40px", height:"40px"}} /></span>
    </div>
  </div>
</div>

          </div>
        </div>
          <div className='six-section'>
            <h1>Gostaria de ver nossos projetos?</h1>
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

      

    </main>
  );
}
