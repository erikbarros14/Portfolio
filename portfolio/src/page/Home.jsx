import React, { useState } from "react";
import "./Home.css";
import profileImage from "../assets/chave.png"; // Importe sua imagem
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa"; // Ícones do react-icons
import imagem1 from "../assets/chave2.jpeg";
import imagem2 from "../assets/chave3.jpeg";
import imagem3 from "../assets/chave4.jpeg";
import imagem4 from "../assets/cvave1.jpeg";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imagem1, imagem2, imagem3, imagem4];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      {/* Seção Home */}
      <section id="home" className="home-container">
        <div className="info-container">
          <h1>Douglas</h1>
          <h2>Chaveiro 🔑</h2>
          <p>
            Com experiência no mercado, atuo como chaveiro, proporcionando uma
            ampla gama de serviços especializados{" "}
            <span className="highlight">
              garantindo a segurança dos imóveis e ajudando nossos clientes
            </span>
            , oferecendo uma ampla variedade de serviços{" "}
            <span className="highlight">
              a resolverem suas necessidades com confiabilidade e eficiência.
            </span>
            ,
          </p>
          <a
            href="https://wa.me/5581982650946"
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entre em contato
          </a>
        </div>
        <div className="image-container">
          <img src={profileImage} alt="Douglas" className="profile-image" />
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="about" className="about-container">
        <div className="about-content">
          <h1>Sobre Mim</h1>
          <p>
            Olá! Sou Douglas, um chaveiro experiente focado em oferecer
            <span className="highlight"> soluções rápidas e seguras</span> para
            meus clientes. Garantir satisfação é o meu compromisso!
          </p>
          <div className="social-icons">
            <a
              href="https://wa.me/5581982650946"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <FaInstagram />
            </a>
            <a href="mailto:seu-email@email.com" className="social-button">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      {/* Seção Imóveis */}
      <section id="imoveis" className="imoveis-container">
        <h1>Serviços</h1>
        <p>
          Confira as imagens de alguns serviços que realizei para garantir a
          segurança de meus clientes.
        </p>

        <div className="carousel-container">
          <div className="carousel">
            <img
              src={images[currentIndex]} // Exibe apenas a imagem atual
              alt={`Imóvel ${currentIndex + 1}`}
              className="carousel-image"
            />
          </div>

          <div className="carousel-buttons">
            <button className="prev-button" onClick={prevImage}>
              ←
            </button>
            <button className="next-button" onClick={nextImage}>
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
