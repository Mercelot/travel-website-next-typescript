import { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import Button from './Button';
import Icon from './Icon'

export default function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  // Fixes button re-rendering when refresh in mobile view.
  useEffect(() => {
    showButton()
  }, [])
  
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', showButton)
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Icon onclick={closeMobileMenu}/>
          <div className={styles.menu_icon} onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`}>
            <li className={styles.nav_item}>
              <Link href='/' className={styles.nav_links} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href='/services' className={styles.nav_links} onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href='/products' className={styles.nav_links} onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href='/sign-up' className={styles.nav_links_mobile} onClick={closeMobileMenu}>
                Sign-up
              </Link>
            </li>
          </ul>
          {button && <Button style={['btn--outline']} size={['btn--large']} content={'SIGN UP'}/>}
        </div>
      </nav>
    </>
  )
}