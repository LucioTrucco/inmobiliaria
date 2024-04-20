import React, { useState } from 'react';
import './HomeScreenStyles.css';
import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { ViewBoxHome } from './components/ViewBoxHome/ViewBoxHome.jsx';
import {Compra} from './../Compra/Compra.jsx'
import { Vende } from '../Vende/Vende.jsx';

export const HomeScreen = () => {
  const [selectedValue, setSelectedValue] = useState('Compra');

  return (
    <div className='scroll-container'>
      <div className='body-background'>
        <div className='content-container'>
          <Header />
          <ViewBoxHome selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
          <Footer />
        </div>
      </div>
    {selectedValue === 'Compra' ? <Compra /> : null}
    {selectedValue === 'Vende' ? <Vende /> : null}
      
     
    </div>
  );
};
