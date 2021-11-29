import CompanyItem from '../CompanyItem/CompanyItem'
import s from './CompaniesList.module.scss'

const CompaniesList = ({ companies }) => (
  <ul className={s.list}>
    {companies.map((company) => (
      <CompanyItem company={company} />
    ))}
  </ul>
)

export default CompaniesList
