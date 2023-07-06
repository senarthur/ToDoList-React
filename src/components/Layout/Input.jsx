import styles from './Input.module.css'

const Input = ({ id, type, text, value, handleChange, placeholder }) => {
  return (
    <div className={styles.inputbox}>
        <input 
            className={styles.input} 
            key={id}
            id={id} 
            type={type} 
            value={value} 
            onChange={handleChange}
            placeholder={placeholder ? placeholder : ""}
            required 
        />
        <label htmlFor={id}>{text ? text : ""}</label>
    </div>
  )
}

export default Input