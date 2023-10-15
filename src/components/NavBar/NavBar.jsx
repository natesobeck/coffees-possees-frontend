// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.nav}>
      {user ?
        <ul>
          {/* <li><NavLink to="/profiles">Profiles</NavLink></li> */}
          {/* <li><NavLink to="/auth/change-password">Change Password</NavLink></li> */}
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="">ABOUT US</NavLink></li>
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
        <li><NavLink to="">ABOUT US</NavLink></li>
        <li><NavLink to="/auth/login">LOG IN</NavLink></li>
        <li><NavLink to="/auth/signup">SIGN UP</NavLink></li>
      </ul>
      }
    </nav>
  )
}

export default NavBar
