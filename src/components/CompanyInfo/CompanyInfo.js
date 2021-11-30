import { useState, useCallback, useEffect } from 'react'
import { useApp } from '../../hooks/useApp'
import s from './CompanyInfo.module.scss'

const CompanyInfo = ({ company }) => {
  const { id, name, email, boxes } = company
  const { setCurrentCompany } = useApp()
  const [cargoBoxes, setCargoBoxes] = useState(boxes)
  let isNotValidation = false

  useEffect(() => setCargoBoxes(boxes), [company])

  const handleSubmit = useCallback((e) => e.preventDefault(), [])

  const handleChange = useCallback((e) => {
    setCargoBoxes(e.target.value)
    setCurrentCompany({ ...company, boxes: e.target.value })
  }, [])

  const calculateRequiredCargo = (boxes) => {
    const arrBoxes = boxes?.split(',') ?? []
    isNotValidation = arrBoxes.some(
      (el) => el !== ',' && el !== '.' && !(Number(el) <= 10),
    )

    if (isNotValidation || !boxes) return ''

    return Math.ceil(
      0.1 *
        arrBoxes.reduce(
          (previousValue, currentValue) =>
            Number(previousValue) + Number(currentValue),
        ),
    )
  }

  return (
    <div className={s.info}>
      <h2> {name}</h2>
      <a href={`mailto:${email}`} type="email">
        {email}
      </a>
      <p>
        Number of required cargo bays:{' '}
        <span className={s.info__reqCargo}>
          {calculateRequiredCargo(cargoBoxes)}
        </span>
      </p>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.form__label} htmlFor={id}>
          Cargo boxes
        </label>
        <input
          className={s.form__input}
          type="text"
          name="number"
          id={id}
          value={cargoBoxes}
          onChange={handleChange}
          pattern="^[0-9]?[.,]?[0-9]?[,]?$"
          title="Numbers separated by commas (the value is no more than 10)"
          required
        />
      </form>
      {isNotValidation && (
        <p className={s.info__isNotValidation}>
          Numbers separated by commas. <br /> The value is no more than 10.
        </p>
      )}
    </div>
  )
}

export default CompanyInfo
