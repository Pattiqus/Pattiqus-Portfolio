import React from 'react'
import { Link } from "react-router-dom";
import './NavLayout.css';


export default function NavLayout(props) {
  
    const navItems = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Portfolio',
            link: '/portfolio'
        },
        {
            title: 'Contact',
            link: '/contact'
        },
    ];
  
    return (

    <div>

        {/* nav bar */} 

        <ul className='navBarList'>
            {navItems.map((item) => (
                <li className='navButtons'>
                    <Link to={item.link}>
                       {item.title}
                    </Link></li>
            ))}
        </ul>

        {props.children}

    </div>
  )
}
