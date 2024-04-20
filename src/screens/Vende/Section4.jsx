
import React from 'react'
import ImageCouch from './images/section4/Couch.png'


export const Section4 = () => {
  return (
    <div style={{display: 'flex',marginTop:32, position: 'relative',}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center',  alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column',  position:'absolute', top: 0, left: 110, width: 260, height: 134, borderRadius: 12, border: '1px solid #FE7469', background:'#FFE4E2', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
          <h2 style={{fontSize:40, fontWeight: 700, color: '#FE7469', margin: 0 }}>Compra</h2>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{marginTop:0, fontSize: 14, color: '#222222'}}>El espacio que</span>
            <span style={{marginTop:0, fontSize: 14, color: '#222222'}}>refleja tu estilo</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column',  position:'absolute', top: 0, left: 400, width: 260, height: 134, borderRadius: 12, border: '1px solid #FE7469', background:'#FFE4E2', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
          <h2 style={{fontSize:40, fontWeight: 700, color: '#FE7469', margin: 0 }}>Alquila</h2>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{marginTop:0, fontSize: 14, color: '#222222'}}>Tu lugar ideal</span>
            <span style={{marginTop:0, fontSize: 14, color: '#222222'}}>en la zona que amas</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column',  position:'absolute', top: 0, left: 690, width: 260, height: 134, borderRadius: 12, border: '1px solid #FE7469', background:'#FFE4E2', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
          <h2 style={{fontSize:40, fontWeight: 700, color: '#FE7469', margin: 0 }}>Hipoteca</h2>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{marginTop:0, fontSize: 14, color: '#222222'}}>Descubre tu plan</span>
            <span style={{marginTop:0, fontSize: 14, color: '#222222'}}>de pago ideal</span>

          </div>
        </div>
      </div>
      <img src={ImageCouch} alt="Hug" style={{display: 'flex', marginTop: 80}}/>
    </div>
  )
}

