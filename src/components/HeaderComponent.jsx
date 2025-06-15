import { Link } from "react-router-dom"
import './HeaderComponent.css'

function HeaderComponent() {
  return (
    <header className="header-content">

      <h2 className="header-title">Notes App</h2>
      <nav>
        <ul className="nav-list">
          <li className="list-content">
            <Link to="/" className="link">Home</Link>
          </li>
          <li className="list-content">
            <Link to="/notes" className="link">Notes</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default HeaderComponent