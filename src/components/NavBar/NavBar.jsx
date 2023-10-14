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
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="">About Us</NavLink></li>
          <li><NavLink to="">Add Club</NavLink></li>
          <li><NavLink to="">All Clubs</NavLink></li>
          <li><NavLink to="">All Shops</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
        </ul>
      :
      <ul>
          <li><NavLink to="">About Us</NavLink></li>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
