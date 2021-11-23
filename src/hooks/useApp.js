import { useContext } from 'react'
import { AppContext } from '../hoc/AppProvider'

export function useApp() {
  return useContext(AppContext)
}
