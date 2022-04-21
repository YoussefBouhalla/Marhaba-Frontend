import React from 'react'
import Input from '../../ui/Input'
import MessageIcon from  '../../../assets/icons/message.svg';
import LockIcon from  '../../../assets/icons/key-hole.svg';
import { useDispatch } from 'react-redux'
import { closePopupAction } from '../../../actions/popupActions';

function Login() {
  
  const dispatch = useDispatch();

  const closePopup = () => {
      dispatch(closePopupAction())
  }

  return (
    <div className='login_popup d-flex flex-column gap-3 position-relative'>
        <div className='login_intro d-flex flex-column align-items-center'>
            <p className='font_24px font_700 m-0'>Welcome back!</p>
            <span className='font_12px font_500'>we are happy to see you again!</span>
        </div>
        {/* form */}
        <form className='login_form d-flex flex-column'>
            <Input type="email" placeholder="Email" errorMessage="Email not found" Icon={MessageIcon} />
            <Input type="password" placeholder="Password" errorMessage="Password is incorrect" Icon={LockIcon}/>
            <button className='font_12px font_600'>LOGIN</button>
        </form>
        <button className='close_button font_700' onClick={closePopup} >×</button>
    </div>
  )
}

export default Login