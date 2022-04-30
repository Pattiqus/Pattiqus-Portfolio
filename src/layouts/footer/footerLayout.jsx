import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';

const FooterStyles = styled.div`
    .footerLinksList {
    display: flex;
    list-style: none;
    justify-content: center;
    bottom: 0;
    width: 100%;
    position: fixed;
    background: var(--dark-bg);
}
.footerButtons {
    margin: 5px 20px 5px 20px;
    font-size: 4rem;
}
.footer__container {
    display: flex;
    flex-direction: column;

}
.trademark {
    margin: 5px 20px 5px 20px;
}
`;

export default function footerLayout(props) {
  
    const socialLinks = [
        {
            title: <FontAwesomeIcon icon={faGithub} />,
            link: 'https://github.com/Pattiqus'
        },
        {
            title: <FontAwesomeIcon icon={faLinkedin}/>,
            link: 'https://www.linkedin.com/in/pat-b-52553410a/'
        },
        {
            title: <FontAwesomeIcon icon={faTwitter} />,
            link: 'https://twitter.com/Patticus_TV'
        },
        {
            title: <FontAwesomeIcon icon={faStackOverflow} />,
            link: 'https://stackoverflow.com/users/17328724/patticus'
        },
    ]
  
    return (
    <div>
        <FooterStyles>
        <div className="footer__container">
            <ul className='footerLinksList'>
            {socialLinks.map((item, index) => (
                    <li key={index} className='footerButtons'>
                        <a href={item.link} target='_blank' rel='noreferrer'>
                        {item.title}
                        </a>
                    </li>
                ))} 
            </ul>
            <div className='trademark'>
                <span>Written by Pattiqus © </span>
            </div>
        </div>
        </FooterStyles>
        {props.children}

    </div>
  )
}
