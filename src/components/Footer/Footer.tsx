import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <span>Compra tu hogar</span>
      <span>Como funciona tu compra</span>
      <span>Ventajas de comprar</span>
      <span>Opiniones</span>
      <span>Preguntas frecuentes</span>
      <div className="button-container" style={{backgroundColor:'#FE7469', padding: '16px 40px', borderRadius: 20,}}>
        <span>Quiero comprar</span>
      </div>
    </div>
  );
};

