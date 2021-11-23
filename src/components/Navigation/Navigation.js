import s from './Navigation.module.css'
import Searchbar from '../Searchbar/Searchbar'
import Button from '../Button/Button'
import { Link, Outlet } from 'react-router-dom'

const Navigation = () => (
  <>
    <nav className={s.nav}>
      <h1>
        <Link to="/" className={s.link}>
          Cargo Planner
        </Link>
      </h1>
      <Searchbar />
      <Button />
    </nav>
    <hr />

    <Outlet />
  </>
)

export default Navigation
