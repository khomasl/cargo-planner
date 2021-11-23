import { useCallback } from 'react'
import s from './Searchbar.module.css'
import { useApp } from '../../hooks/useApp'

export default function Searchbar() {
  const { searchValue, setSearchValue } = useApp()

  const handleChange = useCallback((e) => setSearchValue(e.target.value), [
    searchValue,
  ])

  const handleSubmit = (e) => e.preventDefault()

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        {/* <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button> */}

        <input
          className={s.SearchFormInput}
          type="text"
          name="searchValue"
          value={searchValue}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search..."
        />
      </form>
    </header>
  )
}
