import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useApp } from '../hooks/useApp'
import CompaniesList from '../components/CompaniesList/CompaniesList'

const CompanyDetailsPage = lazy(() =>
  import(
    '../pages/CompanyDetailsPage' /* webpackChunkName: 'Company Details Page' */
  ),
)

export default function CompaniesPage() {
  const { companies, searchValue } = useApp()

  const filteredCompaniesByName = () =>
    companies.filter((company) =>
      company.name.toLowerCase().includes(searchValue),
    )

  return (
    <div className="contentApp">
      {companies.length > 0 && (
        // <div className="contentApp">
        <>
          <CompaniesList companies={filteredCompaniesByName()} />

          <Routes>
            <Route path="/:companyName" element={<CompanyDetailsPage />} />
          </Routes>

          {/* </div> */}
        </>
      )}
    </div>
  )
}
