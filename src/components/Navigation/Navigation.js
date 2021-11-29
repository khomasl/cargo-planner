import Searchbar from '../Searchbar/Searchbar'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import s from './Navigation.module.scss'

const Navigation = () => (
  <>
    <nav className={s.nav}>
      <h1 className={s.nav__title}>
        <Link to="/" className={s.nav__link}>
          Cargo Planner
        </Link>
      </h1>
      <Searchbar />
      <Button />
    </nav>
    <hr />
  </>
)

export default Navigation
