import React from 'react'
import Input from '../../ui/Input'
import MessageIcon from  '../../../assets/icons/message.svg';
import LockIcon from  '../../../assets/icons/key-hole.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';
import CallIcon from '../../../assets/icons/call.svg';
import UsersIcon from '../../../assets/icons/users.svg';
import Select from '../../ui/Select';
import { useDispatch } from 'react-redux'
import { closePopupAction } from '../../../actions/popupActions';

function Register() {

    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch(closePopupAction())
    }

  return (
    <div className='login_popup d-flex flex-column gap-3 position-relative'>
        <div className='login_intro d-flex flex-column align-items-center'>
            <p className='font_24px font_700 m-0'>Create an account</p>
        </div>
        {/* form */}
        <form className='login_form d-flex flex-column'>
            <Input type="text" placeholder="UserName" Icon={ProfileIcon} />
            <Input type="text" placeholder="Firstname" Icon={ProfileIcon} />
            <Input type="text" placeholder="Lastname"  Icon={ProfileIcon} />
            <Input type="email" placeholder="Email" Icon={MessageIcon} />
            <Input type="password" placeholder="Password" Icon={LockIcon} />
            <Input type="password" placeholder="Repeat password" Icon={LockIcon} />
            <Input type="number" placeholder="Phone number" Icon={CallIcon} />
            <Select options={['deliverer' , 'client']} Icon={UsersIcon} />
            <button className='font_12px font_600'>REGISTER</button>
        </form>
        <button className='close_button font_700' onClick={closePopup} >×</button>
    </div>
  )
}

export default Register