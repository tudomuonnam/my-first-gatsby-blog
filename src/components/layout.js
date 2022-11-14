import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
        <div>
            <nav>
                <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/">Home</Link>
                    </li>
                <li className={navLinkItem}>
                    <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>


    </div>
    
  )
}

export default Layout