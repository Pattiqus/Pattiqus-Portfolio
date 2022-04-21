import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SectionTitle from './SectionTitle';
import { MdLocalPhone, MdEmail, MdPlace } from 'react-icons/md'

const ContactSectionStyle = styled.div`
  // padding: 10rem 0;
`;



export default function ContactComponent() {
  return (
    <ContactSectionStyle>
    <div>
        <div className="container">
            <SectionTitle heading="Contact" subheading="Let's Chat!"/>
            <div className='contactSection__wrapper'>
              <div className='left'>
                <ContactInfo icon={<MdLocalPhone />} text='04** *** ***'/>
                <ContactInfo icon={<MdEmail />} text='patticus.tv@gmail.com'/>
                <ContactInfo icon={<MdPlace />} text='Melbourne, Australia'/>
              </div>
              <div className='right'>
                <ContactForm/>
              </div>
            </div>
        </div>
    </div>
    </ContactSectionStyle>
  )
}
