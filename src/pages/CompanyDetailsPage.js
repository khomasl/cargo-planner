import { lazy, Suspense } from 'react'
import { useParams } from 'react-router'
import { useApp } from '../hooks/useApp'
import Loader from '../components/Loader/Loader'
// import CompanyInfo from '../components/CompanyInfo/CompanyInfo'
const CompanyInfo = lazy(() => import('../components/CompanyInfo/CompanyInfo'))

const CompanyDetailsPage = () => {
  const { companies } = useApp()
  const { companyName } = useParams()

  const findCompany = (name) => {
    const normName = name.toLowerCase()
    return companies.find((company) => company.name.toLowerCase() === normName)
  }

  const company = findCompany(companyName)

  return (
    <>
      <Suspense fallback={<Loader />}>
        {company && <CompanyInfo company={company} />}
      </Suspense>
    </>
  )
}

export default CompanyDetailsPage
