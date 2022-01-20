import React from 'react'
import * as styles from './mobile-menu.module.css'
import { Link } from 'gatsby'
import { FaWindowClose } from 'react-icons/fa'
import { mobileMenu } from './mobile-menu-handler'

const MobileMenu = () => (
  <div id={'mobileNav'} className={styles.mobileMenu}>
    <div className={styles.closeButtonMobileContainer}>
      <FaWindowClose size={30} onClick={mobileMenu}/>
    </div>
    <ul className={styles.navLinksMobile}>
      <Link to='/' className={styles.navLinksItemMobile}>
        <li><p>Home</p></li>
      </Link>
      <Link to='/about' className={styles.navLinksItemMobile}>
        <li><p>About</p></li>
      </Link>
      <Link to='/blog' className={styles.navLinksItemMobile}>
        <li><p>Blog</p></li>
      </Link>
    </ul>
  </div>
)

export default MobileMenu