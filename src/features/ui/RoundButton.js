import React from 'react'

function RoundButton({classes , Icon, onClick}) {
  return (
    <button className={classes} onClick={onClick}>
        <Icon />
    </button>
  )
}

export default RoundButton