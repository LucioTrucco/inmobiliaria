import React from 'react';
import ImageFamily from './images/section2/ImageFamily.png';
import LockIcon from './images/section2/LockIcon.png'
import KeyIcon from './images/section2/KeyIcon.png'
import HandsIcon from './images/section2/HandsIcon.png'
import BuildingIcon from './images/section2/BuildingIcon.png'

export const Section2 = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 32,
      justifyContent: 'space-between',
      gap: 20,
      width: 1200,
      minWidth: '100%',
      
    }}>
      <div style={{display: 'flex', flexDirection: 'column',  alignItems: 'flex-start', justifyContent: 'center', }}> 
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, alignItems: 'center', justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={LockIcon} alt={'LockIcon'} style={{width: 27, height: 27}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Agil y seguro</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Todo el proceso de reserva y manejo de documentos es 100% online.</span>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, alignItems: 'center', justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={KeyIcon} alt={'KeyIcon'} style={{width: 27, height: 27}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Nuevo y de alquiler</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Pisos listos para habitar, completamente reformados para ti.</span>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, alignItems: 'center', justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={HandsIcon} alt={'HandsIcon'} style={{width: 27, height: 27}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Alquila directamente con nosotros</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Sin comisiones de agencia, somos los propietarios, sin sorpresas ni intermediarios.</span>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 32, minWidth: 600, alignItems: 'center', justifyContent: 'flex-start',}}>
            <div style={{width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={BuildingIcon} alt={'Building'} style={{width: 27, height: 27}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 12}}>
                <span style={{fontSize: 16, fontWeight: 700, color: '#FE7469', textAlign: 'left'}}>Amplia oferta y opciones</span>
                <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left', marginTop: 4}}>Amplia y constante disponibilidad de pisos para asegurar que encuentres el ideal.</span>
            </div>
        </div>
      </div>
      
      <div style={{ width: '50%', maxWidth: '50%' }}> 
        <img src={ImageFamily} alt="Hug" style={{ width: 530, height: 353, display: 'block', marginTop: 80 }}/>
      </div>
      
    </div>
  );
};
