import React from 'react'
import Button from '../../ui/Button'
import Input from '../../ui/Input'

function Item({image, title, price, description, type}) {
  return (
    <div className='meal_card d-flex flex-column gap-2 position-relative'>
        <div className='image_holder'>
        </div>

        <div>
            <h2 className='text-center font_14px font_700'>{title}</h2>
            <p className='text-center font_12px font_400 m-0'>
                {description}
            </p>
        </div>
        
        <div className='d-flex gap-2'>
            <Input placeholder='quantity' type='number' classes='w-50' />
            <Button content='Order' classes='order_button w-50 font_12px font_600' />
        </div>
        
        <span className='tag px-2 font_12px font_500'>
            {type}
        </span>

        <span className='tag px-2 font_12px font_500'>
            {price}$
        </span>

    </div>
  )
}

export default Item