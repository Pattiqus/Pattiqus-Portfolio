import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './footerLayout.css';


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

        {/*Footer*/}
        
        <ul className='footerLinksList'>
        {socialLinks.map((item) => (
                <li className='footerButtons'>
                    <Link to={item.link}>
                       {item.title}
                    </Link>
                </li>
            ))} 
        </ul>

        {props.children}

    </div>
  )
}
