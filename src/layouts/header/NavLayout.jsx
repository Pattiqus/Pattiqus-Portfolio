import React from 'react'
import { Link, useLocation } from "react-router-dom";
import './NavLayout.css';


export default function NavLayout() {
  
    const navItems = [
        {
            title: 'Home',
            link: '/home'
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
        {
            title: 'Resume',
            link: 'google.drive can lock in google drive after grade'
        },
    ];

    const location = useLocation();

    return (

    <div>

        {/* nav bar */} 

        <ul className='navBarList'>
            {navItems.map((item) => (
                <li key={item.link} className={location.pathname === item.link ? 'navButtonsActive' : 'navButtons'}>
                    <Link to={item.link} >
                       {item.title}
                    </Link>
                </li>
            ))}
        </ul>

        {/* {props.children} */}

    </div>
  )
}
