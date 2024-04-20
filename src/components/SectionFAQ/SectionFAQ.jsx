import React, { useState } from 'react'

export const SectionFAQ = () => {

    const [selectedQuestion, setSelectedQuestion] = useState(0)

  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', width: 1200}}>
        <span style={{fontSize: 32, fontWeight: 700, color: '#FFACA6'}}>Preguntas frecuentes</span>
        <div style={{height: 280}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 24,}}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0px 24px'}}>
                <div style={{display: 'flex', flexDirection: 'column', }}>
                    <span onClick={() => setSelectedQuestion(0)} style={{fontSize: 16, fontWeight: selectedQuestion === 0 ? 700 : 400, color: '#FFFFFF', textAlign: 'right'}}>¿Qué necesito para comprar una vivienda?</span>
                    <span onClick={() => setSelectedQuestion(1)} style={{fontSize: 16, fontWeight: selectedQuestion === 1 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>¿Cuál es el coste del servicio de comprar una vivienda con Dikala?</span>
                    <span onClick={() => setSelectedQuestion(2)} style={{fontSize: 16, fontWeight: selectedQuestion === 2 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>¿Puede Dikala gestionarme la hipoteca de mi vivienda?</span>
                    <span onClick={() => setSelectedQuestion(3)} style={{fontSize: 16, fontWeight: selectedQuestion === 3 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>¿En qué estado están los inmuebles que puedes comprar en Dikala?</span>
                    <span onClick={() => setSelectedQuestion(4)} style={{fontSize: 16, fontWeight: selectedQuestion === 4 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>¿Los inmuebles que puedo comprar están amueblados?</span>
                    <span onClick={() => setSelectedQuestion(5)} style={{fontSize: 16, fontWeight: selectedQuestion === 5 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>¿Puedo realizar visitas presenciales o virtuales?</span>
                </div>
            </div>
            <div style={{width: 2, height: 280, background: '#FFFFFF'}}/>
            <div style={{ display: 'flex', flexDirection: 'column',  padding: '0px 24px'}}>
                {selectedQuestion === 0 && <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>Para adquirir una vivienda, necesitarás disponer de ahorros para el pago inicial y</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',}}>documentación actualizada que respalde tu capacidad económica. Dikala puede guiarte</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',}}>en la preparación de todos los documentos necesarios.</span>
                </div>}
                {selectedQuestion === 1 && <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>El coste de nuestros servicios varía según la propiedad y las necesidades específicas del</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',}}>comprador. Ofrecemos una estructura de precios clara y sin sorpresas.</span>
                </div>}
                {selectedQuestion === 2 && <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>Sí, en Dikala contamos con expertos en financiación que pueden ayudarte a gestionar la</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',}}>hipoteca más adecuada para ti, facilitando todo el proceso.</span>
                </div>}
                {selectedQuestion === 3 && <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>Nuestros inmuebles están en diversas condiciones, desde listos para entrar a vivir hasta </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',}}>opciones ideales para quienes deseen realizar reformas personalizadas.</span>
                </div>}
                {selectedQuestion === 4 && <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>Ofrecemos tanto inmuebles amueblados como sin amueblar, adaptándonos a las </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',}}>preferencias y necesidades de nuestros clientes.</span>
                </div>}
                {selectedQuestion === 5 && <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>Absolutamente, en Dikala facilitamos tanto visitas presenciales como virtuales, utilizando</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',}}>tecnología de última generación para garantizar que puedas explorar las propiedades</span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',}}>comodamente.</span>
                </div>}
                
            </div>
        </div>
        </div>
    </div>
  )
}

