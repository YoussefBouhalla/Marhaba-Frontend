import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import { useDispatch } from 'react-redux'
import { openLoginAction, openRegisterAction } from '../../actions/popupActions';
import Button from '../ui/Button';

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
                <Button content='login' classes='font_12px font_500' onClick={openLoginPopup} />
                <Button content='Register' classes='font_12px font_500' onClick={openRegisterPopup} />
            </div>
        </div>
    </nav>
  )
}

export default Navbar