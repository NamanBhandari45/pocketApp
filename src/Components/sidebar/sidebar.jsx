import React from 'react'
import Style from "./sidebar.module.css"

function sidebar() {
  return (
    <div className={Style.wrapper}>
       <h1>Pocket Notes</h1>
       <div className={Style.button}>+ Create Notes group</div>
    </div>
  )
}

export default sidebar