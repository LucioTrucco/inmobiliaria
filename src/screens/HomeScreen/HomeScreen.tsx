import React from 'react'
import './HomeScreenStyles.css';
import { Header } from '../../components/Header/Header.tsx';
import { Footer } from '../../components/Footer/Footer.tsx';
import { ViewBoxHome } from './components/ViewBoxHome/ViewBoxHome.tsx';


export const HomeScreen = () => {
  return (
    <div className='body-background' style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
      <div style={{padding:'24px', borderRadius: '24px'}}>
        <Header/>
      </div>
      <ViewBoxHome/>
      <div style={{padding:'24px', borderRadius: '24px'}}>
        <Footer/>
      </div>
    </div>
  )
}



