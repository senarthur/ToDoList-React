import styles from './Select.module.css'

const Select = ({ value, handleChange, children }) => {
  return (
    <>
        <select className={styles} value={value} onChange={handleChange}>
          {children}
        </select>
    </>
  )
}

export default Select