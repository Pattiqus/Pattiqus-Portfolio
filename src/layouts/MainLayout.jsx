import React from 'react'

export default function MainLayout(props) {
  
    const listItems = [
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

        <ul>
            <li>About Me</li>
        </ul>

        {props.children}

    </div>
  )
}
