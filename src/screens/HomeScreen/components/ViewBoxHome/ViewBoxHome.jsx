import React from 'react'
import './ViewBoxHome.css'
import { ViewBoxHomeFooter } from '../ViewBoxHomeFooter/ViewBoxHomeFooter.jsx'
import brandsImage from '../../../../assets/BrandsImage.png'

export const ViewBoxHome = ({selectedValue, setSelectedValue}) => {
  return (
    <>
    <div className='container' style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', justifyContent: 'space-between', width: '60%', background: '#00000080',
     borderRadius: 20, border: '1px solid #DF5E54'}}>
        <div className='topSideContainer' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 0}}>
          {selectedValue === 'Compra' && <>
            <h1>Compra la casa de tus sueños</h1>
            <div style={{width: '25%',padding:'16px 40px', background:'#FE7469', borderRadius: 20}}>
              <span>Quiero comprar</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <span style={{marginTop:12, fontSize: 14, fontWeight:400}}>• Elige entre viviendas remodeladas o por remodelar.</span>
              <span style={{marginTop:12, fontSize: 14, fontWeight:400}}>• Programa una visita, virtual o en persona.</span>
              <span style={{marginTop:12, fontSize: 14, fontWeight:400}}>• Selecciona los acabados y calidades a tu gusto.</span>
            </div>
          </>}
          {selectedValue === 'Vende' && <>
            <h1>Vende tu casa/piso en días</h1>
            <div style={{width: '25%',padding:'16px 40px', background:'#FE7469', borderRadius: 20}}>
              <span>Quiero vender mi casa</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <span style={{marginTop:12, fontSize: 14, fontWeight:400}}>• Compramos tu casa o piso en menos 7 días.</span>
              <span style={{marginTop:12, fontSize: 14, fontWeight:400}}>• Sin comisiones ni papeleos.</span>
              <span style={{marginTop:12, fontSize: 14, fontWeight:400}}>• Obtén tu propuesta inicial a un clic</span>
            </div>
          </>}
          {selectedValue === 'Alquila' && <>
            <h1>Alquila en tu zona preferida</h1>
            <div style={{width: '25%',padding:'16px 40px', background:'#FE7469', borderRadius: 20}}>
              <span>Alquilar</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <span style={{marginTop:12, fontSize: 14, fontWeight:400}}>• Disfruta de pisos recién reformados y listos para habitar.</span>
              <span style={{marginTop:12, fontSize: 14, fontWeight:400}}>• Explora tu próximo hogar con una visita virtual en 3D</span>
              <span style={{marginTop:12, fontSize: 14, fontWeight:400}}>• Obtén tu propuesta inicial a un clic</span>
            </div>
          </>}
        </div>
        <ViewBoxHomeFooter selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
        </div>
        <div > 
        <img src={brandsImage} alt="Descriptive text" />
      </div>
    </>
  )
}

