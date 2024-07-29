'use client'
import React, { useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css'; 
import Mac from './mac';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="">
      <div>
        <div className="primary-section" data-aos="fade-up" >
          <div className="hamburger" data-aos="fade-left">
            <GiHamburgerMenu />
          </div>
          <div className="logo-section">
            <a className="Logo1" data-aos="fade-left">KARASU</a><p className="a-Corp" data-aos="fade-left">CORP</p>
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
              <h6 data-aos="fade-right" data-aos-delay="0"> Construindo pontes entre passado e</h6>
              <h6 data-aos="fade-right" data-aos-delay="0">futuro digital</h6>
            </div>
            <button className="button-secundary" data-aos="fade-right" > Construa</button>
          </div>
        </div>
      </div>
      <div className='three-section'>
        <div className='three-section-right'>
           <h1> Quem somos</h1>
           <div className='Container-Mac'> 
            <Mac/>
           </div>
           
        </div>

        <div className='three-section-left'>
        <h1> teste</h1>


        </div>
      </div>
    </main>
  );
}
