import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'
import '../src/index.css'

const Navbar = () => {
  return (
    
    <>
        <section className={styles.navSection}>
        <nav className={styles.navBar}>
            <div className={styles.logoBox}>
                <img src="/logo.svg" alt="Semicolon Favicon" />
            </div>

            <ul className={styles.navLinks}>
                <li><NavLink to="/individuals" className={styles.link}>Individuals</NavLink></li>
                <li><NavLink to="/businesses" className={styles.link}>Businesses</NavLink></li>
                <li><NavLink to="/about-us" className={styles.link}>About us</NavLink></li>
                <li><NavLink to="/careers" className={styles.link}>Careers</NavLink></li>
                <li><NavLink to="/our-impact" className={styles.link}>Impact</NavLink></li>

                <NavLink to="/join-talent-pool" className={styles.outlineButton} id="join-btn">Join Talent Pool</NavLink>
            </ul>
        </nav>
    </section>
    
    </>
  )
}

export default Navbar;