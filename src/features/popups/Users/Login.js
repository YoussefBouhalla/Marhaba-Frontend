import React , {useState} from 'react'
import Input from '../../ui/Input'
import MessageIcon from  '../../../assets/icons/message.svg';
import LockIcon from  '../../../assets/icons/keyHole.svg';
import { useDispatch } from 'react-redux'
import { closePopupAction } from '../../../actions/popupActions';
import { openAlertAction } from '../../../actions/alertActions';
import { login } from '../../../services/UsersServices';
import { loginAction } from '../../../actions/authActions';

function Login() {

  const dispatch = useDispatch();

  const [data, setData] = useState({email: '' , password: ''});
  const [emailError, setEmailError] = useState(undefined);
  const [passError, setPassError] = useState(undefined);

  const closePopup = () => {
      dispatch(closePopupAction())
  }

  const openAlert = () => {
      dispatch(openAlertAction('Logged in succesfully.'))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(data).then(res => {
      (async() => {
        if (!res.data.error) {
          await dispatch(loginAction(res.data.accessToken));
          await closePopup();
          await openAlert();
        }else{
          if (res.data.error.email) {
            await setEmailError(res.data.error.email);
          }else if (res.data.error.password){
            await setPassError(res.data.error.password);
          }
        }
      })()
    })
  }

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  return (
    <div className='login_popup d-flex flex-column gap-3 position-relative'>
        <div className='login_intro d-flex flex-column align-items-center'>
            <p className='font_24px font_700 m-0'>Welcome back!</p>
            <span className='font_12px font_500'>we are happy to see you again!</span>
        </div>
        {/* form */}
        <form className='login_form d-flex flex-column' onSubmit={handleSubmit}>
            <Input type="email" placeholder="Email" errorMessage={emailError} Icon={MessageIcon} onChange={handleEmail} />
            <Input type="password" placeholder="Password" errorMessage={passError} Icon={LockIcon} onChange={handlePassword} />
            <button type='submit' className='font_12px font_600'>LOGIN</button>
        </form>
        <button className='close_button font_700' onClick={closePopup} >×</button>
    </div>
  )
}

export default Login