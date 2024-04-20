import React from 'react';
import './Header.css';
import BurgerIcon from '../../assets/BurgerIcon.svg';
import DifalaIcon from '../../assets/DifalaIcon.svg';
import PhoneIcon from '../../assets/PhoneIcon.svg';

export const Header = () => {
  return (
    <div className="header">
      <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', paddingLeft: 24,}}>
      <img src={BurgerIcon} alt="Menu" />
      <img src={DifalaIcon} alt="Logo" style={{paddingLeft: 16}}/>
      </div>
      <div className="phone-container">
        <img src={PhoneIcon} alt="Phone" />
        <span>+34 426 67 57 87</span>
      </div>
    </div>
  );
};

