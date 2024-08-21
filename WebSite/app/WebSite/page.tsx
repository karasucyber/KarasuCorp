"use client"
import { useEffect, useState } from "react";
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
      <main className='Main'>
      {loading && (
        <Loading/>
      )}

        <Navbar/>
   

    </main>

        </>);
}
  