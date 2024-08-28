import React from "react";
import "./styles.css";

const Forms = () => {
  return (
    <> 
      <div className="Container-Forms">
        <h1 className="text">Vamos elevar seu patamar?</h1>
        <h3 className="text">Uma pequena mensagem pode mudar seu negócio</h3> 
        <div className="container3">
          <img
            src="Karasu .png"
            alt="image"
          />
          <form className="container3-text">
            <div className="box-forms">
              <label>Email</label>
              <br></br>
              <textarea className="textarea-Forms" placeholder="Digite seu e-mail" />
            </div>
            <div className="box-forms">
              <label>WhatsApp </label>
              <br></br>
              <textarea className="textarea-Forms" placeholder="Digite seu número de WhatsApp" />
            </div>
            <div className="box-forms">
              <label>Serviços requeridos </label>
              </div>
              
              <div className="box-forms">
              <textarea className="textarea-Forms" placeholder="Descreva os serviços que você precisa" />
            </div>

            <div className="box-forms">
              <label>Investimento </label>
              <br></br> 
              <select className="textarea-Forms">
                <option value="">Selecione o valor do investimento</option>
                <option value="baixo">Até R$ 5.000</option>
                <option value="médio">R$ 5.000 - R$ 20.000</option>
                <option value="alto">Acima de R$ 20.000</option>
              </select>
            </div>

            <div className="box-forms">
            <button type="submit">Subscribe</button>     
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forms;
