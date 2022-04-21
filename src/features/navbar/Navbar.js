import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import { useDispatch } from 'react-redux'
import { openLoginAction, openRegisterAction } from '../../actions/popupActions';

function Navbar() {

  const dispatch = useDispatch();

  const openLoginPopup = () => {
    dispatch(openLoginAction())
  }

  const openRegisterPopup = () => {
    dispatch(openRegisterAction())
  }

  return (
    <nav>
        <div className='navbar_main mx-auto d-flex justify-content-between'>
            {/* logo */}
            <Logo/>
            {/* navbar Items */}
            <ul className='navbar_items d-flex font_14px font_500'>
                <li>Home</li>
                <li>Our meals</li>
                <li>Our Offers</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>

            {/* authentication */}
            
            <div className='auth_actions d-flex'>
                <button className='font_12px font_500' onClick={openLoginPopup} >Login</button>
                <button className='font_12px font_500' onClick={openRegisterPopup} >Register</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar