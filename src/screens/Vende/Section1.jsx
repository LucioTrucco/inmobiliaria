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
            <img src={Step1} alt="Step1" style={{width: 183, height: 173}}/>
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222', marginTop: 24}}>Completa el formulario</span>
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222'}}>en línea</span>
            <span style={{fontSize: 12, color: '#000000', marginTop: 24}}>Se lo más detallado posible con la</span>
            <span style={{fontSize: 12, color: '#000000'}}>información de tu propiedad. Nos</span>
            <span style={{fontSize: 12, color: '#000000'}}>contactaremos contigo al instante.</span>
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
            <img src={Step2} alt="Step2"  style={{width: 156, height: 173}}/>
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222', marginTop: 24}}>Obtén tu propuesta inicial de tu</span>
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222'}}>propiedad</span>
            <span style={{fontSize: 12, color: '#000000', marginTop: 24}}>Analizamos las cualidades y ubicación</span>
            <span style={{fontSize: 12, color: '#000000'}}>de tu propiedad para darte una</span>
            <span style={{fontSize: 12, color: '#000000'}}>estimación inicial.</span>
              
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
            <img src={Step3} alt="Step3" style={{width: 212, height: 173}} />
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222', marginTop: 24}}>Acepta la propuesta y recibe tu </span>
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222'}}>dinero en 7 días</span>
            <span style={{fontSize: 12, color: '#000000', marginTop: 24}}>Sin demoras ni terceros</span>
            <span style={{fontSize: 12, color: '#000000'}}>Nosotros compramos tu propiedad.</span>
            
            
        </div>
    </div>
  )
}

