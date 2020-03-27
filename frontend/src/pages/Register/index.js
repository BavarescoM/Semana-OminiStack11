import React from "react";
import logoImg from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, enrte na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Não tem cadastro.
          </Link>
        </section>
        <form>
          <input palceholder="Nome da ONG" />
          <input palceholder="E-mail" type="email" />
          <input palceholder="WhatsApp" />
          <div className="input-group">
            <input palceholder="Cidade" />
            <input palceholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Cadastar
          </button>
        </form>
      </div>
    </div>
  );
}
