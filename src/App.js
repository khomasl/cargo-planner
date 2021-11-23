import './App.css'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './hoc/AppProvider'
import Navigation from './components/Navigation/Navigation'
import Loader from './components/Loader/Loader'

const CompaniesPage = lazy(() =>
  import('./pages/CompaniesPage' /* webpackChunkName: 'Companies Page' */),
)

export default function App() {
  return (
    <div className="App">
      <AppProvider>
        <Navigation />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/*" element={<CompaniesPage />} />
          </Routes>
        </Suspense>
      </AppProvider>
    </div>
  )
}
