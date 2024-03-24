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
        Somos especialistas em desenvolvimento de objetos 3D interativos. Introduzimos essas tecnologias revolucionárias em seu site, proporcionando uma experiência única aos seus visitantes. Inovamos ao trazer novas tecnologias que elevam o nível de interatividade e engajamento, tornando sua plataforma um espaço envolvente e memorável. Convidamos você a explorar o futuro da web conosco.      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>headphone</h1>
        Além de experiências visuais impactantes, também criamos experiências auditivas imersivas. Nossos objetos 3D interativos não apenas cativam visualmente, mas também encantam os ouvidos, proporcionando uma experiência multisensorial completa. Através da integração de áudio inovador, elevamos o padrão de interatividade, mergulhando seu público em um mundo de sons envolventes e emocionantes. Estamos aqui para transformar seu site em um verdadeiro espetáculo para os sentidos.      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Nós da Karasu temos os melhores especialista</h1>
        Com uma equipe altamente capacitada, estamos prontos para receber seu projeto e escrevermos juntos uma nova página na história. Nossa experiência e paixão pela inovação nos impulsionam a alcançar novos patamares e criar soluções que impactam positivamente o mundo digital. Ao escolher-nos, você está optando por colaborar com visionários dedicados a transformar ideias em realidade e deixar uma marca duradoura no cenário digital. Estamos ansiosos para embarcar nessa jornada com você e fazer história juntos.      </div>
    </div>

    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>laptop</h1>
        Sua empresa merece mais do que apenas uma presença visual impactante. Na Karasu, não somos apenas especialistas em design visual; nós criamos ferramentas extremamente personalizadas e únicas para impulsionar o seu negócio. Combinamos criatividade com expertise técnica para desenvolver soluções sob medida que atendam às necessidades específicas da sua empresa. Do seu laptop à sua infraestrutura digital, estamos aqui para fornecer as ferramentas que vão levar o seu negócio ao próximo nível      </div>
    </div>

      <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Contatos</h1>
        <h2>karasucorp@outlook.com</h2>
        <h2>(11)919216813</h2>
    </div>
    </div>


    <span class="caption" ref={caption}>
      0.00
    </span>
  </div>
))

export default Overlay
