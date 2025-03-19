import { useTodo } from '../../hooks/useHooks'
import './buttonRemoveTodo.css'

export const ButtonRemoveTodo = ({todo}) => {
    const { deleteTodo } = useTodo()

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