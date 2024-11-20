import React from 'react'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: '50px',
    zIndex: 1000  
}

export default function Modal({ open, children, onClose }) {
    if (!open) return null

  return (
    <div style={MODAL_STYLES}>
        <button onClick={onClose}>CLOSE THAT MOTHERFUCKAR</button>
        {children}
    </div>
  )
}
