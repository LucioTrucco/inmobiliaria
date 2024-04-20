import React from 'react'
import { SectionContainer } from '../../components/SectionContainer/SectionContainer'
import { Section1 } from './Section1'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import { Section4 } from './Section4'
import { Section5 } from './Section5'
import { SectionFAQCompra } from '../../components/SectionFAQCompra/SectionFAQCompra'
import { SectionFooter } from '../../components/SectionFooter/SectionFooter'

export const Compra = ({scrollToTop}) => {
  return (
    <>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <SectionContainer title={'¿Cómo se realiza la compra?'} description={'Estamos contigo desde el principio para agilizar tu experiencia y eliminar obstáculos.'}>
        <Section1/>
      </SectionContainer>
    </div>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#f7f7f7'}}>
      <SectionContainer title={'¿Porque comprar con Dikala?'} description={'¡Es fácil! Solo disfruta mudarte a tu nueva casa.'}>
        <Section2/>
      </SectionContainer>
    </div>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh',}}>
      <SectionContainer title={'Personaliza tu hogar'} description={'Selecciona el tipo de vivienda que prefieras para que tu compra se adapte perfectamente a tus necesidades.'}>
        <Section3/>
      </SectionContainer>
    </div>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#f7f7f7'}}>
      <SectionContainer title={'Esto dicen nuestros clientes'} description={'Transformamos el método de vender tu casa'}>
        <Section4/>
      </SectionContainer>
    </div>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <SectionContainer title={'¿Buscas financiación?'} description={'Facilitamos la compra de la casa de tus sueños.'} description2={'Analizamos tu situación sin coste para ofrecerte las mejores alternativas financieras disponibles en solo 30 días.'}>
        <Section5/>
      </SectionContainer>
    </div>
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background:'#606060'}}>
      <SectionFAQCompra/>
    </div>
      <SectionFooter scrollToTop={scrollToTop}/>
    </>
  )
}

