import { createContext, useState, useEffect } from 'react'
import { notifyInfo } from '../components/notify'

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('')
  const [currentCompany, setCurrentCompany] = useState(null)
  const [companies, setCompanies] = useState(
    () => JSON.parse(window.localStorage.getItem('companies')) ?? [],
  )

  useEffect(() => {
    if (companies.length === 0)
      notifyInfo(`Please press button "Load" to loading a set over the network`)
  }, [])

  const value = {
    companies,
    setCompanies,
    currentCompany,
    setCurrentCompany,
    searchValue,
    setSearchValue,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
