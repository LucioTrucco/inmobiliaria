import React, { useState } from 'react';
import './HomeScreenStyles.css';
import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { ViewBoxHome } from './components/ViewBoxHome/ViewBoxHome.jsx';
import {Compra} from './../Compra/Compra.jsx'
import { Vende } from '../Vende/Vende.jsx';
import { Alquila } from '../Alquila/Alquila.jsx';

export const HomeScreen = () => {
  const [selectedValue, setSelectedValue] = useState('Compra');

    const scrollToTop = (value) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smooth scrolling
      });
      setSelectedValue(value)
    }
  

  return (
    <div className='scroll-container'>
      <div className='body-background'>
        <div className='content-container'>
          <Header />
          <ViewBoxHome selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
          <Footer selectedValue={selectedValue} />
        </div>
      </div>
    {selectedValue === 'Compra' ? <Compra scrollToTop={scrollToTop} /> : null}
    {selectedValue === 'Vende' ? <Vende scrollToTop={scrollToTop}/> : null}
    {selectedValue === 'Alquila' ? <Alquila scrollToTop={scrollToTop}/> : null}
      
     
    </div>
  );
};
