import styles from './Button.module.css'

const Button = ({ type, text, handleClick, buttonStyle }) => {
  return (
    <>
        <button 
            className={styles[buttonStyle]} 
            type={type ? type : ""}
            onClick={handleClick} >
                {text}
        </button>
    </>
  )
}

export default Button