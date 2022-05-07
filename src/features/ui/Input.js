import React from 'react'

function Input({placeholder, type, errorMessage , Icon, classes, onChange, onInput}) {
  return (
      <div className={'input_group d-flex flex-column ' + classes}>
          <div className='input_holder d-flex gap-2 px-2'>
            {Icon && 
              <>
              <div className='input_icon'>
                <Icon />
              </div>
              <hr /> 
              </>
            }
            <input type={type} placeholder={placeholder} className='ml-1' onChange={onChange} onInput={onInput} />
          </div>
        {errorMessage && <span className='error_message font_10px font_500 mt-1'>{errorMessage}</span>}
      </div>
  )
}

export default Input