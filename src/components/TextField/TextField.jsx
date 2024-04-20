import React from 'react';
import './TextField.css'; // Path to your CSS file

export const TextField = ({ label, type = 'text', name, value, onChange,placeholder }) => {
  return (
    <div className="textfield-container">
      <label htmlFor={name} className="textfield-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="textfield-input"
        placeholder={placeholder}
      />
    </div>
  );
};

