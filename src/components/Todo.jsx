
import Button from './Layout/Button'
import Container from './Layout/Container'
import styles from './Todo.module.css'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
            <Container>
                <div className={`${styles.todo}`} style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                    <div>
                        <p>{todo.text}</p>
                        <p className={styles.category}>
                            {todo.category}
                        </p>
                    </div>
                    <div>
                        <Button 
                            buttonStyle="complete"
                            handleClick={() => completeTodo(todo.id)}
                            text="Check"
                        />
                        <Button 
                            buttonStyle="remove"
                            handleClick={() => removeTodo(todo.id)}
                            text="X"
                        />
                    </div>
            </div>
          </Container>
  )
}

export default Todo