import React from 'react'
import Login from './Users/Login'
import Register from './Users/Register'
import { useSelector } from 'react-redux'

function Background() {

  const popup = useSelector(state => state.popup)

  return (
    <div className='popup_background d-flex align-items-center justify-content-center'>
        {popup === "register" && <Register/>}
        {popup === "login" && <Login/>}
    </div>
  )
}

export default Background