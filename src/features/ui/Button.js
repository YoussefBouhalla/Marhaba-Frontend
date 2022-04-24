import React from 'react'

function Button( {content ,classes, onClick} ) {
  return (
    <button className={classes} onClick={onClick} >{content}</button>
    )
}

export default Button