import React from 'react'
import DifalaIconWhite from '../../assets/DifalaIconWhite.png'
import Phone from './images/Phone.png'
import Pin from './images/Pin.png'
import Mail from './images/Mail.png'


export const SectionFooter = () => {
  return (
    <div className='body-background'>
        <div className='content-container' style={{display:'flex',flexDirection: 'row', alignItems: 'center', margin: '0px 140px'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={DifalaIconWhite} alt="logo" style={{width: 281, height: 78}}/>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: 32, width: 281 }}>
                    <span style={{fontStyle: 'italic', fontSize: 14, color: '#FFFFFF', textAlign: 'left',}}>Compramos casas, vendemos hogares.</span>
                    <span style={{fontStyle: 'italic', fontSize: 14, color: '#FFFFFF', textAlign: 'left'}}>Transformamos la experiencia de</span>
                    <span style={{fontStyle: 'italic', fontSize: 14, color: '#FFFFFF', textAlign: 'left'}}>compraventa de viviendas. En la forma</span>
                    <span style={{fontStyle: 'italic', fontSize: 14, color: '#FFFFFF', textAlign: 'left'}}>más rápida y transparente de comprar,</span>
                    <span style={{fontStyle: 'italic', fontSize: 14, color: '#FFFFFF', textAlign: 'left'}}>vender o alquilar tu casa.</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, width: 281, alignItems: 'center', justifyContent: 'flex-start'}}>
                    <img src={Phone} alt={'Phone'} style={{width: 18, height: 18}}/>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                        <span style={{fontSize: 14, fontWeight: 700, color: '#FFFFFF', textAlign: 'left'}}>+34 426 67 57 87</span>
                        <span style={{fontSize: 14, fontWeight: 400, color: '#FFFFFF', textAlign: 'left', marginTop: -3}}>De Lunes a Viernes de 9:00 a 20:00h</span>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: 12, width: 281, alignItems: 'center', justifyContent: 'flex-start'}}>
                    <img src={Pin} alt={'Pin'} style={{width: 14, height: 18}}/>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 16}}>
                        <span style={{fontSize: 14, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>Paseo de Recoletos, 43, Centro,</span>
                        <span style={{fontSize: 14, fontWeight: 400, color: '#FFFFFF', textAlign: 'left', marginTop: -3}}>28004 Madrid, España</span>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: 12, width: 281, alignItems: 'center', justifyContent: 'flex-start'}}>
                    <img src={Mail} alt={'Mail'} style={{width: 20, height: 16}}/>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 10}}>
                        <span style={{fontSize: 14, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>administracion@dikala.com</span>
                    </div>
                </div>
            </div>
          </div>
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start', height: 370}}>
                <span style={{fontSize: 20, fontWeight: 700, color: '#FFFFFF',}}>DESCÚBRENOS</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Vende tu casa</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Compra tu vivienda</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Alquilar con Dikala</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Consigue tu hipoteca</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Vendemos por ti</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Visita virtual</span>
            </div>
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start', height: 370}}>
                <span style={{fontSize: 20, fontWeight: 700, color: '#FFFFFF',}}>CONÓCENOS</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Contacto</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Trabaja con nosotros</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Preguntas frecuentes</span>
            </div>
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start', height: 370}}>
                <span style={{fontSize: 20, fontWeight: 700, color: '#FFFFFF',}}>INFORMACIÓN LEGAL</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Términos y condiciones</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Términos y cond. de hipotecas</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Condiciones de promociones</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Política de privacidad</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Política de cookies</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Aviso legal</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Código Ético</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Política Canal Ético</span>
                <span style={{fontSize: 16, color: '#FFFFFF', marginTop: 16}}>Canal Ético</span>
            </div>
            
            
        </div>
      </div>
  )
}

