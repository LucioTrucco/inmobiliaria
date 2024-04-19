import React from 'react'
import './ViewBoxHome.css'
import { ViewBoxHomeFooter } from '../ViewBoxHomeFooter/ViewBoxHomeFooter.tsx'

export const ViewBoxHome = () => {
  return (
    <div className='container'>
        <div className='topSideContainer'>
          <h1>Compra la casa de tus sueños</h1>
          <div style={{width: '25%',padding:'16px 40px', background:'#FE7469', borderRadius: 20}}>
            <span>Quiero comprar</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <span style={{marginTop:24, fontSize: 14, fontWeight:400}}>- Elige entre viviendas remodeladas o por remodelar.</span>
          <span style={{marginTop:12, fontSize: 14, fontWeight:400}}>- Programa una visita, virtual o en persona.</span>
          <span style={{marginTop:12, fontSize: 14, fontWeight:400}}>- Selecciona los acabados y calidades a tu gusto.</span>
          </div>
          
        </div>
        <ViewBoxHomeFooter/>
    </div>
  )
}

