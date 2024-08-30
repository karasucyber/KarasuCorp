import React from "react";
import "./styles.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const Forms = () => {
  return (
    <div className="Container-Forms">
      <h1 className="text">Vamos elevar seu patamar?</h1>
      <h3 className="text">Uma pequena mensagem pode mudar seu negócio</h3> 
      <div className="container3">
        <img
          src="Karasu .png"
          alt="Karasu Logo"
          className="container3-img"  // Adicione uma classe para aplicar estilos específicos se necessário
        />
        <form className="container3-form" aria-labelledby="form-header">
          <div className="box-forms">
            <label htmlFor="email">Email</label>
            <textarea
              id="email"
              className="textarea-Forms"
              placeholder="Digite seu e-mail"
              aria-required="true"
            />
          </div>
          <div className="box-forms">
            <label htmlFor="whatsapp">WhatsApp</label>
            <textarea
              id="whatsapp"
              className="textarea-Forms"
              placeholder="Digite seu número de WhatsApp"
              aria-required="true"
            />
          </div>
          <div className="box-forms">
            <label htmlFor="services">Serviços requeridos</label>
            <textarea
              id="services"
              className="textarea-Forms"
              placeholder="Descreva os serviços que você precisa"
              aria-required="true"
            />
          </div>
          <div className="box-forms">
            <label htmlFor="investment">Investimento</label>
            <select
              id="investment"
              className="Select-Forms"
              aria-required="true"
            >
              <option value="baixo">R$ 500 Até R$ 1.500</option>
              <option value="médio">Até R$ 5.000</option>
              <option value="alto">R$ 5.000 - R$ 20.000</option>
              <option value="muito-alto">Acima de R$ 20.000</option>
            </select>
          </div>
          <div className="box-forms">
            <button type="submit" aria-label="Enviar Formulário">
              <AiOutlineArrowUp />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
