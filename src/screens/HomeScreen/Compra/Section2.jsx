import React from 'react'
import Step1 from './images/section2/Step1.png'
import Step2 from './images/section2/Step2.png'
import Step3 from './images/section2/Step3.png'
import Ellipse1 from './images/section2/Ellipse1.png'
import Ellipse2 from './images/section2/Ellipse2.png'
import Ellipse3 from './images/section2/Ellipse3.png'

export const Section2 = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginTop: '24px', gap: 46}}>
        <div style={{display: 'flex', flexDirection: 'column', position: 'relative', padding: '24px', alignItems: 'center'}}> 
            <div style={{position: 'relative'}}> 
                <div style={{position:'absolute', zIndex: 0, marginLeft: -20, marginTop:60}}>
                <img src={Ellipse1} alt="Ellipse1" style={{ transform: 'rotate(-118deg)' }}/>
                </div>
                <img src={Step1} alt="Step1" style={{width: 239, height: 227, position: 'relative', zIndex: 1}}/> 
            </div>
            <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', marginTop: 16}}>Transparencia en el coste</span>
            <span style={{fontSize: 12, fontWeight: 400, color: '#222222', marginTop: 4}}>Pagas un único importe fijo por nuestro servicio.</span>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', position: 'relative', padding: '24px', alignItems: 'center'}}> 
            <div style={{position: 'relative'}}> 
                <div style={{position:'absolute', zIndex: 0, right:0, marginRight: -20 , marginTop:60}}>
                <img src={Ellipse2} alt="Ellipse1" style={{ transform: 'rotate(-156deg)' }}/>
                </div>
                <img src={Step2} alt="Step1" style={{width: 239, height: 227, position: 'relative', zIndex: 1}}/> 
            </div>
            <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', marginTop: 16}}>Agenda una visitas a un clic</span>
            <span style={{fontSize: 12, fontWeight: 400, color: '#222222', marginTop: 4}}>Elige entre una visita presencial o una virtual en 3D.</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', position: 'relative', padding: '24px', alignItems: 'center'}}> 
            <div style={{position: 'relative'}}> 
                <div style={{position:'absolute', zIndex: 0, right: 0, marginTop:-10, marginRight: -10}}>
                <img src={Ellipse3} alt="Ellipse1" style={{ transform: 'rotate(64deg)' }}/>
                </div>
                <img src={Step3} alt="Step1" style={{width: 239, height: 227, position: 'relative', zIndex: 1}}/> 
            </div>
            <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', marginTop: 16}}>Te acompañamos en todo</span>
            <span style={{fontSize: 12, fontWeight: 400, color: '#222222', marginTop: 4}}>Desde tu primera visita hasta la firma de las escrituras.</span>
        </div>
    </div>
  )
}

