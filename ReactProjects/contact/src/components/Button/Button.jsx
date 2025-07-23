import React from 'react'

import css from "./Button.module.css";
const Button = (props) => {
  const {isOutline, icon , title, ...rest} = props;
  return (
        <buttno className={isOutline ?  css.secondryBtn : css.primary_btn}>
          {icon}
          {title}
        </buttno>
  )
}

export default Button
