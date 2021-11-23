import CompanyItem from '../CompanyItem/CompanyItem'
import s from './CompaniesList.module.css'

export default function CompaniesList({ companies }) {
  return (
    <ul className={s.list}>
      {companies.map((company) => (
        <CompanyItem company={company} />
      ))}
    </ul>
  )
}
