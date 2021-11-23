import { lazy, Suspense } from 'react'
import { useParams } from 'react-router'
import { useApp } from '../hooks/useApp'
import Loader from '../components/Loader/Loader'

const CompanyInfo = lazy(() => import('../components/CompanyInfo/CompanyInfo'))

export default function CompanyDetailsPage() {
  const { companies } = useApp()
  const { companyName } = useParams()

  const findCompany = (name) => {
    const normName = name.toLowerCase()
    return companies.find((company) => company.name.toLowerCase() === normName)
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        {companies.length > 0 && (
          <CompanyInfo company={findCompany(companyName)} />
        )}
      </Suspense>
    </>
  )
}
