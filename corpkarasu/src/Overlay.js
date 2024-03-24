import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    class="scroll">
    <div style={{ height: "400vh" }}>
      <div class="dot">
        <h1> VR </h1>
        Somos especialista em desenvolvimento de objetos 3D interativos, introduzimos eles sem seu site, invando e trazendo novas tecnologias
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>headphone</h1>
        Criamos não só experiências visuas e sim audiivas
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Nós da Karasu temos os melhores especialista</h1>
        Nosso time está preparado para receber seu projeto e fazermos história
      </div>
    </div>

    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>laptop</h1>
        Sua empresa em seu leptop na karasu não somos apenas especialista visualmte, criamos ferrameteas para sua empresa extremamente personalizada e única
      </div>
    </div>

    <span class="caption" ref={caption}>
      0.00
    </span>
  </div>
))

export default Overlay
