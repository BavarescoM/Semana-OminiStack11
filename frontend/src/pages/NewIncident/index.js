import React from "react";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home.
          </Link>
        </section>
        <form>
          <input placeholder="Título Cadastro" />
          <textarea placeholder="descrição" />
          <input placeholder="valor em reais R$" />

          <button className="button" type="submit">
            Cadastar
          </button>
        </form>
      </div>
    </div>
  );
}
