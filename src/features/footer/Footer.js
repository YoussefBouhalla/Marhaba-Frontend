import React from 'react'
import ContactUs from './ContactUs'
import Logo from '../../assets/icons/logo.svg'
import Button from '../ui/Button'
import SocialButton from '../ui/SocialButton'
import FacebookLogo from '../../assets/icons/facebook.svg'
import InstagramLogo from '../../assets/icons/instagram.svg'
import LinkedInLogo from '../../assets/icons/linkedin.svg'
import TwitterLogo from '../../assets/icons/twitter.svg'

function Footer() {
  return (
    <footer className='d-flex flex-column gap-5'>
        <ContactUs />

        <div className='footer_bottom d-flex justify-content-between'>

          <div className='left_section w-50'>
            <Logo />

            <ul className='main_list d-flex gap-5 p-0 m-0'>
              <li>
                <ul className='pseudo_list d-flex flex-column p-0 m-0 gap-2'>
                  <li className='font_14px font_600'>Content</li>
                  <li className='font_12px font_400'>Our Meals</li>
                  <li className='font_12px font_400'>Our Offers</li>
                </ul>
              </li>

              <li>
                <ul className='pseudo_list d-flex flex-column p-0 m-0 gap-2'>
                  <li className='font_14px font_600'>Company</li>
                  <li className='font_12px font_400'>About us</li>
                  <li className='font_12px font_400'>Contact us</li>
                  <li className='font_12px font_400'>Help</li>
                  <li className='font_12px font_400'>Blog</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className='right_section d-flex flex-column align-items-end gap-4'>
            <Button content="Join us now" classes="font_12px font_500 footer_button" />

            <div>
              <p className="font_12px font_600">Social Media</p>
              <p className="font_10px font_400">Contact us and see our latest updates at our social media </p>
            </div>

            <div className='social_media_container d-flex gap-2'>
              <SocialButton color="#516EAB" Icon={FacebookLogo}/>
              <SocialButton color="#29C5F6" Icon={TwitterLogo}/>
              <SocialButton color="#D82ECC" Icon={InstagramLogo}/>
              <SocialButton color="#0266A0" Icon={LinkedInLogo}/>
            </div>
          </div>

        </div>
        <p className='footer_copyright m-0 font_10px font_400'>
          Copyright © 2022 Marhaba All rights reserved.
        </p>
    </footer>
  )
}

export default Footer