import React from 'react';
import PText from '../components/PText';
import AboutImage from '../assets/images/about_image.jpg'

export default function About() {
  return (
    <div>
        <div className='container'>
          <div className='top-section'>
            <div className='left'>
              <p className='about__subheading'>
                Hi! I am <span>Pat Brown!</span>
              </p>
              <h2 className='"about__heading'>Full Stack Web Developer</h2>
              <div className='about__info'>
                <PText>
                  Thank you for visiting my page!. I am from Melbourne, Australia.
                  A keen and curious science and technology proffesional with a combined 6 years in various
                  roles within the automotive industry, working for 2 world leading manufactuers.
                  <br/><br/>
                  Recently my curiosity has moved me away from my engineering roots
                  and lead me into the world of programming and information technology.
                  My journey begun when I decided to take the plunge and reach out to a mentor for advice on how to start coding.
                  I joined a bootcamp run by Monash University and Trilogy education services and have never looked back.
                  <br/><br/>
                  My dream is to make the world a better place through the use off technology and help others bring their goals and dreams to life
                

                </PText>
              </div>
            </div>
            <div className="right">
              <img srs={AboutImage} alt="Pat Brown Candid"/>
            </div>
          </div>
        </div>
    </div>
  )
}
