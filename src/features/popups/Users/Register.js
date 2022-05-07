import React, { useState } from 'react'
import Input from '../../ui/Input'
import MessageIcon from  '../../../assets/icons/message.svg';
import LockIcon from  '../../../assets/icons/keyHole.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';
import CallIcon from '../../../assets/icons/call.svg';
import UsersIcon from '../../../assets/icons/users.svg';
import Select from '../../ui/Select';
import { useDispatch } from 'react-redux'
import { closePopupAction } from '../../../actions/popupActions';
import { register } from '../../../services/UsersServices';

function Register() {

    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch(closePopupAction())
    }

    const [data, setData] = useState({
        username : "",
        firstName : "",
        lastName : "",
        password : "",
        repeatPassword : "",
        phoneNumber : "",
        role : "",
        email : "",
        image : "",
        address : ""
    })

    const [role, setRole] = useState(undefined);

    const handleUsername = (e) => {
        setData({ ...data, username: e.target.value });
    };

    const handleFirstname = (e) => {
        setData({ ...data, firstName: e.target.value });
    };

    const handleLastName = (e) => {
        setData({ ...data, lastName: e.target.value });
    };

    const handlePassword = (e) => {
        setData({ ...data, password: e.target.value });
    };

    const handleRepeatedPassword = (e) => {
        setData({ ...data, repeatPassword: e.target.value });
    };

    const handlePhoneNumber = (e) => {
        setData({ ...data, phoneNumber: e.target.value });
    };

    const handleRole = (e) => {
        setData({ ...data, role: e.target.value });
        setRole(e.target.value)
    };

    const handleEmail = (e) => {
        setData({ ...data, email: e.target.value });
    };

    const handleImage = (e) => {
        setData({ ...data, image: e.target.value });
    };

    const handleAddress = (e) => {
        setData({ ...data, address: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        register(data).then()
    }

  return (
    <div className='login_popup d-flex flex-column gap-3 position-relative'>
        <div className='login_intro d-flex flex-column align-items-center'>
            <p className='font_24px font_700 m-0'>Create an account</p>
        </div>
        {/* form */}
        <form className='login_form d-flex flex-column'>
            <Input type="text" placeholder="UserName" Icon={ProfileIcon} onChange={handleUsername}  />
            <Input type="text" placeholder="Firstname" Icon={ProfileIcon} onChange={handleFirstname} />
            <Input type="text" placeholder="Lastname"  Icon={ProfileIcon} onChange={handleLastName} />
            <Input type="email" placeholder="Email" Icon={MessageIcon} onChange={handleEmail} />
            <Input type="password" placeholder="Password" Icon={LockIcon} onChange={handlePassword} />
            <Input type="password" placeholder="Repeat password" Icon={LockIcon} onChange={handleRepeatedPassword} />
            <Input type="number" placeholder="Phone number" Icon={CallIcon} onChange={handlePhoneNumber} />
            <Input type="text" placeholder="Image" Icon={ProfileIcon} onChange={handleImage} />
            <Select subject="role" options={['deliverer' , 'client']} Icon={UsersIcon} onChange={handleRole} />
            <Input type="text" placeholder="address" Icon={ProfileIcon} onChange={handleImage} />
            <button type='submit' className='font_12px font_600'>REGISTER</button>
        </form>
        <button className='close_button font_700' onClick={closePopup} >×</button>
    </div>
  )
}

export default Register