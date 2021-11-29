import { NavLink } from 'react-router-dom'
import s from './CompanyItem.module.scss'

const setActiveLink = ({ isActive }) => {
  return isActive ? s.activeLink : s.link
}

const CompanyItem = ({ company }) => {
  const { id, name } = company

  return (
    <li key={id} className={s.item}>
      <NavLink to={name} className={setActiveLink}>
        {name}
      </NavLink>
    </li>
  )
}
export default CompanyItem
