import { type FiltersValue } from '../types'
import { Filters } from './Filters'
interface Props {
  activeCounts: number
  completeCounts: number
  filterSelected: FiltersValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FiltersValue) => void
}
export const Footer: React.FC<Props> = ({
  activeCounts = 0,
  completeCounts = 0,
  onClearCompleted,
  handleFilterChange,
  filterSelected
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong className=""> {activeCounts} </strong> Total Tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
        />
    </footer>
  )
}
