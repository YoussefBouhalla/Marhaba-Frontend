import React from 'react'

function TextArea({placeholder}) {
  return (
    <div className='input_group d-flex flex-column'>
        <div className='input_holder d-flex gap-2 px-2'>
            <textarea  placeholder={placeholder}></textarea>
        </div>
    </div>  
  )
}

export default TextArea