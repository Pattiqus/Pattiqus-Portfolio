import React from 'react'
import { Link } from "react-router-dom";
import './NavLayout.css';


export default function NavLayout(currentPage, handlePageChange) {
  
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
            link: '../../../../assets/Resume/Resume - Patrick Brown.pdf'
        },
    ];
  
    return (

    <div>

        {/* nav bar */} 

        <ul className='navBarList'>
            {navItems.map((item) => (
                <li className={currentPage === item.title ? 'navButtonsActive' : 'navButtons'}>
                    <Link to={item.link} onClick={()=> handlePageChange(item.title)}>
                       {item.title}
                    </Link>
                </li>
            ))}
        </ul>

        {/* {props.children} */}

    </div>
  )
}
