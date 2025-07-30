import React from 'react'
import css from "./Button.module.css"

function Button() {
  const btns = ['C', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '/']

  return (
    <div className={css.btncontainer}>
      {
        btns.map((btn) => (
          <button key={btn} className={css.btn}>{btn}</button>
        ))
      }
    </div>
  )
}

export default Button
