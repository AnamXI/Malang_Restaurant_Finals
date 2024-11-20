import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    justifyContent: 'center',
    textAlign: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '10px',
    padding: '50px',
    zIndex: 1000  
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 999
}

export default function Modal({ open, children, onClose }) {
    if (!open) return null

  return ReactDom.createPortal(
    <>
        <div style={OVERLAY_STYLES}></div>
        <div style={MODAL_STYLES}>
            <button onClick={onClose}>CLOSE THAT MOTHERFUCKAR</button>
            {children}
        </div>
    </>,
    document.getElementById('portal')
  )
}


