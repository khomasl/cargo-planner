import { NavLink } from 'react-router-dom'
import s from './CompanyItem.module.css'

const setActiveLink = ({ isActive }) => (isActive ? s.activeLink : undefined)

export default function CompanyItem({ company }) {
  const { id, name } = company

  return (
    <li key={id} className={s.item}>
      <NavLink to={name} className={s.link} style={{ setActiveLink }}>
        {name}
      </NavLink>
    </li>
  )
}
