import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    display: 'block',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    borderRadius: '40px',
    color: '#000000',
    padding: '50px',
    zIndex: 1000,
    width: '80%'
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

export default function Modal({ open, children, onClose, title }) {
    if (!open) return null

  return ReactDom.createPortal(
    <>
        <div style={OVERLAY_STYLES}></div>
        <div style={MODAL_STYLES}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            
        <div style={{display:'flex', alignItems:'center'}}>
                <div style={{backgroundImage: 'url("assets/Matsala.png")', 
                    width:'100px', height:'100px', backgroundSize:'cover',
                    position:'relative', marginRight:'20px'}}>                    
                </div>
                <h1 style={{fontSize:'clamp(20px, 5vw, 50px)'}}>{title}</h1>
        </div>
                <button onClick={onClose}>CLOSE</button>

            </div>
            {children}
            
        </div>
    </>,
    document.getElementById('portal')
  )
}

