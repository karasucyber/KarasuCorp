'use client'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from '../Componentes/navbar/navbar';
import Loading from '../Componentes/loading/Loading';
import Footer from '../Componentes/footer/footer';
import Forms from '../Componentes/forms/forms';
import "../styles.css"
import Waves from '../Componentes/space/waves';

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
        <Forms></Forms>

        <Footer/>   

    
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Waves />
          </div>
      </div>
    </main>
  );
}
