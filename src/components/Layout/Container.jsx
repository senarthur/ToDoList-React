import styles from "./Container.module.css"

const Container = ({ children }) => {
  return (
    <div className={styles.division}>
        {children}
    </div>
  )
}

export default Container