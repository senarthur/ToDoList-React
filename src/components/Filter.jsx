import Button from "./Layout/Button"
import Select from "./Layout/Select"

import styles from "./Filter.module.css"

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className={styles.filter_options}>
        <div>
            <p>Status: </p>
            <Select value={filter} handleChange={(e) => setFilter(e.target.value)}>
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incomplete">Incompletas</option>
            </Select>
        </div>
        <div>
            <p>Ordem Alfabética</p>
            <Button 
                text="Asc"
                handleClick={() => setSort("Asc")}
            />
            <Button 
                text="Desc"
                handleClick={() => setSort("Desc")}
            />
        </div>
    </div>
  )
}

export default Filter