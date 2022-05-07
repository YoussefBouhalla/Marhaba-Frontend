import React from 'react'

function Card({title, description, amount}) {
  return (
    <div className='info_card d-flex align-items-center'>
        <div className='w-50 d-flex flex-column'>
          <h4 className='font_12px font_600 m-0' >{title}</h4>
          <p className='font_10px font_600 m-0'>{description}</p>
        </div>
        <p className='mx-auto m-0 font_12px font_600'>{amount}</p>
    </div>
  )
}

export default Card