import React from 'react'
import Title from '../../ui/Title'
import List from './List/List'
import SocialButton from '../../ui/SocialButton'
import FacebookLogo from '../../../assets/icons/facebook.svg'
import InstagramLogo from '../../../assets/icons/instagram.svg'
import LinkedInLogo from '../../../assets/icons/linkedin.svg'
import TwitterLogo from '../../../assets/icons/twitter.svg'


function Recommended() {
  return (
      <div className='d-flex flex-column gap-3'>
        <div className='recommended_section d-flex flex-column gap-2'>
            <Title classes='title_right font_20px font_700' content="Recommended" />

            <List />
        </div>
        <div className='d-flex gap-2'>
            <p className='font_10px font_400'>Copyright © 2022 Marhaba All rights reserved.</p>
            <div className='social_media_container d-flex gap-2'>
                <SocialButton color="#516EAB" Icon={FacebookLogo}/>
                <SocialButton color="#29C5F6" Icon={TwitterLogo}/>
                <SocialButton color="#D82ECC" Icon={InstagramLogo}/>
                <SocialButton color="#0266A0" Icon={LinkedInLogo}/>
            </div>
        </div>
      </div>
  )
}

export default Recommended