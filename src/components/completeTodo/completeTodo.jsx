import { useContext } from "react"
import "./completeTodo.css"
import { TodoContext } from "../../context/TodoContext"

export const CompleteTodo = ({ todo }) => {
    const { updateTodoStatus } = useContext(TodoContext)

    const isCompleted = todo.state === "COMPLETADA"

    const handleClick = () => {
        const newState = isCompleted ? "PENDIENTE" : "COMPLETADA"
        updateTodoStatus(todo.id, newState)
    }

    return (
        <img 
            className="img-completeTodo"
            src={isCompleted ? "src/assets/completed.svg" : "src/assets/complete.svg"}
            alt={isCompleted ? "Tarea completada" : "Marcar tarea como completada"}
            onClick={handleClick}
        />
    )
}
