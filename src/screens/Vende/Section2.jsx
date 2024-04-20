
import React from 'react'
import ImageTable from './images/section2/ImageTable.png'


export const Section2 = () => {
  return (
    <div style={{display: 'flex',marginTop:32, position: 'relative',}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center',  alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column',  position:'absolute', top: 0, left: 110, width: 260, height: 134, borderRadius: 12, border: '1px solid #FE7469', background:'#FFE4E2', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
          <h2 style={{fontSize:40, fontWeight: 700, color: '#FE7469', margin: 0 }}>+ 70.000</h2>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{marginTop:0, fontSize: 14, color: '#222222'}}>Ofertas entregadas en</span>
            <span style={{marginTop:0, fontSize: 14, color: '#222222'}}>menos de 24 horas</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column',  position:'absolute', top: 0, left: 400, width: 260, height: 134, borderRadius: 12, border: '1px solid #FE7469', background:'#FFE4E2', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
          <h2 style={{fontSize:40, fontWeight: 700, color: '#FE7469', margin: 0 }}>+ 9.000</h2>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{marginTop:0, fontSize: 14, color: '#222222'}}>Propiedades vendidas</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column',  position:'absolute', top: 0, left: 690, width: 260, height: 134, borderRadius: 12, border: '1px solid #FE7469', background:'#FFE4E2', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
          <h2 style={{fontSize:40, fontWeight: 700, color: '#FE7469', margin: 0 }}>+ 4.000</h2>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{marginTop:0, fontSize: 14, color: '#222222'}}>Clientes satisfechos</span>
          </div>
        </div>
      </div>
      <img src={ImageTable} alt="Hug" style={{display: 'flex', marginTop: 80}}/>
    </div>
  )
}

