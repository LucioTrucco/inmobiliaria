import React from 'react'
import Step1 from './images/section1/Step1.png'
import Step2 from './images/section1/Step2.png'
import Step3 from './images/section1/Step3.png'

export const Section1 = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginTop: '24px', gap: 46}}>
      <div style={{display: 'flex', flexDirection: 'column', position: 'relative', padding: '24px', alignItems: 'center'}}>
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                background: '#FFE4e2',
                height: 36,
                width: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px' 
            }}>
                <span style={{color: '#FE7469', fontSize: 20, fontWeight: 700}}>1</span>
            </div>
            <img src={Step1} alt="Step1" style={{width: 182, height: 173}}/>
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222', marginTop: 24}}>Encuentra tu hogar ideal</span>
            <span style={{fontSize: 12, color: '#000000', marginTop: 24}}>Ajusta los filtros según</span>
            <span style={{fontSize: 12, color: '#000000'}}> las características, áreas que más te</span>
            <span style={{fontSize: 12, color: '#000000'}}>interesen y precios.</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', position: 'relative', padding: '24px',alignItems: 'center',}}>
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                background: '#FFE4e2',
                height: 36,
                width: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px' 
            }}>
                <span style={{color: '#FE7469', fontSize: 20, fontWeight: 700}}>2</span>
            </div>
            <img src={Step2} alt="Step2"  style={{width: 198, height: 173}}/>
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222', marginTop: 24}}>Explora la propiedad</span>
            <span style={{fontSize: 12, color: '#000000', marginTop: 24}}>Enviamos tu solicitud y</span>
            <span style={{fontSize: 12, color: '#000000'}}>seleccionamos las opciones más</span>
            <span style={{fontSize: 12, color: '#000000'}}>adecuadas según tus requisitos.</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', position: 'relative', padding: '24px', alignItems: 'center'}}>
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                background: '#FFE4e2',
                height: 36,
                width: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px' 
            }}>
                <span style={{color: '#FE7469', fontSize: 20, fontWeight: 700}}>3</span>
            </div>
            <img src={Step3} alt="Step3" style={{width: 149, height: 173}} />
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222', marginTop: 24}}>Haz tu reserva y organiza tu mudanza</span>
            <span style={{fontSize: 12, color: '#000000', marginTop: 24}}>Realiza tu reserva y sube tu</span>
            <span style={{fontSize: 12, color: '#000000'}}>documentación en la web para</span>
            <span style={{fontSize: 12, color: '#000000'}}>comenzar a disfrutar de tu espacio</span>
            <span style={{fontSize: 12, color: '#000000'}}>recién reformado.</span>
               

            
            
        </div>
    </div>
  )
}

