import React from 'react'
import { SectionContainer } from '../../components/SectionContainer/SectionContainer'
import { Section1 } from './Section1'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import { SectionFooter } from '../../components/SectionFooter/SectionFooter'
import { SectionFAQAlquila } from '../../components/SectionFAQAlquila/SectionFAQAlquila'

export const Alquila = ({scrollToTop}) => {
  return (
    <>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <SectionContainer title={'¿Cómo funciona el proceso de alquiler?'} description={'Selecciona las características, precios y ubicaciones que prefieras.'}>
        <Section1/>
      </SectionContainer>
    </div>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#f7f7f7'}}>
      <SectionContainer title={'¿Por qué alquilar con Dikala?'} description={'Conoce tus opciones sin compromiso, gastos adicionales y todo de manera ágil y online'}>
        <Section2/>
      </SectionContainer>
    </div>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh',}}>
    <SectionContainer title={'Servicios adicionales'} description={'Optimiza tu cambio de residencia con nuestro soporte integral.'}>        
      <Section3/>
    </SectionContainer>
    </div>
    
    
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background:'#606060'}}>
      <SectionFAQAlquila/>
    </div>
      <SectionFooter scrollToTop={scrollToTop}/>
    </>
  )
}

