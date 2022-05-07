import React from 'react'
import Input from '../ui/Input';
import RoundButton from '../ui/RoundButton';
import TextArea from '../ui/TextArea';
import Title from '../ui/Title';
import SendIcon from '../../assets/icons/share.svg'

function ContactUs() {
  return (
    <div className='contact_us_home d-flex mx-auto align-items-center'>
      <div className='left_section w-50' >
        <Title content='Contact Us' classes='font_20px font_700 title_right' color='#F3ECEC' />
        <p className='font_14px font_400 mt-4'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
        </p>
      </div>
      <div className='right_section w-50 d-flex flex-column'>
        <form className='d-flex flex-column gap-2 align-self-end position-relative'>
          <Input placeholder="First name" type='text' />
          <Input placeholder="Last name" type='text' />
          <Input placeholder="Email" type='email' />
          <TextArea placeholder="write us a message ..." />
          <RoundButton classes='round_contact' Icon={SendIcon} />
        </form>
      </div>
    </div>
  )
}

export default ContactUs