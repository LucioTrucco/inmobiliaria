import React, { useState } from 'react';
import './Contact.css'; // Make sure the .scroll-container styles are defined here
import { Header } from '../../components/Header/Header';
import { TextField } from '../../components/TextField/TextField';
import { Checkbox } from '../../components/Checkbox/Checkbox';

export const Contact = () => {

  const [checkboxPrivacy, setCheckboxPrivacy] = useState(false);
  const [checkboxPersonalData, setCheckboxPersonalData] = useState(false);

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    CP: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChangePrivacy = (event) => {
    setCheckboxPrivacy(event.target.checked);
  };

  const handleCheckboxChangeData = (event) => {
    setCheckboxPersonalData(event.target.checked);
  };

  const handleSubmit = async () => {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxEtSGyq5DnJut-r37dKbBHtx44l5Tv_v4Xs3ZIFMB375qqYq4D0BePIMOULseLpMOKcg/exec';
    const formData = {
      ...form,
    };
  
    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      alert('Formulario enviado con éxito.');
    } catch (error) {
      console.error('Could not submit form data: ', error);
      alert('Hubo un error al enviar el formulario.');
    }
  };

  return (
    <div className='scroll-container-contact'>
      <div style={{padding: 24}}>
        <Header />
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: 24 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '85%',
          gap: '48px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: 250 }}>
            <h1 style={{ textAlign: 'left', fontSize: 72, fontWeight: 700, color: '#000000', lineHeight:1 }}>Gestionamos la venta de tu casa de principio a fin</h1>
            <h3 style={{ textAlign: 'left', fontSize: 32, fontWeight: 400, marginTop: -20 }}>Disfruta de la tranquilidad de tener el 100% de los trámites resueltos. Solo pagas si vendes (NO hay gastos ocultos).</h3>
          </div>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            width: '100%', 
            background: '#fff', 
            borderRadius: 12, 
          }}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',padding: '48px 48px 12px 48px'}}>
              <span style={{fontSize: 32, fontWeight: 700, color: '#222222', textAlign: 'left'}}>Habla con un experto</span>
              <span style={{fontSize: 14, fontWeight: 400, color: '#222222', textAlign: 'left'}}>Un asesor comercial te asesorará en el proceso y te dará una valoración de tu inmueble.</span>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: 12,}}>
                <div style={{width: 50}}>
                  <span style={{fontSize: 40, fontWeight: 700,color: '#FFACA6'}}>01</span>
                </div>
                <div style={{flex: 1, marginLeft: 14}}>
                <TextField
                  label="Nombre*"
                  name="nombre"
                  value={form.nombre}
                  placeholder='Carlos'
                  onChange={handleChange}
                /></div>
              </div>
              <div style={{marginTop: 0, display: 'flex', flexDirection: 'row'}}>
                <div style={{width: 50}}>
                  <span style={{fontSize: 40, fontWeight: 700,color: '#FFACA6'}}>02</span>
                </div>
                <div style={{flex: 1, marginLeft: 14}}>
                <TextField
                  label="Apellidos*"
                  name="apellido"
                  value={form.apellido}
                  placeholder='Martinez'
                  onChange={handleChange}
                /></div>
              </div>
              <div style={{marginTop: 0, display: 'flex', flexDirection: 'row'}}>
                <div style={{width: 50}}>
                  <span style={{fontSize: 40, fontWeight: 700,color: '#FFACA6'}}>03</span>
                </div>
                <div style={{flex: 1, marginLeft: 14}}>
                <TextField
                  label="Email*"
                  name="email"
                  value={form.email}
                  placeholder='carlos@email.com'
                  onChange={handleChange}
                /></div>
              </div>
              <div style={{marginTop: 0, display: 'flex', flexDirection: 'row'}}>
                <div style={{width: 50}}>
                  <span style={{fontSize: 40, fontWeight: 700,color: '#FFACA6'}}>04</span>
                </div>
                <div style={{flex: 1, marginLeft: 14}}>
                <TextField
                  label="Teléfono móvil*"
                  name="telefono"
                  value={form.telefono}
                  placeholder='606 00 00 00'
                  onChange={handleChange}
                /></div>
              </div>
              <div style={{marginTop: 0, display: 'flex', flexDirection: 'row'}}>
                <div style={{width: 50}}>
                  <span style={{fontSize: 40, fontWeight: 700,color: '#FFACA6'}}>05</span>
                </div>
                <div style={{flex: 1, marginLeft: 14}}>
                  <TextField
                    label="Dirección*"
                    name="direccion"
                    value={form.direccion}
                    placeholder='Calle Verdaguer 5, 4° 1°'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div style={{marginTop: 0, display: 'flex', flexDirection: 'row'}}>
                <div style={{width: 50}}>
                  <span style={{fontSize: 40, fontWeight: 700,color: '#FFACA6'}}>06</span>
                </div>
                <div style={{flex: 1, marginLeft: 14}}>
                  <TextField
                    label="Código postal**"
                    name="CP"
                    value={form.CP}
                    placeholder='08033'
                    onChange={handleChange}
                  />
                </div>
                
                
              </div>
              <div style={{display: 'flex',  marginLeft: 14}}>
                <Checkbox label='¿Consientes el tratamiento de tus datos personales por parte del GRUPO DIKALA para ofrecerte información y promociones que puedan ser de tu interés?' 
                  checked={checkboxPersonalData} onChange={handleCheckboxChangeData}/>
              </div>
              <div style={{display: 'flex',  marginLeft: 14, marginTop: 14,}}>
              <Checkbox label='* Acepto el Aviso de Privacidad y los Términos y Condiciones.' 
                  checked={checkboxPrivacy} onChange={handleCheckboxChangePrivacy}/>
                <span style={{fontSize:12, color: '#222222', textAlign: 'left'}}></span>
              </div>
            </div>
            <div style={{ display: 'flex', marginBottom: 16, padding:'16px 40px', background:'#FE7469', borderRadius: 20}} onClick={handleSubmit}>
              <span>Quiero comprar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

