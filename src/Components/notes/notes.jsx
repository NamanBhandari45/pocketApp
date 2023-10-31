import React from 'react'
import Style from './notes.module.css'
import Icon from './icon.png'
import svg from './Vector.svg'

function notes() {
  return (
    <div className={Style.container}>
    <img className={Style.icon} src={Icon} alt='icon' />
    <h1 className={Style.heading}>Pocket Notes</h1>
    <p>Send and receive messages without keeping your phone online. 
     <br></br>
    Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    <footer style={{marginTop:'130px'}}>
        <span><img 
        src={svg} alt='svg'/>
            end-to-end encrypted</span>
    </footer>
   </div>
  )
}

export default notes