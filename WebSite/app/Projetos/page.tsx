"use client";
import React, { useEffect, useState } from "react";
import '../styles.css';
import Scroll2 from "../Componentes/App";
import Waves from "../Componentes/waves";
import Loading from "../Componentes/Loading";
import Navbar from "../Componentes/navbar";



export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Tempo em milissegundos

    return () => clearTimeout(timer); // Limpeza do timer
  }, []);

  return (
    <>
      {loading && (
      <Loading/>
      )}

         <Navbar/>
       
        <div className="five-section">
          <Scroll2 />
        </div>

        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -998 }}>
        <Waves />
      </div>
    </>
  );
}

