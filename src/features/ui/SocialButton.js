import React from 'react'

function SocialButton({Icon, color}) {
  return (
    <button className="social_button" style={{backgroundColor: color}} >
        <Icon />
    </button>
  )
}

export default SocialButton