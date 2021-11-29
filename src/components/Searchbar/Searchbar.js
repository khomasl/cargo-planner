import { useCallback } from 'react'
import { useApp } from '../../hooks/useApp'
import s from './Searchbar.module.scss'

const Searchbar = () => {
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
          className={s.SearchForm__Input}
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

export default Searchbar
