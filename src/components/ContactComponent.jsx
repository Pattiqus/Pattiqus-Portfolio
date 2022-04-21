import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  // padding: 10rem 0;
`;



export default function ContactComponent() {
  return (
    <ContactSectionStyle>
    <div>
        <div className="container">
            <SectionTitle heading="Contact" subheading="Get in touch!"/>
            <div className='contactSection__wrapper'>
              <div className='left'>
                <ContactInfo/>
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
