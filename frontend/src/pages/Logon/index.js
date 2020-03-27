import React from "react";
import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />
        <form>
          <h1>Faça seu Logon</h1>
          <input type="text" placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tem cadastro.
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}