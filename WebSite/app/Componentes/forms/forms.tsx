import React, { useRef, useState, FormEvent } from "react";
import "./styles.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Forms: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_o6gpste", "template_nilrfzk", form.current, "lLbscr2I_Ijwmz7nW")
        .then(
          () => {
            setPopupMessage("Mensagem enviada com sucesso !");
          },
          (error: { text: string }) => {
            setPopupMessage(`Falha ao enviar mensagem: ${error.text}`);
          }
        );
    }
  };

  const closePopup = () => {
    setPopupMessage(null);
  };

  return (
    <div className="Container-Forms">
      <div className="six-section">
      <h1 className="">Vamos elevar seu patamar?</h1>
      <h3 className="six">Uma pequena mensagem pode mudar seu negócio</h3>
      </div>
    
      <div className="container3">
        <img src="Karasu .png" alt="Karasu Logo" className="container3-img" />
        <form
          ref={form}
          onSubmit={sendEmail}
          className="container3-form"
          aria-labelledby="form-header"
        >
          <div className="box-forms">
            <label htmlFor="email">Email</label>
            <textarea
              id="email"
              name="email"
              className="textarea-Forms"
              placeholder="Digite seu e-mail"
              aria-required="true"
            />
          </div>

          <div className="box-forms">
            <label htmlFor="empresa">Sua empresa</label>
            <textarea
              id="empresa"
              name="empresa"
              className="textarea-Forms"
              placeholder="Digite o nome ou CNPJ"
              aria-required="true"
            />
          </div>

          <div className="box-forms">
            <label htmlFor="whatsapp">WhatsApp</label>
            <textarea
              id="whatsapp"
              name="whatsapp"
              className="textarea-Forms"
              placeholder="Digite seu número de WhatsApp"
              aria-required="true"
            />
          </div>
          <div className="box-forms">
            <label htmlFor="services">Serviços requeridos</label>
            <textarea
              id="services"
              name="services"
              className="textarea-Forms"
              placeholder="Descreva os serviços que você precisa"
              aria-required="true"
            />
          </div>
          <div className="box-forms">
            <label htmlFor="investment">Investimento</label>
            <select
              id="investment"
              name="investment"
              className="Select-Forms"
              aria-required="true"
            >
              <option value="R$ 500 Até R$ 1.500">R$ 500 Até R$ 1.500</option>
              <option value="Até R$ 5.000">Até R$ 5.000</option>
              <option value="R$ 5.000 - R$ 20.000">R$ 5.000 - R$ 20.000</option>
              <option value="Acima de R$ 20.000">Acima de R$ 20.000</option>
            </select>
          </div>
          <div className="box-forms">
            <button type="submit" aria-label="Enviar Formulário">
              <AiOutlineArrowUp />
            </button>
          </div>
        </form>
      </div>

      {popupMessage && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={closePopup} aria-label="Fechar Popup">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forms;
