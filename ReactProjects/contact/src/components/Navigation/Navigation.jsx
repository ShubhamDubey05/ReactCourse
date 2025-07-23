import React from 'react'
import css from './Navigation.module.css'

const Navigation = () => {
  return (
   <nav className={css.main}>
     <div>
 <img src="/image/logo.png"
 className={css.logo}alt="Logo" />
     </div>
     <ul className={css.list}>
      <li>Home</li>
       <li>About</li>
        <li>contact</li>
     </ul>
   </nav>
  )
}

export default Navigation
