import React, { useState } from 'react'

export const SectionFAQAlquila = () => {

    const [selectedQuestion, setSelectedQuestion] = useState(0)

  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', width: 1200}}>
        <span style={{fontSize: 32, fontWeight: 700, color: '#FFACA6'}}>Preguntas frecuentes</span>
        <div style={{height: 280}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 24,}}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0px 24px'}}>
                <div style={{display: 'flex', flexDirection: 'column', }}>
                    <span onClick={() => setSelectedQuestion(0)} style={{fontSize: 16, fontWeight: selectedQuestion === 0 ? 700 : 400, color: '#FFFFFF', textAlign: 'right'}}>¿Qué ventajas tiene alquilar con Dikala?</span>
                    <span onClick={() => setSelectedQuestion(1)} style={{fontSize: 16, fontWeight: selectedQuestion === 1 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>¿Debo pagar comisiones? ¿Qué necesito para entrar a vivir en un piso de alquiler?</span>
                    <span onClick={() => setSelectedQuestion(2)} style={{fontSize: 16, fontWeight: selectedQuestion === 2 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>Una vez me decido a alquilar una vivienda de Dikala, ¿cuáles son los pasos a seguir?</span>
                    <span onClick={() => setSelectedQuestion(3)} style={{fontSize: 16, fontWeight: selectedQuestion === 3 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>¿Cómo son las visitas a las viviendas de Dikala?</span>
                    <span onClick={() => setSelectedQuestion(4)} style={{fontSize: 16, fontWeight: selectedQuestion === 4 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>¿Los inmuebles que puedo alquilar están amueblados?</span>
                    <span onClick={() => setSelectedQuestion(5)} style={{fontSize: 16, fontWeight: selectedQuestion === 5 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>¿Cómo puedo gestionar mis incidencias?</span>
                    <span onClick={() => setSelectedQuestion(6)} style={{fontSize: 16, fontWeight: selectedQuestion === 6 ? 700 : 400, color: '#FFFFFF', textAlign: 'right', marginTop: 20}}>Ventajas del servicio de alquiler con Dikala:</span>
                </div>
            </div>
            <div style={{width: 2, height: 320, background: '#FFFFFF'}}/>
            <div style={{ display: 'flex', flexDirection: 'column',  padding: '0px 24px'}}>
                {selectedQuestion === 0 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Alquilar con Dikala te permite disfrutar de viviendas recién reformadas, listas para mudarte y sin la necesidad de pagar comisiones de agencia. Todo el proceso es online para máxima comodidad y seguridad.
                    </span>
                    
                </div>}
                {selectedQuestion === 1 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        No, no hay comisiones de agencia al alquilar con Dikala. Solo necesitas completar tu documentación y cumplir con los requisitos financieros para mudarte.
                    </span>
                </div>}
                {selectedQuestion === 2 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Después de decidirte, deberás enviar tu solicitud, completar la documentación necesaria, y una vez aprobada, puedes proceder a la firma del contrato y coordinar tu mudanza.
                    </span>
                </div>}
                {selectedQuestion === 3 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Las visitas pueden ser presenciales o virtuales, utilizando nuestra tecnología de visitas 3D para que puedas explorar la propiedad desde cualquier lugar.                    </span>
                    
                </div>}
                {selectedQuestion === 4 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                    Ofrecemos tanto inmuebles amueblados como sin amueblar, permitiéndote elegir según tus necesidades y preferencias.
                    </span>
                </div>}
                {selectedQuestion === 5 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                        Puedes gestionar cualquier incidencia fácilmente a través de tu área privada de inquilino en nuestro sitio web, donde también puedes consultar documentos y el estado de tus solicitudes.
                    </span>
                </div>}
                {selectedQuestion === 6 && <div style={{display: 'flex', flexDirection: 'column',maxWidth: 550}}>
                    <span style={{fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left'}}>
                    Gracias a Dikala, tienes la oportunidad de estrenar una vivienda recién reformada, con el máximo confort y sin preocupaciones adicionales. El proceso completo de alquiler es digital, lo que te permite tener acceso inmediato a toda la documentación necesaria y gestionar tus solicitudes de manera segura y eficiente desde tu área privada. Al ser propietarios de las viviendas que alquilamos, eliminamos la necesidad de intermediarios y, por lo tanto, las comisiones relacionadas.
                    </span>
                </div>}
                
            </div>
        </div>
        </div>
    </div>
  )
}

