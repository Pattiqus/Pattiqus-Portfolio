import React from 'react'
import { Link } from "react-router-dom";

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

        <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            justifyContent: 'right'
        }}>
            {navItems.map((item) => (
                <li style={{ margin: "0px 5px 0px 5px"}}>
                    <Link to={item.link}>
                       {item.title}
                    </Link></li>
            ))}
        </ul>

        {props.children}

    </div>
  )
}
