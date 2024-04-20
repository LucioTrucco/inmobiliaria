import React from 'react'
import './ViewBoxHomeFooter.css'

export const ViewBoxHomeFooter = ({selectedValue, setSelectedValue}) => {
  console.log(selectedValue)
  return (
    
    <div className='containerViewBoxFooter' style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between',paddingBottom: 48, marginTop: 24, width: '85%'}}>
        <span onClick={() => setSelectedValue('Vende')} className={`${selectedValue === 'Vende' ? 'selected' : ''}`} >Vende</span>
        <div className='row-divider'/>
        <span onClick={() => setSelectedValue('Compra')} className={`${selectedValue === 'Compra' ? 'selected' : ''}`} >Compra</span>
        <div className='row-divider'/>
        <span onClick={() => setSelectedValue('Alquila')} className={`${selectedValue === 'Alquila' ? 'selected' : ''}`} >Alquila</span>
        
    </div>
  )
}

