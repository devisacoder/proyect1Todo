import { useContext } from 'react'
import './buttonRemoveTodo.css'
import { TodoContext } from '../../context/TodoContext'

export const ButtonRemoveTodo = ({todo}) => {
    const { deleteTodo } = useContext(TodoContext)

    const onClick = () => {
        deleteTodo(todo)
    }
    
    return (
        <div>
            <img 
                onClick={() => onClick()}
                className="img-removeTodo" 
                src="src\assets\removeTodo.svg" 
                alt="icono para eliminar tarea" 
            />
        </div>
    )
}