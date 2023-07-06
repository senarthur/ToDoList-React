import { useState } from 'react'

import Input from './Layout/Input'
import Select from './Layout/Select';
import Button from './Layout/Button';

import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) {
            return;
        }
        addTodo(value, category);
        setValue("");
        setCategory("");
    }
    
  return (
    <div>
        <h2>Criar tarefa</h2>
        <form onSubmit={handleSubmit}>
            <Input 
                id="todoName"
                type="text"
                text="Tarefa"
                value={value}
                handleChange={(e) => setValue(e.target.value)}
            />
            <div className={styles.customClass}>
                <Select value={category} handleChange={(e) => setCategory(e.target.value)} >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </Select>
                <Button
                    type="submit"
                    text="Adicionar"
                />
            </div>
        </form>
    </div>
  )
}

export default TodoForm