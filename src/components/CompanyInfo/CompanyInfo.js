import { useState, useCallback, useEffect } from 'react'
import { useApp } from '../../hooks/useApp'
import { notifyInfo } from '../../components/notify'
import s from './CompanyInfo.module.css'

export default function CompanyInfo({ company }) {
  const { id, name, email, boxes } = company
  const { setCurrentCompany } = useApp()
  const [cargoBoxes, setCargoBoxes] = useState(boxes)

  useEffect(() => setCargoBoxes(boxes), [company])

  const handleSubmit = useCallback((e) => e.preventDefault(), [])

  const handleChange = useCallback((e) => {
    setCargoBoxes(e.target.value)
    setCurrentCompany({ ...company, boxes: e.target.value })
  }, [])

  const calculateRequiredCargo = (boxes) => {
    const RequiredCargo = boxes
      ? Math.ceil(
          0.1 *
            boxes
              .split(',')
              .reduce((previousValue, currentValue) =>
                currentValue <= 10
                  ? Number(previousValue) + Number(currentValue)
                  : notifyInfo('Через запятую числа (значение - не больше 10)'),
              ),
        )
      : 0

    return RequiredCargo ?? ''
  }

  return (
    <div className={s.info}>
      <h2> {name}</h2>
      <a href={`mailto:${email}`} type="email">
        {email}
      </a>
      <p>
        Number of required cargo bays:{' '}
        <span className={s.reqCargo}>{calculateRequiredCargo(cargoBoxes)}</span>
      </p>
      <form onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={id}>
          Cargo boxes
        </label>
        <input
          className={s.input}
          type="text"
          name="number"
          id={id}
          value={cargoBoxes}
          onChange={handleChange}
          pattern="^[0-9]?[.,]?[0-9]?[,]?$"
          title="Через запятую числа (значение - не больше 10)"
          required
        />
      </form>
    </div>
  )
}
