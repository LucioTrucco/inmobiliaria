import React from 'react';

export const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 24}}>
        <div>
        <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      </div>
      <span style={{fontSize:12, color: '#222222', textAlign: 'left'}}>{label}</span>
    </div>
  );
};


