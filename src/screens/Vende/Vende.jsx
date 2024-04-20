import React from 'react'
import { SectionContainer } from '../../components/SectionContainer/SectionContainer'
import { Section1 } from './Section1'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import { Section4 } from './Section4'
import { SectionFooter } from '../../components/SectionFooter/SectionFooter'
import { SectionFAQVende } from '../../components/SectionFAQVende/SectionFAQVende'

export const Vende = () => {
  return (
    <>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <SectionContainer title={'¿Cómo se vende?'} >
        <Section1/>
      </SectionContainer>
    </div>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#f7f7f7'}}>
      <SectionContainer title={'¿Por qué vender con Dikala?'} description={'Transformamos el método de vender tu casa'}>
        <Section2/>
      </SectionContainer>
    </div>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh',}}>
    <SectionContainer title={'Esto dicen nuestros clientes'} description={'Transformamos el método de vender tu casa'}>        
      <Section3/>
    </SectionContainer>
    </div>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#f7f7f7'}}>
      <SectionContainer title={'¿Qué más puedes hacer con nosotros?'} description={'Disfruta el cambio de casa sin estrés.'}>
        <Section4/>
      </SectionContainer>
    </div>
    
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background:'#606060'}}>
      <SectionFAQVende/>
    </div>
    <SectionFooter/>
    </>
  )
}

