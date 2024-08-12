'use client'
import React, { useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css'; 
import Mac from './Componentes/mac';
import ScrollIm from "./Componentes/Scroll/Scroll";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="">


      <div className="five-section" >
        <ScrollIm></ScrollIm>

 
        </div>
    </main>
  );
}
