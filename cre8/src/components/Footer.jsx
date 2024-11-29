// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} MiSitioWeb. Todos los derechos reservados.
        </p>
        <div className="mt-4 flex justify-center space-x-8">
          <a
            href="/about"
            className="text-gray-400 hover:text-white hover:underline transition"
          >
            Sobre Nosotros
          </a>
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white hover:underline transition"
          >
            Política de Privacidad
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white hover:underline transition"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
