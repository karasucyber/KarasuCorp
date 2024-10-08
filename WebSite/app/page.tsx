'use client'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';
import Mac from './Componentes/boyspace/boy';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Waves from './Componentes/space/waves';
import { CgWebsite } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { GrNetwork } from "react-icons/gr";
import { MdPaid } from "react-icons/md";
import { MdInsights } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import Navbar from './Componentes/navbar/navbar';
import Loading from './Componentes/loading/Loading';
import Footer from './Componentes/footer/footer';
import Forms from './Componentes/forms/forms';


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='Main'>
      {loading && (
        <Loading />
      )}

      <div className={loading ? 'hidden' : ''}>
        <Navbar />

        <div className="secundary-section" data-aos="fade-up" data-aos-delay="0">
          <div className="sectiom-in-sencundary">
            <h1 data-aos="fade-right" data-aos-delay="5">Construindo Legados Digitais</h1>
            <div className="sencudary-h6">
              <h6 data-aos="fade-right" data-aos-delay="5">Construindo pontes entre passado </h6>
              <h6 data-aos="fade-right" data-aos-delay="5">e</h6>
              <h6 data-aos="fade-right" data-aos-delay="5">futuro digital</h6>
            </div>
            <button className="button-secundary" data-aos="fade-right">
              <Link
                style={{ textDecoration: "none", color: "red" }}
                href="https://wa.me/5511919216813?text=Olá,%20quero%20criar%20uma%20nova%20ponte%20para%20o%20futuro.%20Poderia%20me%20dar%20mais%20informações%20sobre%20como%20podemos%20fazer%20isso?"
                target="_blank"
                rel="noopener noreferrer"
              >
                Construa
              </Link>

            </button>
          </div>
        </div>

        <div className='six-section'>
          <h1>Quem somos ?</h1>
        </div>

        <div className="three-section">
          <div className="three-section-right">
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

          <div className='six-section'>
            <h1 className=''>Nossos serviços</h1>
            <h3 className='six'> Um novo universo para você</h3>
          </div>

          <div className="four-section">
            <div className="">
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
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://wa.me/5511919216813?text=Olá,%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20desenvolvimento%20de%20websites.%20Poderia%20me%20dar%20mais%20informações?"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        saber mais
                      </Link>
                    </span>
                  </div>
                </div>

                <div className="card">
                  <div className="content-box">
                    <div className="date-box">
                      <span className="month"><CiShoppingCart className='Icons' /></span>
                    </div>
                    <span className="card-title">Loja online</span>
                    <p className="card-content">
                      Lojas online completas para gerenciar seus produtos.
                    </p>
                    <span className="see-more">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://wa.me/5511919216813?text=Olá,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20suas%20soluções%20de%20Ecommerce.%20Pode%20me%20ajudar?"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        saber mais
                      </Link>
                    </span>
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
                    <span className="see-more">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://wa.me/5511919216813?text=Olá,%20gostaria%20de%20entender%20como%20suas%20estratégias%20de%20Marketing%20podem%20ajudar%20meu%20negócio.%20Poderia%20me%20dar%20mais%20detalhes?"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        saber mais
                      </Link>
                    </span>
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
                    <span className="see-more">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://wa.me/5511919216813?text=Olá,%20tenho%20interesse%20em%20saber%20mais%20sobre%20as%20suas%20estratégias%20de%20Tráfego%20Pago.%20Pode%20me%20dar%20mais%20informações?"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        saber mais
                      </Link>
                    </span>
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
                    <span className="see-more">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://wa.me/5511919216813?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20como%20vocês%20podem%20me%20ajudar%20com%20Dashboards%20personalizados.%20Poderia%20me%20dar%20mais%20detalhes?"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        saber mais
                      </Link>
                    </span>

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
                    <span className="see-more">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://wa.me/5511919216813?text=Olá,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20o%20desenvolvimento%20de%20Softwares%20sob%20medida.%20Poderia%20me%20dar%20mais%20informações?"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        saber mais
                      </Link>
                    </span>
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
                    <span className="see-more">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://wa.me/5511919216813?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20Design.%20Poderia%20me%20dar%20mais%20informações?"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        saber mais
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='six-section'>
            <h1 className='text'>Gostaria de ver nossos projetos?</h1>
            <Link href="/Projetos" passHref>
              <button className="button-secundary">Projetos</button>
            </Link>
          </div>

          <Forms />


        </div>
        <a href="https://www.instagram.com/karasu_corp" target="_blank" rel="noopener noreferrer">
          <div className={`Insta-Box ${loading ? 'hidden' : ''}`}>
            <FaInstagram style={{ width: "80%", height: "100%" }} />
          </div>
        </a>
        <a
          href="https://wa.me/5511919216813?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`Whats-Box ${loading ? 'hidden' : ''}`}>
            <FaWhatsapp style={{ width: "100%", height: "100%" }} />
          </div>
        </a>

      </div>

      <Footer></Footer>
    </main>
  );
}
