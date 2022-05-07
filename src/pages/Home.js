import React from 'react'
import Button from '../features/ui/Button';
import heroIllustration from '../assets/images/hero.png'
import aboutIllustration from '../assets/images/about.png'
import Title from '../features/ui/Title';
import ShopIcon from '../assets/icons/shop.svg'
import Footer from '../features/footer/Footer';

function Home() {

  return (
      <>
        <div className="main py-4 d-flex flex-column gap-4">
            {/* Hero header */}
            <header className='hero_header d-flex'>
                <div className='intro w-50 d-flex flex-column justify-content-center gap-3'>
                    <h1 className='m-0 font_26px font_700'>Welcome To Marhaba !</h1>
                    <p className='m-0 font_20px font_400' >An application that links between us and clients to provide shipping services. and deliver your best meals to your home.</p>
                    <Button content='Join us now' classes='font_16px font_600 hero_button' />
                </div>
                <div className='image_section w-50 d-flex justify-content-center'>
                    <img src={heroIllustration} alt="heroIllustration" />
                </div>
            </header>

            {/* Title section */}
            <div className='d-flex justify-content-center'>
                <Title content='Our Services' classes='font_20px font_700 title_center' />
            </div>
            
            {/* Services cards */}
            <div className='services_cards d-flex justify-content-center'>
                <div className='service_card d-flex flex-column justify-content-center align-items-center' >
                    <div className='icon_holder'>
                        <ShopIcon />
                    </div>
                    <h1 className='font_14px font_700 mt-3' >Delicious food</h1>
                    <p className='font_12px font_400 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
                    <Button content='Find now' classes='font_12px font_600 service_card_button' />
                </div>
                
                <div className='service_card d-flex flex-column justify-content-center align-items-center' >
                    <div className='icon_holder'>
                        <ShopIcon />
                    </div>
                    <h1 className='font_14px font_700 mt-3' >Delicious food</h1>
                    <p className='font_12px font_400 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
                    <Button content='Find now' classes='font_12px font_600 service_card_button' />
                </div>

                <div className='service_card d-flex flex-column justify-content-center align-items-center' >
                    <div className='icon_holder'>
                        <ShopIcon />
                    </div>
                    <h1 className='font_14px font_700 mt-3' >Delicious food</h1>
                    <p className='font_12px font_400 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
                    <Button content='Find now' classes='font_12px font_600 service_card_button' />
                </div>
            </div>

            {/* About us */}
            <div className='about_section d-flex mt-4 mx-auto'>
                <div className='image_section w-50 d-flex justify-content-center'>
                    <img src={aboutIllustration} alt="aboutIllustration" />
                </div>
                <div className='w-50'>
                    <div className='title_section'>
                        <Title content='About Us' classes='font_20px font_700 title_right' />
                    </div>
                    <p className='m-0 font_18px font_400 mt-4'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                    </p>
                </div>
            </div>
            
        </div>

        {/* footer */}
        <Footer />

      </>
  )
}

export default Home