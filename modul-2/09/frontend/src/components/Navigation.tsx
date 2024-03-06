import { Link } from "react-router-dom"
import styles from "./Nav.module.css"

const Navigation = () => {
  return (
    <nav className="flex justify-between py-3 items-center">
      <h1 className="text-base md:text-xl">Network Call Practice</h1>
      <ul className={styles.menu}>
        <li>
          <Link to="/" className="text-sm md:text-base">Home</Link>
        </li>
        <li>
          <Link to="/register" className="text-sm md:text-base">Register</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation