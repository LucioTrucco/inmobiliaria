import React, { useState } from 'react'

export const SectionFAQCompra = () => {

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
            <div style={{width: 2, height: 320, background: '#FFFFFF'}}/>
            <div style={{ display: 'flex', flexDirection: 'column',  padding: '0px 24px'}}>
                {selectedQuestion === 0 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Para adquirir una vivienda, necesitarás disponer de ahorros para el pago inicial y documentación actualizada que respalde tu capacidad económica. Dikala puede guiarte en la preparación de todos los documentos necesarios.
                    </span>
                    
                </div>}
                {selectedQuestion === 1 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        El coste de nuestros servicios varía según la propiedad y las necesidades específicas del comprador. Ofrecemos una estructura de precios clara y sin sorpresas.
                    </span>
                </div>}
                {selectedQuestion === 2 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Sí, en Dikala contamos con expertos en financiación que pueden ayudarte a gestionar la hipoteca más adecuada para ti, facilitando todo el proceso.
                    </span>
                </div>}
                {selectedQuestion === 3 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Nuestros inmuebles están en diversas condiciones, desde listos para entrar a vivir hasta opciones ideales para quienes deseen realizar reformas personalizadas.
                    </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left', marginTop:12}}>
                        Inmuebles para renovar: Te ofrecemos viviendas a precios accesibles, ideales para aquellos que desean personalizar su espacio completamente y hacerlo suyo, con la posibilidad de invertir en su potencial.
                    </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',marginTop:12}}>
                        Inmuebles en condiciones óptimas: Contamos con casas y apartamentos que no requieren reformas adicionales y están listos para mudarse de inmediato.
                    </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',marginTop:12}}>
                        Inmuebles totalmente reformados: Estas viviendas han sido transformadas completamente, con mejoras en la distribución y modernización de materiales y acabados, diseñadas por los arquitectos de Dikala para maximizar la comodidad, la eficiencia energética y la sostenibilidad.
                    </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',marginTop:12}}>
                        Inmuebles parcialmente rehabilitados: Ofrecemos propiedades con renovaciones selectivas, especialmente en áreas como cocinas y baños, lo que les proporciona una actualización significativa sin la necesidad de una reforma total
                    </span>
                </div>}
                {selectedQuestion === 4 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                    Ofrecemos tanto inmuebles amueblados como sin amueblar, adaptándonos a las preferencias y necesidades de nuestros clientes.
                    </span>
                </div>}
                {selectedQuestion === 5 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Absolutamente, en Dikala facilitamos tanto visitas presenciales como virtuales, utilizando tecnología de última generación para garantizar que puedas explorar las propiedades cómodamente.
                    </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left', marginTop:12}}>
                    Aspectos clave al comprar una vivienda:
                    </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',marginTop:12}}>
                        - Ahorros: Si requieres financiación hipotecaria, usualmente necesitarás al menos el 30% del precio de compra en ahorros, además de demostrar estabilidad financiera para la aprobación del préstamo.
                    </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',marginTop:12}}>
                        - Visitas y tiempo: La compra de una vivienda requiere dedicación para la búsqueda y el proceso de compra. En Dikala, nuestras visitas virtuales te ayudan a optimizar este tiempo.
                    </span>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left',marginTop:12}}>
                        - Documentación: Es vital tener la documentación adecuada, como la nota simple del Registro de la Propiedad y la información catastral, que verifiquen la legalidad y el estado de la propiedad. En Dikala, nos aseguramos de que toda la documentación esté correcta y actualizada para tu tranquilidad. Además, para la financiación, podemos requerir documentos adicionales como nóminas o declaraciones fiscales para evaluar tu solvencia.
                    </span>

                </div>}
                
            </div>
        </div>
        </div>
    </div>
  )
}

