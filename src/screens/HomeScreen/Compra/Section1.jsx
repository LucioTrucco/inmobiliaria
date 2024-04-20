import React from 'react'
import Step1 from './images/section1/Step1.png'
import Step2 from './images/section1/Step2.png'
import Step3 from './images/section1/Step3.png'

export const Section1 = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginTop: '24px', gap: 46}}>
      <div style={{display: 'flex', flexDirection: 'column', position: 'relative', padding: '24px'}}>
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
            <img src={Step1} alt="Step1" />
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222', marginTop: 16}}>Descubre tu hogar ideal</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', position: 'relative', padding: '24px'}}>
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
            <img src={Step2} alt="Step2" />
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222', marginTop: 16}}>Programa un recorrido</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', position: 'relative', padding: '24px'}}>
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
            <img src={Step3} alt="Step3" />
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222', marginTop: 16}}>Haz tu oferta en línea un recorrido</span>
        </div>
    </div>
  )
}

