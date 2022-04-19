import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

export default function footerLayout(props) {
  
    const socialLinks = [
        {
            title: <FontAwesomeIcon icon="fa-brands fa-github" />,
            link: 'https://github.com/Pattiqus'
        },
        {
            title: <FontAwesomeIcon icon="fa-brands fa-linkedin-in"/>,
            link: 'https://www.linkedin.com/in/pat-b-52553410a/'
        },
        {
            title: <FontAwesomeIcon icon="fa-brands fa-twitter" />,
            link: 'https://twitter.com/Patticus_TV'
        },
        {
            title: <FontAwesomeIcon icon="fa-brands fa-stack-overflow" />,
            link: 'https://stackoverflow.com/users/17328724/patticus'
        },
    ]
  
    return (
    <div>

        {/*Footer*/}

        <ul>
        {socialLinks.map((item) => (
                <li className=''>
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
