import { useCallback } from 'react'
import { useApp } from '../../hooks/useApp'
import fetchShipments from '../../services/shipments-api'
import s from './Button.module.css'

export default function Button() {
  const { companies, setCompanies, currentCompany } = useApp()

  const findIndexCompanyById = (id) =>
    companies.indexOf(companies.find((company) => company.id === id))

  const changeCompanies = () => {
    // console.log('companiesBtnSave :>> ', companies)
    // console.log('currentCompanyBtnSave :>> ', currentCompany)
    if (!currentCompany) return companies
    const idx = findIndexCompanyById(currentCompany.id)
    // console.log('idx :>> ', idx)
    if (idx === -1) return companies
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
    setCompanies(changeCompanies())
    window.localStorage.setItem('companies', JSON.stringify(companies))
  }, [companies])

  return (
    <div>
      <button type="button" className={s.btn} onClick={handleLoadBtnClick}>
        Load
      </button>
      <button type="button" className={s.btn} onClick={handleSaveBtnClick}>
        Save
      </button>
    </div>
  )
}
