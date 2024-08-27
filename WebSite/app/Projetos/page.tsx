'use client'
import AOS from 'aos';
import Navbar from '../Componentes/navbar/navbar';
import Waves from "../Componentes/space/waves";
import Loading from "../Componentes/loading/Loading";
import React, { useEffect, useState } from "react";
import Scroll2 from "../Componentes/portifolio/App";
import '../styles.css';




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
        <Loading/>
      )}

      <div className={loading ? 'hidden' : ''}>
        <Navbar/>

        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1000 }}>
        <Waves />
      </div>
    
      <div className="five-section">
          <Scroll2/>
        </div>
       
      </div>
    </main>
  );
}
