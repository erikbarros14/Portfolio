import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Chaveiro ! </h1>
      <nav>
        <a href="#home">Início</a>
        <a href="#about">Sobre</a>
        <a href="#imoveis">Serviços</a>{" "}
        {/* Link correto para a seção de imóveis */}
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}
