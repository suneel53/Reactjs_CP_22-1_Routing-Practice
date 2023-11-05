// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-logo-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-image"
      />
      <h1 className="logo-head">Wave</h1>
    </div>
    <ul className="nav-ul">
      <li className="list">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="list">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="list">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
