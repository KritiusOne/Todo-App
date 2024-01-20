import { FILTERS__BUTTON } from '../consts'
import { type FiltersValue } from '../types'

interface Props {
  filterSelected: FiltersValue
  onFilterChange: (filter: FiltersValue) => void
}
export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTERS__BUTTON).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const naming = isSelected ? 'selected' : ''
          return (
            <li key={key}>
              <a href={href}
              className={naming}
              onClick={(event) => {
                event.preventDefault()
                onFilterChange(key)
              }}
              >
                {
                  literal
                }
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
