"use client";
import React, { useEffect, useState } from "react";
import '../styles.css';
import Scroll2 from "../App";
import { GiHamburgerMenu } from "react-icons/gi";
import Waves from "../waves";

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
         <div className='LoadingC'>
         <div id="loading" className="socket">
       <div className="gel center-gel">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c1 r1">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c2 r1">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c3 r1">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c4 r1">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c5 r1">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c6 r1">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       
       <div className="gel c7 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       
       <div className="gel c8 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c9 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c10 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c11 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c12 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c13 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c14 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c15 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c16 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c17 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c18 r2">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c19 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c20 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c21 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c22 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c23 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c24 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c25 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c26 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c28 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c29 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c30 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c31 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c32 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c33 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c34 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c35 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c36 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       <div className="gel c37 r3">
         <div className="hex-brick h1"></div>
         <div className="hex-brick h2"></div>
         <div className="hex-brick h3"></div>
       </div>
       
     </div>
   
      </div>
 
      )}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Waves />
      </div>
      <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden' }}>
        <div style={{ height: "100px" }} className="primary-section" data-aos="fade-up">
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
        <div className="five-section">
          <Scroll2 />
        </div>
      </div>
    </>
  );
}
