// npm modules
import { HashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <div id={styles['img-cover']}></div>
      <nav className={styles.nav}>
        {user ?
          <ul>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><HashLink smooth to='#aboutUs'>ABOUT US</HashLink></li>
            <li><NavLink to="/new">NEW CLUB</NavLink></li>
            <li><NavLink to="/clubs">ALL CLUBS</NavLink></li>
            <li><NavLink to="/shops">ALL SHOPS</NavLink></li>
            <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          </ul>
        :
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="">ABOUT US</NavLink></li>
          <li><NavLink to="/clubs">ALL CLUBS</NavLink></li>
          <li><NavLink to="/shops">ALL SHOPS</NavLink></li>
          <li><NavLink to="/auth/login">LOG IN</NavLink></li>
          <li><NavLink to="/auth/signup">SIGN UP</NavLink></li>
        </ul>
        }
      </nav>
    </>
  )
}

export default NavBar
