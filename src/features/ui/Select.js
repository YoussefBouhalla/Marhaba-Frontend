import React from 'react'

function Select({options, errorMessage, Icon}) {
  return (
        <div className='input_group d-flex flex-column'>
            <div className='input_holder d-flex gap-2 px-2'>
                <div className='input_icon'>
                    <Icon />
                </div>
                <hr />
                <select>
                    <option value="none" disabled selected hidden>Choose a role</option>
                    {options.map(opt => 
                        (<option value={opt}>{opt}</option>)
                    )}
                </select>
            </div>
            {errorMessage && <span className='error_message font_10px font_500 mt-1'>{errorMessage}</span>}
        </div>  
        )
}

export default Select