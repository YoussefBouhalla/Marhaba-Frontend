import React from 'react'

function Alert({message , opacity}) {
  return (
    <div className='app_alert py-3 px-2 font_12px font_500' style={{opacity}} >
        {message}
        <span className='timer_stripe'></span>
    </div>
  )
}

export default Alert