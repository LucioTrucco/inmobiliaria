import React from 'react';
import './Footer.css';

export const Footer = ({selectedValue}) => {
  return (
    <div className="footer">
      {selectedValue === 'Compra' &&<>
        <span>Compra tu hogar</span>
        <span>¿Cómo funciona la compra?</span>
        <span>Ventajas de comprar</span>
        <span>Opiniones</span>
        <span>Preguntas frecuentes</span>
        <div className="button-container" style={{backgroundColor:'#FE7469', padding: '16px 40px', borderRadius: 20,}}>
          <span>Quiero comprar</span>
        </div>
      </>}
      {selectedValue === 'Vende' &&<>
        <span>Vende tu casa</span>
        <span>¿Como funciona la venta?</span>
        <span>¿Por qué Dikala?</span>
        <span>Opiniones</span>
        <span>Preguntas frecuentes</span>
        <div className="button-container" style={{backgroundColor:'#FE7469', padding: '16px 40px', borderRadius: 20,}}>
          <span>Quiero vender mi casa</span>
        </div>
      </>}
      {selectedValue === 'Alquila' &&<>
        <span>Alquilar</span>
        <span>¿Cómo funciona el alquiler?</span>
        <span>Ventajas de alquilar</span>
        <span>Servicios adicionales</span>
        <span>Preguntas frecuentes</span>
        <div className="button-container" style={{backgroundColor:'#FE7469', padding: '16px 40px', borderRadius: 20,}}>
          <span>Alquila una vivienda</span>
        </div>
      </>}
    </div>
  );
};

