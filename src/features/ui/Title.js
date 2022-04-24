import React from 'react'

function Title({classes , content , color}) {
  return (
    <h2 className={classes} style={{color}}>{content}</h2>
  )
}

export default Title