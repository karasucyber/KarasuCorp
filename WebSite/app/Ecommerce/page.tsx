'use client'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from '../Componentes/navbar/navbar';
import Loading from '../Componentes/loading/Loading';


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
    
       
      </div>
    </main>
  );
}
