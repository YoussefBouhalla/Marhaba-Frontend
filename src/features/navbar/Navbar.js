import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import { useDispatch , useSelector } from 'react-redux'
import { openLoginAction, openRegisterAction } from '../../actions/popupActions';
import Button from '../ui/Button';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const dispatch = useDispatch();

  const token = useSelector(state => state.token);

  const openLoginPopup = () => {
    dispatch(openLoginAction())
  }

  const openRegisterPopup = () => {
    dispatch(openRegisterAction())
  }
  
  const navLinkClasses = ({isActive}) => {
    return isActive ? "active_nav" : "not_active_nav"
  }

  return (
    <nav>
        <div className='navbar_main mx-auto d-flex justify-content-between'>
            {/* logo */}
            <Logo/>
            {/* navbar Items */}
            <ul className='navbar_items d-flex font_14px font_500'>
                <li>
                  <NavLink className={navLinkClasses} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navLinkClasses} to="/our-meals">
                    Our meals
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navLinkClasses} to="/our-offers">
                    Our Offers
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navLinkClasses} to="/about-us">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navLinkClasses} to="/contact-us">
                    Contact us
                  </NavLink>
                </li>
            </ul>

            {/* authentication */}
            {!token && 
              <div className='auth_actions d-flex'>
                <Button content='login' classes='font_12px font_500' onClick={openLoginPopup} />
                <Button content='Register' classes='font_12px font_500' onClick={openRegisterPopup} />
              </div>
            }

            {token && 
              <button className="profile_button position-relative d-flex align-items-center gap-2">

                <div className="image"></div>
                <p className='font_12px font_500 m-0'>youssef Bouhalla</p>

              </button>
            }
            
        </div>
    </nav>
  )
}

export default Navbar