import { useCallback } from 'react'
import { useApp } from '../../hooks/useApp'
import fetchShipments from '../../services/shipments-api'
import s from './Button.module.scss'

const Button = () => {
  const { companies, setCompanies, currentCompany } = useApp()

  const findIndexCompanyById = (id) =>
    companies.indexOf(companies.find((company) => company.id === id))

  const changeCompanies = (currentCompany) => {
    if (!currentCompany) return companies
    const idx = findIndexCompanyById(currentCompany.id)
    return [
      ...companies.slice(0, idx),
      currentCompany,
      ...companies.slice(idx + 1),
    ]
  }

  const handleLoadBtnClick = useCallback(
    () =>
      fetchShipments().then((companies) => {
        setCompanies(companies)
        window.localStorage.setItem('companies', JSON.stringify(companies))
      }),
    [],
  )

  const handleSaveBtnClick = useCallback(() => {
    const changedCompanies = changeCompanies(currentCompany)
    setCompanies(changedCompanies)
    window.localStorage.setItem('companies', JSON.stringify(changedCompanies))
  }, [currentCompany, companies])

  return (
    <>
      <button type="button" className={s.btn} onClick={handleLoadBtnClick}>
        Load
      </button>
      <button type="button" className={s.btn} onClick={handleSaveBtnClick}>
        Save
      </button>
    </>
  )
}

export default Button
