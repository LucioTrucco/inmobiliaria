import React from 'react'

export const SectionContainer = ({title, description, children}) => {
  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
        <span style={{fontSize: 32, fontWeight: 700, color: '#000000'}}>{title}</span>
        <span style={{fontSize: 14, fontWeight: 400, color: '#222222'}}>{description}</span>
        {children && children}
    </div>
  )
}

