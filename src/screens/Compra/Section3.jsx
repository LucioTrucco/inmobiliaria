import React from 'react'
import Switch from './images/section3/Switch.png'
import MiddleImage from './images/section3/MiddleImage.png'

export const Section3 = () => {
  return (
    <div style={{marginTop: 24}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 32}}>
            <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469'}}>Remodelada</span>
            <img src={Switch} alt="Ellipse1"  style={{margin: '0px 24px'}}/>
            <span style={{fontSize: 16, fontWeight: 700, color: '#222222'}}>Sin Remodelar</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', }}>
            <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '8px solid #FE7469', paddingLeft: 24}}>
                <div style={{display: 'flex', flexDirection: 'column', }}>
                    <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Certificado Dikala</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 8}}>Tu hogar nuevo y listo para habitar. Con certificado energético y materiales </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'left',}}>de alta calidad que aumentan su valor.</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: 32}}>
                    <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Diseña la casa de tus sueños</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 8}}>Personaliza los materiales y acabados de todas las estancias si adquieres</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'left',}}>propiedad antes de finalizar la reforma.</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: 32}}>
                    <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Visitas virtuales Dikala</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 8}}>Utilizamos tecnología 3D hiperrealista que te permite explorar cada rincón</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'left',}}>de tu futuro hogar desde la comodidad de tu casa.</span>
                </div>
            </div>
            <img src={MiddleImage} alt="MiddleImage"  style={{margin: '0px 24px'}}/>
            <div style={{ display: 'flex', flexDirection: 'column', borderRight: '8px solid #F7F7F7', paddingRight: 24}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'right'}}>Conviértela en una oportunidad de Inversión</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'right', marginTop: 8}}>Haz de tu propiedad una residencia permanente o alquílala para obtener un</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'right',}}>retorno óptimo en tu inversión.</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: 32}}>
                    <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'right'}}>Transforma tu Casa, en la casa de tus sueños</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'right', marginTop: 8}}>Personaliza las reformas según tus gustos, emprende los cambios por tu cuenta</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'right',}}>o selecciona pisos ya acondicionados en las mejores zonas de la ciudad.</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: 32}}>
                    <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'right'}}>Aumenta el Valor de tu Vivienda</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'right', marginTop: 8}}>Investiga alternativas de compra que encajen con tu presupuesto, invierte </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#222222', textAlign: 'right',}}>progresivamente y aumenta significativamente el valor de tu inmueble.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

