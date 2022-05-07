import React from 'react'

function BreadCrumb({page}) {
  return (
    <div className='bread_crumb font_12px font_400'>
        Home / <span className='font_600'>{page}</span>
    </div>
  )
}

export default BreadCrumb