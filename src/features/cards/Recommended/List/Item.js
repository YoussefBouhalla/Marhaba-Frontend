import React from 'react'

function Item() {
  return (
    <div className='rec_item d-flex'>
      <div className="image_holder">
        
      </div>
      <div className="infos">
        <h2 className='font_14px font_700'>Pepperoni Pizza</h2>

        <p className='font_10px font_400 m-0'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        </p>

        <span className='rec_tag px-2 font_10px font_500'>Mains</span>
      </div>
    </div>
  )
}

export default Item