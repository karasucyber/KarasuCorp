"use client"
import React, { useEffect, useState } from "react";
import '../styles.css';
import Scroll2 from "../App";
import { GiHamburgerMenu } from "react-icons/gi";


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
        <div id="loader">
          <div className="spinner"></div>
        </div>
      )}
        <div style={{ height: "100%", width: "100%", overflow:"hidden" }} >
        <div style={{ height: "100px", }} className="primary-section" data-aos="fade-up" >
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