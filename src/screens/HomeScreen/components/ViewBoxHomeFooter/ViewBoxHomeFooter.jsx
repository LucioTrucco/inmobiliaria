import React from 'react'
import './ViewBoxHomeFooter.css'

export const ViewBoxHomeFooter = ({selectedValue, setSelectedValue}) => {
  console.log(selectedValue)
  return (
    
    <div className='containerViewBoxFooter'>
        <span className={`${selectedValue === 'Vende' ? 'selected' : ''}`} >Vende</span>
        <div className='row-divider'/>
        <span className={`${selectedValue === 'Compra' ? 'selected' : ''}`} >Compra</span>
        <div className='row-divider'/>
        <span className={`${selectedValue === 'Alquila' ? 'selected' : ''}`} >Alquila</span>
        <div className='row-divider'/>
        <span className={`${selectedValue === 'Hipoteca' ? 'selected' : ''}`} >Hipoteca</span>
    </div>
  )
}

