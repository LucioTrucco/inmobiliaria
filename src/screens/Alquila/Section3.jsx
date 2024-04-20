import React from 'react';
import Diseno from './images/section3/Diseno.png'
import Documentacion from './images/section3/Documentacion.png'
import Legal from './images/section3/Legal.png'
import Limpieza from './images/section3/Limpieza.png'
import Mudanza from './images/section3/Mudanza.png'
import Reformas from './images/section3/Reformas.png'
import Seguros from './images/section3/Seguros.png'
import TechService from './images/section3/TechService.png'


export const Section3 = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 32,
      justifyContent: 'space-between',
      gap: 40,
      width: 1200,
      minWidth: '100%',
      
    }}>
        <div style={{display: 'flex', flexDirection: 'column',  alignItems: 'flex-start', justifyContent: 'center', }}> 
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={Mudanza} alt={'LockIcon'} style={{width: 26, height: 28}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Te ayudamos con la mudanza</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Gestionamos el transporte, carga y descarga de tu mobiliario, facilitando tu traslado.</span>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={Documentacion} alt={'KeyIcon'} style={{width: 28, height: 20}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Suministros y documentación</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Nos encargamos de la transferencia de titularidad de todos los suministros en tu nuevo hogar.</span>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={Seguros} alt={'HandsIcon'} style={{width: 24, height: 25}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Seguros</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Evaluamos y optimizamos tus pólizas de seguros existentes para ofrecerte la mejor cobertura.</span>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={TechService} alt={'Building'} style={{width: 26, height: 26}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Servicio Técnico</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Realizamos reformas y proporcionamos certificación energética para asegurar la eficiencia de tu vivienda.</span>
            </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column',  alignItems: 'flex-start', justifyContent: 'center', }}> 
        
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
              <img src={Limpieza} alt={'KeyIcon'} style={{width: 29, height: 29}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Limpieza</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Ofrecemos limpieza completa para viviendas ocupadas o desocupadas, incluyendo limpiezas profundas.</span>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={Legal} alt={'HandsIcon'} style={{width: 28, height: 28}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Servicio Legal</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Brindamos asesoramiento legal, gestionamos pagos e inscripciones en registros pertinentes.</span>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', alignItems: 'flex-start'}}>
              <img src={Diseno} alt={'LockIcon'} style={{width: 30, height: 25}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Diseño de interiores</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Personaliza tu espacio: solicita mobiliario diseñado para ajustarse a tus preferencias y necesidades.</span>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={Reformas} alt={'Building'} style={{width: 31, height: 28}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Reformas</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Contamos con expertos en fontanería, electricidad, montajes, pintura y más para cualquier arreglo en tu hogar.</span>
            </div>
        </div>
      </div>
    </div>
  );
};
