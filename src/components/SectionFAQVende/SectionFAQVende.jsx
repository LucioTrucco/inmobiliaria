import React, { useState } from 'react'

export const SectionFAQVende = () => {

    const [selectedQuestion, setSelectedQuestion] = useState(0)

  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', width: 1200}}>
        <span style={{fontSize: 32, fontWeight: 700, color: '#FFACA6'}}>Preguntas frecuentes</span>
        <div style={{height: 280}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 24,}}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0px 24px'}}>
                <div style={{display: 'flex', flexDirection: 'column', }}>
                    <span onClick={() => setSelectedQuestion(0)} style={{fontSize: 16, fontWeight: selectedQuestion === 0 ? 700 : 400, color: '#FFFFFF', textAlign: 'right'}}>
                        ¿Qué necesito para comprar una vivienda?
                    </span>
                    <span onClick={() => setSelectedQuestion(1)} style={{fontSize: 16, fontWeight: selectedQuestion === 1 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>
                        ¿Qué pasos debo seguir si quiero vender mi casa?
                    </span>
                    <span onClick={() => setSelectedQuestion(2)} style={{fontSize: 16, fontWeight: selectedQuestion === 2 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>
                    ¿En cuánto tiempo puedo vender mi casa?
                    </span>
                    <span onClick={() => setSelectedQuestion(3)} style={{fontSize: 16, fontWeight: selectedQuestion === 3 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>
                        ¿Puedo vender mi vivienda a Dikala si ya la tengo en venta?
                    </span>
                    <span onClick={() => setSelectedQuestion(4)} style={{fontSize: 16, fontWeight: selectedQuestion === 4 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>
                        ¿Debo pagar para recibir una oferta por mi casa? ¿Cuánto tiempo tengo para aceptarla?
                    </span>
                    <span onClick={() => setSelectedQuestion(5)} style={{fontSize: 16, fontWeight: selectedQuestion === 5 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>
                        ¿Por qué no hay comisiones?
                    </span>
                </div>
            </div>
            <div style={{width: 2, height: 280, background: '#FFFFFF'}}/>
            <div style={{ display: 'flex', flexDirection: 'column',  padding: '0px 24px'}}>
                {selectedQuestion === 0 && <div style={{display: 'flex', flexDirection: 'column', maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Dikala compra una diversidad de propiedades: pisos, casas, áticos, dúplex, así como entresuelos y bajos, sin importar su condición actual. Analizamos detenidamente las características de cada inmueble para asegurarnos de que cumple con nuestros estándares de calidad o para valorar posibles reformas. Si tu propiedad no se ajusta a los criterios de Dikala, te ofreceremos alternativas para facilitar tu venta, incluyendo asesoramiento completo, creación de material de venta y publicidad en nuestra web y en portales inmobiliarios. Te apoyaremos en cada etapa del proceso.
                    </span>
                </div>}
                {selectedQuestion === 1 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Si estás interesado en vender tu propiedad a través de Dikala, el proceso comienza con un simple formulario en nuestro sitio web para darnos una idea general de tu inmueble. Luego, organizaremos una valoración y te haremos una oferta sin compromiso. Si aceptas, te asistiremos paso a paso hasta finalizar la venta de manera rápida y clara.
                    </span>
                </div>}
                {selectedQuestion === 2 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        El proceso de venta con Dikala es ágil y eficiente. Puedes recibir una oferta inicial en apenas 7 días y, si todo concuerda, cerrar la venta en un tiempo que se adapte a tus necesidades.
                    </span>
                </div>}
                {selectedQuestion === 3 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Claro, puedes ofrecernos tu vivienda aunque ya esté en el mercado. Dikala puede hacer una oferta independientemente de si tu casa está siendo promocionada por otras vías, ya que compramos directamente.
                    </span>
                </div>}
                {selectedQuestion === 4 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Recibir una oferta por parte de Dikala es completamente gratis y no te compromete a nada. Te daremos un plazo claro para aceptar la oferta, asegurando que tengas suficiente tiempo para tomar la mejor decisión para ti sin presiones.
                    </span>
                </div>}
                {selectedQuestion === 5 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Dikala elimina los intermediarios y las comisiones asociadas, ya que somos los compradores directos de tu inmueble. Esto simplifica el proceso y lo hace más beneficioso económicamente para ti.
                    </span>
                </div>}
                
            </div>
        </div>
        </div>
    </div>
  )
}

