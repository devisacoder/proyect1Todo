import { useContext } from 'react'
import './buttonRemoveTodo.css'
import { TodoContext } from '../../context/TodoContext'

export const ButtonRemoveTodo = ({todo}) => {
    const { deleteTodo } = useContext(TodoContext)
    
    return (
        <div>
            <img 
                onClick={() =>  deleteTodo(todo.id)}
                className="img-removeTodo" 
                src="src\assets\removeTodo.svg" 
                alt="icono para eliminar tarea" 
            />
        </div>
    )
}